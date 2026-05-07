// Question
// 5
// Student Grade Processor
// Description
// Problem: Student Grade Processor
// A school needs to process student grades across multiple subjects. Use arrays for grade storage and HashSet for unique student tracking.
// Requirements:
// Store grades for multiple students
// Calculate average, highest, lowest for each student
// Find students with all grades above certain threshold
// Identify grade patterns (unique grades per student)
// Sample Input:
// text
// 4
// John 85 90 78 92
// Sarah 95 88 91 89
// Mike 70 65 80 75
// Emma 88 92 94 96
// Operations to perform:
// Calculate each student's average
// Find top performer
// Find students with all grades >= 80
// Count unique grade values across all students
// Sample Output:
// text
// --- Student Grade Report ---
// John: Average = 86.25, Highest = 92, Lowest = 78
// Sarah: Average = 90.75, Highest = 95, Lowest = 88
// Mike: Average = 72.50, Highest = 80, Lowest = 65
// Emma: Average = 92.50, Highest = 96, Lowest = 88
// Top Performer: Emma (Average: 92.50)
// Students with all grades >= 80:
// Sarah (95,88,91,89)
// Emma (88,92,94,96)
// Unique Grade Values Across All Students:
// 65,70,75,78,85,88,89,90,91,92,94,95,96
// Total unique grades: 13
using System.Collections.Generic;
using System.Linq;
namespace StudentGradeProcessor
{
    class Student
    {
        public string Name { get; set; }
        public int[] Grades { get; set; }

        public Student(string name, int[] grades)
        {
            Name = name;
            Grades = grades;
        }

        public double Average => Grades.Average();
        public int Highest => Grades.Max();
        public int Lowest => Grades.Min();
    }
    class Program
    {
        static void Main(string[] args)
        {
            // 1. Reading Input
            if (!int.TryParse(Console.ReadLine(), out int n)) return;

            List<Student> students = new List<Student>();
            HashSet<int> allUniqueGrades = new HashSet<int>();

            for (int i = 0; i < n; i++)
            {
                string input = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(input)) continue;

                var parts = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                string name = parts[0];
                
                // Parse grades into an array
                int[] grades = parts.Skip(1).Select(int.Parse).ToArray();
                
                students.Add(new Student(name, grades));

                // Add to global HashSet for unique grade tracking
                foreach (var grade in grades)
                {
                    allUniqueGrades.Add(grade);
                }
            }

            // --- Output Generation ---
            Console.WriteLine("\n--- Student Grade Report ---");
            foreach (var s in students)
            {
                Console.WriteLine($"{s.Name}: Average = {s.Average:F2}, Highest = {s.Highest}, Lowest = {s.Lowest}");
            }

            // Find Top Performer
            var topPerformer = students.OrderByDescending(s => s.Average).First();
            Console.WriteLine($"\nTop Performer: {topPerformer.Name} (Average: {topPerformer.Average:F2})");

            // Find students with all grades >= 80
            Console.WriteLine("\nStudents with all grades >= 80:");
            var honorStudents = students.Where(s => s.Grades.All(g => g >= 80));
            foreach (var s in honorStudents)
            {
                Console.WriteLine($"{s.Name} ({string.Join(",", s.Grades)})");
            }

            // Unique Grade Values
            Console.WriteLine("\nUnique Grade Values Across All Students:");
            // Ordering for clean display as per sample
            var sortedUnique = allUniqueGrades.OrderBy(g => g).ToList();
            Console.WriteLine(string.Join(",", sortedUnique));
            Console.WriteLine($"Total unique grades: {allUniqueGrades.Count}");
        }
    }
}

 