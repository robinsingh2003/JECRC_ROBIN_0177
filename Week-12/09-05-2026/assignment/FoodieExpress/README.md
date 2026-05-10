# FoodieExpress - Online Food Ordering System

FoodieExpress is an ASP.NET Core MVC food ordering application with a Swiggy-style menu UI, customer cart and checkout, admin food/order management, ASP.NET Identity authentication, SQL Server persistence, Web API endpoints, Docker support, and an Azure DevOps pipeline.

## Features

- Customer registration, login, logout, and Identity forgot-password page.
- Food browse, category filter, search, details, cart, checkout, order history, and invoice.
- Admin dashboard, food item CRUD, image upload, category management, order status updates.
- Web API: `GET /api/fooditems?search=pizza`.
- Seeded menu data and seeded admin account.

## Default Admin

- Email: `admin@foodie.local`
- Password: `Admin@12345`

## Run Locally

```powershell
dotnet restore
dotnet run
```

The default connection string uses SQL Server LocalDB:

```text
Server=(localdb)\mssqllocaldb;Database=FoodieExpressDb;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True
```

The app creates the database and seeds food items/admin user on startup.

## Run With Docker

```powershell
docker compose up --build
```

Open `http://localhost:5055`.

The Docker profile uses SQLite in a Docker volume so the app can run without a heavy SQL Server container. The normal local app configuration still targets SQL Server LocalDB.

## Azure DevOps

The `azure-pipelines.yml` file restores, builds, publishes, builds a Docker image, and publishes the web artifact.
