var builder = WebApplication.CreateBuilder(args);

// --- PIECE 1: ADD THESE SERVICES ---
builder.Services.AddControllers(); // Needed for your Bike/Employee controllers
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddOpenApi(); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    
    // --- PIECE 2: ENABLE SWAGGER UI ---
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        // Tell Swagger to look at the new .NET 10 OpenAPI document
        options.SwaggerEndpoint("/openapi/v1.json", "v1");
    });
}

app.UseHttpsRedirection();

// --- PIECE 3: MAP YOUR CONTROLLERS ---
app.MapControllers(); 
app.Run();

