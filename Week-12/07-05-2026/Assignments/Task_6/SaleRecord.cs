// Question
// 6
// Sales Data Aggregator
// Description
// Problem: Sales Data Aggregator
// A sales system needs to aggregate daily sales by product and region.
// Requirements:
// Group sales by product and region
// Calculate total sales, average, min, max
// Find best-selling product in each region
// Identify underperforming products (< threshold)
// Sample Input:
// text
// 10
// P001 North 1500
// P001 South 2000
// P002 North 3000
// P001 East 2500
// P002 South 1800
// P003 North 1200
// P001 West 2200
// P002 West 2800
// P003 South 900
// P002 East 3200
// Threshold: 2000
// Sample Output:
// text
// --- Sales Report by Product and Region ---
// Product P001:
//   North: $1500
//   South: $2000
//   East: $2500
//   West: $2200
//   Total: $8200, Average: $2050.00
// Product P002:
//   North: $3000
//   South: $1800
//   West: $2800
//   East: $3200
//   Total: $10800, Average: $2700.00
// Product P003:
//   North: $1200
//   South: $900
//   Total: $2100, Average: $1050.00
// Best Selling Product by Region:
// North: P002 ($3000)
// South: P001 ($2000)
// East: P002 ($3200)
// West: P002 ($2800)
// Underperforming Products (< $2000 average):
// P003 ($1050.00)
using System;
using System.Collections.Generic;
using System.Linq;

namespace SalesDataAggregator
{
    class SaleRecord
    {
        public string ProductId { get; set; }
        public string Region { get; set; }
        public int Amount { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // 1. Setup Data Structures
            List<SaleRecord> sales = new List<SaleRecord>();

            // Read Number of operations
            if (!int.TryParse(Console.ReadLine(), out int n)) return;

            for (int i = 0; i < n; i++)
            {
                string line = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(line)) continue;
                
                var parts = line.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length < 3) continue;

                sales.Add(new SaleRecord
                {
                    ProductId = parts[0],
                    Region = parts[1],
                    Amount = int.Parse(parts[2])
                });
            }

            // Read Threshold (Assumes format "Threshold: 2000")
            string thresholdLine = Console.ReadLine() ?? "0";
            int threshold = int.Parse(thresholdLine.Split(':').Last().Trim());

            Console.WriteLine("\n--- Sales Report by Product and Region ---");

            // 2. Group by Product for the main report
            var productGroups = sales.GroupBy(s => s.ProductId).OrderBy(g => g.Key);

            foreach (var prodGroup in productGroups)
            {
                Console.WriteLine($"Product {prodGroup.Key}:");
                foreach (var sale in prodGroup)
                {
                    Console.WriteLine($"  {sale.Region}: ${sale.Amount}");
                }

                double total = prodGroup.Sum(s => s.Amount);
                double avg = prodGroup.Average(s => s.Amount);
                Console.WriteLine($"  Total: ${total}, Average: ${avg:F2}");
            }

            // 3. Best Selling Product by Region
            Console.WriteLine("\nBest Selling Product by Region:");
            var regionGroups = sales.GroupBy(s => s.Region);
            foreach (var regGroup in regionGroups)
            {
                var best = regGroup.OrderByDescending(s => s.Amount).First();
                Console.WriteLine($"{regGroup.Key}: {best.ProductId} (${best.Amount})");
            }

            // 4. Underperforming Products (Average < Threshold)
            Console.WriteLine($"\nUnderperforming Products (< ${threshold} average):");
            var underperforming = productGroups
                .Select(g => new { ID = g.Key, Avg = g.Average(s => s.Amount) })
                .Where(x => x.Avg < threshold);

            foreach (var item in underperforming)
            {
                Console.WriteLine($"{item.ID} (${item.Avg:F2})");
            }
        }
    }
}
 