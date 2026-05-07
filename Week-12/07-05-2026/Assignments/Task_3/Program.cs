// Question
// 3
// Word Frequency Analyzer
// Description
//  Word Frequency Analyzer
// A content management system needs to analyze article text and count word frequencies.
// Requirements:
// Read a paragraph of text
// Count frequency of each word (case-insensitive)
// Ignore punctuation
// Display top N most frequent words
// Find words that appear exactly once
// Calculate average word frequency
// Sample Input:
// text
// The quick brown fox jumps over the lazy dog. The fox is quick and the dog is lazy. Quick brown fox jumps over the lazy dog again.
// N = 3
// Sample Output:
// text
// --- Word Frequency Analysis ---
// Total words: 27
// Unique words: 14
// Top 3 Frequent Words:
// the: 5 times
// quick: 3 times
// fox: 3 times
// Words appearing exactly once:
// and, again, brown, is, jumps, lazy, over
// Average frequency: 1.93 times per unique word
using System.Text.RegularExpressions;
namespace WordFrequencyAnalyzer
{
    class Program
    {
        static void Main()
        {
            // Sample Input
            string text = "The quick brown fox 1 jumps over the lazy dog. The fox is quick and the dog is lazy. Quick brown fox jumps over the lazy dog again.";
            int N = 3;

            Console.WriteLine("--- Word Frequency Analysis ---");

            // Normalize text: remove punctuation, convert to lower case
            var words = Regex.Replace(text, @"[^\w\s]", "").ToLower().Split(' ', StringSplitOptions.RemoveEmptyEntries);

            // Count frequencies
            var frequency = new Dictionary<string, int>();
            foreach (var word in words)
            {
                if (frequency.ContainsKey(word))
                    frequency[word]++;
                else
                    frequency[word] = 1;
            }

            // Total words and unique words
            Console.WriteLine($"Total words: {words.Length}");
            Console.WriteLine($"Unique words: {frequency.Count}");

            // Top N frequent words
            Console.WriteLine($"Top {N} Frequent Words:");
            foreach (var kvp in frequency.OrderByDescending(kvp => kvp.Value).Take(N))
            {
                Console.WriteLine($"{kvp.Key}: {kvp.Value} times");
            }

            // Words appearing exactly once
            var onceWords = frequency.Where(kvp => kvp.Value == 1).Select(kvp => kvp.Key).ToList();
            Console.WriteLine("Words appearing exactly once:");
            Console.WriteLine(string.Join(", ", onceWords));

            // Average frequency
            double averageFrequency = frequency.Values.Average();
            Console.WriteLine($"Average frequency: {averageFrequency:F2} times per unique word");
        }
    }
}