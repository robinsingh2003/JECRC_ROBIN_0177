
public abstract class Query
{
    private readonly IReadOnlyList<int> _dataSource;

    protected Query(IEnumerable<int> data)
    {
        _dataSource = data?.ToList() ?? throw new ArgumentNullException(nameof(data));
    }

    protected IReadOnlyList<int> DataSource => _dataSource;

    public bool IsExecuted { get; private set; }

    public virtual IEnumerable<int> Apply()
    {
        return _dataSource;
    }

    public virtual List<int> Execute()
    {
        IsExecuted = true;
        return Apply().ToList();
    }

    public abstract string GetQueryType();
}

public sealed class FilterQuery : Query
{
    public string Predicate { get; }
    public int FilteredCount { get; private set; }

    public FilterQuery(IEnumerable<int> data, string predicate)
        : base(data)
    {
        Predicate = string.IsNullOrWhiteSpace(predicate)
            ? throw new ArgumentException("Predicate cannot be empty.", nameof(predicate))
            : predicate;
    }

    public override IEnumerable<int> Apply()
    {
        if (Predicate.StartsWith(">", StringComparison.Ordinal))
        {
            int threshold = int.Parse(Predicate.Substring(1));
            return DataSource.Where(value => value > threshold);
        }

        if (Predicate.StartsWith("<", StringComparison.Ordinal))
        {
            int threshold = int.Parse(Predicate.Substring(1));
            return DataSource.Where(value => value < threshold);
        }

        return Predicate.ToLowerInvariant() switch
        {
            "even" => DataSource.Where(value => value % 2 == 0),
            "odd" => DataSource.Where(value => value % 2 != 0),
            _ => DataSource,
        };
    }

    public override List<int> Execute()
    {
        var result = Apply().ToList();
        FilteredCount = result.Count;
        var executed = base.Execute();

        Console.WriteLine($"Filter operation completed. Predicate: {Predicate}. Filtered items: {FilteredCount}.");
        return result;
    }

    public override string GetQueryType()
    {
        return "Filter Query";
    }
}

public sealed class AggregateQuery : Query
{
    public string Operation { get; }
    public double Result { get; private set; }

    public AggregateQuery(IEnumerable<int> data, string operation)
        : base(data)
    {
        Operation = string.IsNullOrWhiteSpace(operation)
            ? throw new ArgumentException("Operation cannot be empty.", nameof(operation))
            : operation;
    }

    public override IEnumerable<int> Apply()
    {
        return DataSource;
    }

    public override List<int> Execute()
    {
        var result = base.Execute();

        Result = Operation.ToLowerInvariant() switch
        {
            "sum" => DataSource.Sum(),
            "average" => DataSource.Average(),
            "max" => DataSource.Max(),
            "min" => DataSource.Min(),
            _ => 0,
        };

        if (Result == 0 && !new[] { "sum", "average", "max", "min" }.Contains(Operation.ToLowerInvariant()))
        {
            Console.WriteLine($"Unknown aggregate operation: {Operation}. No computation performed.");
        }
        else
        {
            Console.WriteLine($"Aggregation completed. Operation: {Operation}. Result: {Result}.");
        }

        return result;
    }

    public override string GetQueryType()
    {
        return "Aggregate Query";
    }
}

public static class Program
{
    public static void Main()
    {
        string queryType = Console.ReadLine()?.Trim() ?? string.Empty;
        string? dataLine = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(queryType) || string.IsNullOrWhiteSpace(dataLine))
        {
            Console.WriteLine("Invalid input. Please provide query type and data.");
            return;
        }

        var data = dataLine
            .Split(' ', StringSplitOptions.RemoveEmptyEntries)
            .Select(int.Parse)
            .ToList();

        string input = Console.ReadLine()?.Trim() ?? string.Empty;
        Query query = CreateQuery(queryType, data, input);
        query.Execute();
    }

    private static Query CreateQuery(string queryType, List<int> data, string input)
    {
        return queryType.Equals("Filter", StringComparison.OrdinalIgnoreCase)
            ? new FilterQuery(data, input)
            : new AggregateQuery(data, input);
    }
}
