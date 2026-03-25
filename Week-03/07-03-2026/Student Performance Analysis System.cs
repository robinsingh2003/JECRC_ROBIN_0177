using System;
using System.Collections.Generic;
using System.Linq;

class Student
{
    public int StudentId { get; set; }
    public string Name { get; set; }
    public int Marks { get; set; }
}

class AnalysisEngine
{
    public void Analyze(List<Student> students)
    {
        var passed = students.Where(s => s.Marks >= 50).Select(s => s.Name);

        Console.WriteLine("Passed Students:");
        Console.WriteLine(string.Join(Environment.NewLine, passed));
        Console.WriteLine();

        var topper = students.OrderByDescending(s => s.Marks).First();

        Console.WriteLine("Topper:");
        Console.WriteLine(topper.Name + " - " + topper.Marks);
        Console.WriteLine();

        var sorted = students
            .OrderByDescending(s => s.Marks)
            .Select(s => s.Name + " - " + s.Marks);

        Console.WriteLine("Students Sorted by Marks:");
        Console.WriteLine(string.Join(Environment.NewLine, sorted));
    }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student{ StudentId = 101, Name = "Ananya", Marks = 78 },
            new Student{ StudentId = 102, Name = "Ravi", Marks = 45 },
            new Student{ StudentId = 103, Name = "Neha", Marks = 88 },
            new Student{ StudentId = 104, Name = "Arjun", Marks = 67 }
        };

        AnalysisEngine engine = new AnalysisEngine();
        engine.Analyze(students);
        Console.WriteLine();
    }
}