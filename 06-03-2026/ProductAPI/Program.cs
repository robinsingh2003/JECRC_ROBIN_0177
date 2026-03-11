// using ProductAPI.Data;
// using Microsoft.EntityFrameworkCore;

// var builder = WebApplication.CreateBuilder(args);

// // Add services
// builder.Services.AddControllers();

// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// // Database connection (we can keep it for later)
// builder.Services.AddDbContext<ApplicationDBContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// var app = builder.Build();

// // Middleware
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

// app.MapControllers();

// app.Run();

// using Microsoft.EntityFrameworkCore;
// using ProductAPI.Data;
// using Microsoft.OpenApi.Models;

// var builder = WebApplication.CreateBuilder(args);

// // 1. Services Section
// builder.Services.AddControllers();

// // Swagger add karne ke liye ye do lines zaroori hain
// builder.Services.AddEndpointsApiExplorer(); 
// // builder.Services.AddSwaggerGen(); 
// builder.Services.AddSwaggerGen(options =>
// {
//     options.SwaggerDoc("v1", new OpenApiInfo
//     {
//         Title = "Product API",
//         Version = "v1"
//     });
// });          

// // Database Context (MySQL)
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseMySql(
//         builder.Configuration.GetConnectionString("DefaultConnection"),
//         ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
//     )
// );

// // CORS Policy
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAll",
//         policy =>
//         {
//             policy.AllowAnyOrigin()
//                   .AllowAnyHeader()
//                   .AllowAnyMethod();
//         });
// });

// var app = builder.Build();

// // 2. Middleware Section (Order matters!)

// // Swagger hamesha Development environment mein enable karte hain
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI(); // Isse hi UI page khulta hai
// }

// app.UseStaticFiles();
// app.UseCors("AllowAll");
// app.UseAuthorization(); // Security ke liye ye zaroori hai
// app.MapControllers();

// app.Run();




// using Microsoft.EntityFrameworkCore;
// using ProductAPI.Data;
// using Microsoft.OpenApi.Models;

// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddControllers();
// builder.Services.AddEndpointsApiExplorer();

// builder.Services.AddSwaggerGen(options =>
// {
//     options.SwaggerDoc("v1", new OpenApiInfo
//     {
//         Title = "Product API",
//         Version = "v1"
//     });
// });

// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseMySql(
//         builder.Configuration.GetConnectionString("DefaultConnection"),
//         ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
//     )
// );

// var app = builder.Build();

// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseAuthorization();
// app.MapControllers();

// app.Run();




using Microsoft.EntityFrameworkCore;
using ProductAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Add Database Context
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Enable Static Files (for HTML in wwwroot)
app.UseStaticFiles();

// Enable CORS
app.UseCors("AllowAll");

// Map Controllers
app.MapControllers();

app.Run();