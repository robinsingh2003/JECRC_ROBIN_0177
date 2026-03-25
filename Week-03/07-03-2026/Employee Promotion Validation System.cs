using System;

class Employee
{
    public int EmployeeId { get; set; }
    public string Name { get; set; }
    public int Experience { get; set; }
    public double Salary { get; set; }
    public int PerformanceRating { get; set; }
}

class PromotionEngine
{
    public void Validate(Employee employee, string department, Predicate<Employee> rule)
    {
        bool result = rule(employee);

        Console.WriteLine("========= PROMOTION VALIDATION =========");
        Console.WriteLine("Employee Name : " + employee.Name);
        Console.WriteLine("Department    : " + department);
        Console.WriteLine("Eligible      : " + result);
        Console.WriteLine("--------------------------------------");
        Console.WriteLine();
    }
}

class Program
{
    static void Main()
    {
        Employee emp = new Employee
        {
            EmployeeId = 501,
            Name = "Ravi",
            Experience = 5,
            Salary = 65000,
            PerformanceRating = 4
        };

        // Promotion Rules
        Predicate<Employee> technicalRule = e => e.Experience >= 3;

        Predicate<Employee> hrRule = e => 
            e.Experience >= 2 && e.PerformanceRating >= 4;

        Predicate<Employee> managementRule = e => 
            e.Experience >= 5 && e.Salary >= 60000;

        PromotionEngine engine = new PromotionEngine();

        engine.Validate(emp, "Technical", technicalRule);
        engine.Validate(emp, "HR", hrRule);
        engine.Validate(emp, "Management", managementRule);
    }
}
