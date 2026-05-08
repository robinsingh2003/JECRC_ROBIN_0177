using System.Diagnostics;

public abstract class AsyncService
{
    private int _requestCount;

    public int RequestCount => _requestCount;
    public long LastResponseTimeMilliseconds { get; protected set; }

    protected void IncrementRequestCount()
    {
        _requestCount++;
    }

    protected void RecordResponseTime(long milliseconds)
    {
        LastResponseTimeMilliseconds = milliseconds;
    }

    public virtual async Task<string> FetchDataAsync(string endpoint)
    {
        var stopwatch = Stopwatch.StartNew();
        await Task.Delay(2000);
        stopwatch.Stop();
        RecordResponseTime(stopwatch.ElapsedMilliseconds);
        return "Base fetch completed.";
    }

    public virtual async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);
        return $"Service status: {RequestCount} request(s) processed.";
    }
}

public sealed class WeatherService : AsyncService
{
    public string City { get; }
    public int Temperature { get; }

    public WeatherService(string city)
    {
        City = string.IsNullOrWhiteSpace(city) ? "Unknown City" : city;
        Temperature = 22;
    }

    public override async Task<string> FetchDataAsync(string endpoint)
    {
        IncrementRequestCount();
        Console.WriteLine($"Starting weather fetch for {City}...");

        var stopwatch = Stopwatch.StartNew();
        await Task.Delay(2000);
        stopwatch.Stop();
        RecordResponseTime(stopwatch.ElapsedMilliseconds);

        Console.WriteLine($"Weather data received for {City}. Temperature: {Temperature}°C.");
        return "Weather data retrieved successfully.";
    }

    public override async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);
        string status = $"Weather service status: {RequestCount} request(s) processed.";
        Console.WriteLine(status);
        return status;
    }
}

public sealed class StockService : AsyncService
{
    public string Symbol { get; }
    public decimal CurrentPrice { get; }

    public StockService(string symbol)
    {
        Symbol = string.IsNullOrWhiteSpace(symbol) ? "UNKNOWN" : symbol;
        CurrentPrice = 145.75m;
    }

    public override async Task<string> FetchDataAsync(string endpoint)
    {
        IncrementRequestCount();
        Console.WriteLine($"Starting stock fetch for {Symbol}...");

        var stopwatch = Stopwatch.StartNew();
        await Task.Delay(2000);
        stopwatch.Stop();
        RecordResponseTime(stopwatch.ElapsedMilliseconds);

        Console.WriteLine($"Stock price update for {Symbol}: {CurrentPrice:C}.");
        return "Stock data retrieved successfully.";
    }

    public override async Task<string> GetStatusAsync()
    {
        await Task.Delay(100);
        string status = $"Stock service status: {RequestCount} request(s) processed.";
        Console.WriteLine(status);
        return status;
    }
}

public static class Program
{
    public static async Task Main()
    {
        string serviceType = Console.ReadLine()?.Trim() ?? string.Empty;
        string identifier = Console.ReadLine()?.Trim() ?? string.Empty;
        string command = Console.ReadLine()?.Trim() ?? string.Empty;

        if (string.IsNullOrWhiteSpace(serviceType) || string.IsNullOrWhiteSpace(identifier) || string.IsNullOrWhiteSpace(command))
        {
            Console.WriteLine("Invalid input. Service type, identifier, and command are required.");
            return;
        }

        AsyncService service = CreateService(serviceType, identifier);

        switch (command)
        {
            case "FetchDataAsync":
                await service.FetchDataAsync(identifier);
                break;
            case "GetStatusAsync":
                await service.GetStatusAsync();
                break;
            default:
                Console.WriteLine($"Unknown command: {command}. Supported commands are FetchDataAsync and GetStatusAsync.");
                break;
        }
    }

    private static AsyncService CreateService(string serviceType, string identifier)
    {
        return serviceType.Equals("Weather", StringComparison.OrdinalIgnoreCase)
            ? new WeatherService(identifier)
            : new StockService(identifier);
    }
}
