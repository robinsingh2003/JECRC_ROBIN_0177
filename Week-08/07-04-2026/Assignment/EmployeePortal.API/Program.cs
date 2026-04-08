using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.OpenApi;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore; // Required for MySQL
using System.Text;
using EmployeePortal.API.Models;
using EmployeePortal.API.Data; // Ensure this matches your namespace for AppDbContext

var builder = WebApplication.CreateBuilder(args);

// --- 1. SERVICE REGISTRATION SECTION ---

builder.Services.AddControllers(); 
builder.Services.AddOpenApi();

// MySQL Database Configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// JWT Authentication Configuration
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "YourCompany",
            ValidAudience = "YourPortal",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourVerySecretKey12345!_MustBe32CharsLong"))
        };
    });

// CORS Configuration (Allows React to talk to .NET)
builder.Services.AddCors(options => {
    options.AddPolicy("ReactAppPolicy", policy => {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// --- 2. MIDDLEWARE PIPELINE SECTION ---

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Order is Critical: CORS -> Auth -> Controllers
app.UseCors("ReactAppPolicy"); 

app.UseAuthentication(); 
app.UseAuthorization();  

app.MapControllers();
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AppDbContext>();
    
    if (!context.Employees.Any())
    {
        context.Employees.AddRange(
            new Employee { Name = "Alice Johnson", Role = "Senior Engineer", Email = "alice@portal.io" },
            new Employee { Name = "Bob Smith", Role = "Product Manager", Email = "bob@portal.io" },
            new Employee { Name = "Charlie Davis", Role = "UX Designer", Email = "charlie@portal.io" }
        );
        context.SaveChanges();
    }
}

app.Run();