// Question
// 1
// Warehouse Stock Tracker
// Description
// Problem: Warehouse Stock Tracker

// A warehouse needs to track product quantities across multiple locations. Use Dictionary for fast lookups and updates.

// Requirements:

// Track products with ProductId as key
// Store quantity for each product
// Support ADD, REMOVE, CHECK, and DISPLAY operations
// Validate operations (can't remove more than available)
// Handle bulk operations
// Input Format:

// First line: N (number of operations)
// Next N lines: Operation commands
// Operations:

// ADD <productId> <quantity> - Add stock
// REMOVE <productId> <quantity> - Remove stock (validate)
// CHECK <productId> - Display current quantity
// BULK <productId1>:<qty1>,<productId2>:<qty2> - Add multiple products
// DISPLAY - Show all products with stock > 0
// Sample Input:
// text
// 10
// ADD 1001 50
// ADD 1002 30
// CHECK 1001
// ADD 1001 25
// REMOVE 1002 10
// BULK 1003:75,1004:40
// CHECK 1002
// REMOVE 1002 25
// DISPLAY
// ADD 1001 10
// DISPLAY
// Sample Output:
// text
// Product 1001: 50 units
// Product 1002: 20 units
// Product 1003: 75 units
// Product 1004: 40 units
// --- Current Inventory ---
// 1001: 75 units
// 1002: 20 units
// 1003: 75 units
// 1004: 40 units
// --- Updated Inventory ---
// 1001: 85 units
// 1002: 20 units
// 1003: 75 units
// 1004: 40 units
// Insert your project link :
// URL
// Enter input

using System.Collections.Generic;
using System.Linq;

namespace WarehouseStockTracker
{
    class Program
    {
        private static Dictionary<int, int> inventory = new Dictionary<int, int>();
        private static int displayCount = 0;

        public static void AddStock(int productId, int quantity)
        {
            if (!inventory.ContainsKey(productId))
                inventory[productId] = quantity;
            else
                inventory[productId] += quantity;
        }

        public static void RemoveStock(int productId, int quantity)
        {
            if (inventory.ContainsKey(productId) && inventory[productId] >= quantity)
                inventory[productId] -= quantity;
            else
                Console.WriteLine($"Cannot remove {quantity} units from Product {productId}. Not enough stock.");
        }

        public static void CheckStock(int productId)
        {
            if (inventory.ContainsKey(productId))
                Console.WriteLine($"Product {productId}: {inventory[productId]} units");
            else
                Console.WriteLine($"Product {productId} not found.");
        }

        public static void BulkAdd(string bulkData)
        {
            try
            {
                var products = bulkData.Split(',');
                foreach (var product in products)
                {
                    var parts = product.Split(':');
                    if (parts.Length == 2 && int.TryParse(parts[0], out int id) && int.TryParse(parts[1], out int qty))
                    {
                        AddStock(id, qty);
                        Console.WriteLine($"Product {id}: {qty} units");
                    }
                }
            }
            catch { Console.WriteLine("Invalid BULK format. Use id1:qty1,id2:qty2"); }
        }

        public static void DisplayInventory()
        {
            if (displayCount == 0)
                Console.WriteLine("--- Current Inventory ---");
            else
                Console.WriteLine("--- Updated Inventory ---");

            var activeItems = inventory.Where(i => i.Value > 0).OrderBy(i => i.Key);
            foreach (var item in activeItems)
            {
                Console.WriteLine($"{item.Key}: {item.Value} units");
            }
            displayCount++;
        }

        public static void Main(string[] args)
        {
            Console.WriteLine("Warehouse Tracker Active. Enter number of operations:");
            
            int n = 0;
            // Keep asking until a valid number is entered
            while (true)
            {
                string? input = Console.ReadLine();
                if (int.TryParse(input, out n)) break;
                
                // If the user pastes "text", just ignore it and wait for the number
                if (input?.ToLower() != "text")
                    Console.WriteLine("Invalid input. Please enter a number:");
            }

            for (int i = 0; i < n; i++)
            {
                string? commandLine = Console.ReadLine();
                if (string.IsNullOrWhiteSpace(commandLine) || commandLine.ToLower() == "text")
                {
                    i--; // Don't count empty lines or "text" labels as an operation
                    continue;
                }

                var parts = commandLine.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                string action = parts[0].ToUpper();

                try
                {
                    switch (action)
                    {
                        case "ADD":
                            AddStock(int.Parse(parts[1]), int.Parse(parts[2]));
                            break;
                        case "REMOVE":
                            RemoveStock(int.Parse(parts[1]), int.Parse(parts[2]));
                            break;
                        case "CHECK":
                            CheckStock(int.Parse(parts[1]));
                            break;
                        case "BULK":
                            BulkAdd(parts[1]);
                            break;
                        case "DISPLAY":
                            DisplayInventory();
                            break;
                        default:
                            Console.WriteLine($"Unknown command: {action}");
                            i--; // Don't count invalid commands
                            break;
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine("Invalid command format. Try again.");
                    i--; // Allow the user to retry this operation
                }
            }
            
            Console.WriteLine("\nAll operations completed. Press any key to exit.");
            Console.ReadKey();
        }
    }
}