var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();
app.MapGet("/", () => 
    Results.Content(@"
        <html>
            <head><title>Welcome Page</title></head>
            <body style='font-family: Arial, sans-serif; text-align: center; margin-top: 50px;'>
                <h1 style='color: #007bff;'>System Status: Online</h1>
                <p>Welcome! The backend server is running successfully.</p>
                <hr style='width: 50%;'>
                <p style='color: gray;'>Last Updated: " + DateTime.Now.ToString("T") + @"</p>
            </body>
        </html>", "text/html"));
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
