using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
var databaseProvider = builder.Configuration["DatabaseProvider"];
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    if (string.Equals(databaseProvider, "Sqlite", StringComparison.OrdinalIgnoreCase) ||
        connectionString.Contains("Data Source", StringComparison.OrdinalIgnoreCase))
    {
        options.UseSqlite(connectionString);
    }
    else
    {
        options.UseSqlServer(connectionString);
    }
});
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddDefaultIdentity<IdentityUser>(options =>
    {
        options.SignIn.RequireConfirmedAccount = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
    })
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

await SeedIdentityAsync(app.Services);

app.Run();

static async Task SeedIdentityAsync(IServiceProvider services)
{
    using var scope = services.CreateScope();
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    await db.Database.EnsureCreatedAsync();

    const string adminRole = "Admin";
    if (!await roleManager.RoleExistsAsync(adminRole))
    {
        await roleManager.CreateAsync(new IdentityRole(adminRole));
    }

    const string adminEmail = "admin@foodie.local";
    var admin = await userManager.FindByEmailAsync(adminEmail);
    if (admin is null)
    {
        admin = new IdentityUser
        {
            UserName = adminEmail,
            Email = adminEmail,
            EmailConfirmed = true
        };
        await userManager.CreateAsync(admin, "Admin@12345");
    }

    if (!await userManager.IsInRoleAsync(admin, adminRole))
    {
        await userManager.AddToRoleAsync(admin, adminRole);
    }
}
