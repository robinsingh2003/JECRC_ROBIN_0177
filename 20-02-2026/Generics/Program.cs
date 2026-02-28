// using System;
// namespace GenericDemo
// {
//     class UsingGenerics<T>
//     {
//         T obj;
//         public UsingGenerics(T obj1)
//         {
//             this.obj = obj1;
//         }
//         public T Get()
//         {
//             return obj;
//         }
//         public void ShowType(T obj)
//         {
//             Console.WriteLine("Type of T is "+ typeof(T));
//         }
//     }

//     class Test
//     {
//         public static void Main(string[] args)
//         {
//             UsingGenerics<int> objdata1;
//             objdata1 = new UsingGenerics<int>(500);
//             objdata1.ShowType(500);
//             UsingGenerics<string> objdata2;
//             objdata2 = new UsingGenerics<string>("5000000000");
//             objdata2.ShowType("5000000000");
//         }
//     }
// }



using System;
using System.Collections.Generic;
namespace ProductDemo
{
    public class Product
    {
        public int Id {get; set;}
        public string? Name {get; set;}
        public string? Description{get; set;}
        public double Price{get; set;}
        public bool IsStock{get; set;}
    }

    public class ProductCatalog
    {
        private List<Product> products;
        public ProductCatalog()
        {
            
                // new Product{Id = 100, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000},
                // new Product{Id = 200, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000},
                // new Product{Id = 300, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000},
                // new Product{Id = 100, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000},
                // new Product{Id = 100, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000},
                // new Product{Id = 100, Name = "Laptop", Description = "Electronis Item", IsStock = true, Price= 750000}
                products = new List<Product>();
        }

        public void AddProduct()
        {
            Product product = new Product();

            Console.WriteLine("Enter Product Id");
            product.Id = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Product Name");
            product.Name = Console.ReadLine();

            Console.WriteLine("Enter Product Description");
            product.Description = Console.ReadLine();

            Console.WriteLine("Enter Product Price");
            product.Price = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Enter Product IsStock");
            // product.IsStock = Convert.ToBoolean(Console.ReadLine());
            // product.IsStock = bool.Parse(Console.ReadLine());
            bool.TryParse(Console.ReadLine(), out bool stock);
            product.IsStock = stock;

            products.Add(product);
        }
        public bool DeleteProduct(int id)
        {
            var productid = products.FirstOrDefault(p => p.Id == id);
            if(productid == null)
            {
                return false;
                products.Remove(productid);
                return true;
            }
            return true;
        }
        public void DisplayProducts()
        {
            foreach (var product in products)
            {
                // Console.WriteLine(product.Name);
                // Console.WriteLine(product.Description);
                // Console.WriteLine(product.Price);
                Console.WriteLine("\nProduct Details:");
                Console.WriteLine("Id: " + product.Id);
                Console.WriteLine("Name: " + product.Name);
                Console.WriteLine("Description: " + product.Description);
                Console.WriteLine("Price: " + product.Price);
                Console.WriteLine("In Stock: " + product.IsStock);
            
            }
        }
    }

    class Test
    {
        public static void Main(string[] args)
        {
            ProductCatalog catalog = new ProductCatalog();
            int choice;

            do
            {
                Console.WriteLine("\n 1. Add Product");
                Console.WriteLine("2. Display Product");
                Console.WriteLine("3. Exit");
                Console.WriteLine("Enter your choice");
                choice = Convert.ToInt32(Console.ReadLine());
                switch(choice)
                {
                    case 1 : 
                        Console.WriteLine("You are doing add product");
                        catalog.AddProduct();
                        break;

                    case 2 : 
                        Console.WriteLine("You are displaying product");
                        catalog.DisplayProducts();
                        break;

                    case 3 : 
                        Console.WriteLine("Exit");
                        break;

                    default:
                        Console.WriteLine("Invalid Choice");
                        break;
                }
            }while (choice != 3);
        }
    }
}