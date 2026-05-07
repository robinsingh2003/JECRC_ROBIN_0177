// Question
// 2
// Customer Preference Analysis
// Description
// Problem: Customer Preference Analysis
// An e-commerce platform needs to analyze customer
// preferences across different product categories.
// Requirements:
// Track customers who bought from Electronics category
// Track customers who bought from Clothing category
// Track customers who bought from Books category
// Perform set operations: Union, Intersection, Difference
// Identify cross-category buyers
// Sample Input:
// text
// Electronics: C001,C002,C003,C005,C008
// Clothing: C002,C004,C005,C006,C009
// Books: C003,C005,C007,C008,C010
// Operations:
// 1. Customers who bought from ANY category
// 2. Customers who bought from ALL categories
// 3. Customers who bought ONLY Electronics
// 4. Customers who bought Electronics AND Books but NOT Clothing
// Sample Output:
// text
// --- Customer Preference Analysis ---
// 1. Customers in ANY category (Union):
// C001, C002, C003, C004, C005, C006, C007, C008, C009, C010
// Total: 10 customers
// 2. Customers in ALL categories (Intersection):
// C005
// Total: 1 customer
// 3. Customers ONLY in Electronics (Difference):
// C001, C008
// Total: 2 customers
// 4. Customers in Electronics AND Books but NOT Clothing:
// C003, C008
// Total: 2 customers
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // 1. Setup Sets (In a real scenario, parse these from Console.ReadLine)
        var electronics = new HashSet<string> { "C001", "C002", "C003", "C005", "C008" };
        var clothing = new HashSet<string> { "C002", "C004", "C005", "C006", "C009" };
        var books = new HashSet<string> { "C003", "C005", "C007", "C008", "C010" };

        Console.WriteLine("--- Customer Preference Analysis ---");

        // 1. Union (ANY)
        var any = new HashSet<string>(electronics);
        any.UnionWith(clothing);
        any.UnionWith(books);
        PrintResult("1. Customers in ANY category (Union):", any);

        // 2. Intersection (ALL)
        var all = new HashSet<string>(electronics);
        all.IntersectWith(clothing);
        all.IntersectWith(books);
        PrintResult("2. Customers in ALL categories (Intersection):", all);

        // 3. Difference (ONLY Electronics)
        var onlyElec = new HashSet<string>(electronics);
        onlyElec.ExceptWith(clothing);
        onlyElec.ExceptWith(books);
        PrintResult("3. Customers ONLY in Electronics (Difference):", onlyElec);

        // 4. Combined (Elec AND Books NOT Clothing)
        var custom = new HashSet<string>(electronics);
        custom.IntersectWith(books);
        custom.ExceptWith(clothing);
        PrintResult("4. Customers in Electronics AND Books but NOT Clothing:", custom);
    }

    static void PrintResult(string header, HashSet<string> set)
    {
        Console.WriteLine(header);
        // Ordering the output to match the sample
        Console.WriteLine(string.Join(", ", set.OrderBy(s => s)));
        Console.WriteLine($"Total: {set.Count} customers");
    }
}