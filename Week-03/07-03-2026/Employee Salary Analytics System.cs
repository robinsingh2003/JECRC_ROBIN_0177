using System;
using System.Collections.Generic;
using System.Linq;

class Employee
{
    public int EmployeeId { get; set; }
    public string Name { get; set; }
    public double Salary { get; set; }
}

class AnalyticsEngine
{
    public void Analyze(List<Employee> employees)
    {
        var highSalary = employees
            .Where(e => e.Salary >= 50000)
            .Select(e => e.Name);

        Console.WriteLine("High Salary Employees:");
        Console.WriteLine(string.Join("\n", highSalary));

        var sortedEmployees = employees
            .OrderByDescending(e => e.Salary)
            .Select(e => e.Name + " - " + (int)e.Salary);

        Console.WriteLine("\nEmployees Sorted by Salary:");
        Console.WriteLine(string.Join("\n", sortedEmployees));

        int avgSalary = (int)employees.Average(e => e.Salary);

        Console.WriteLine("\nAverage Salary:");
        Console.WriteLine("Rs " + avgSalary);
    }
}

class Program
{
    static void Main()
    {
        List<Employee> employees = new List<Employee>
        {
            new Employee{ EmployeeId = 301, Name = "Ramesh", Salary = 45000 },
            new Employee{ EmployeeId = 302, Name = "Suresh", Salary = 52000 },
            new Employee{ EmployeeId = 303, Name = "Kavya", Salary = 68000 },
            new Employee{ EmployeeId = 304, Name = "Anita", Salary = 39000 }
        };

        AnalyticsEngine engine = new AnalyticsEngine();
        engine.Analyze(employees);
        Console.WriteLine();
    }
}