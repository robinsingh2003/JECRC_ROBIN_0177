// Question
// 4
// Sequence Pattern Detector
// Description
// Problem: Sequence Pattern Detector
// A security system needs to detect patterns in access logs.
// Requirements:
// Find longest consecutive sequence of numbers
// Find most frequent element
// Find first non-repeating element
// Find pairs with difference K
// Find majority element (appears > n/2 times)
// Sample Input:
// text
// Access Log: 1,3,2,3,3,4,5,3,6,7,8,9,10,3
// K = 2
// Sample Output:
// text
// --- Access Pattern Analysis ---
// Longest Consecutive Sequence: 3,4,5,6,7,8,9,10 (Length: 8)
// Most Frequent Element: 3 (appears 5 times)
// First Non-Repeating Element: 1
// Pairs with Difference 2:
// (1, 3), (3, 5), (5, 7), (7, 9), (8, 10)
// Majority Element: 3 (appears 5 out of 14 times - 35.7% - No majority)
using System.Linq;

namespace SequencePatternDetector
{
    class Program
    {
        // 1. Logic for Longest Consecutive Sequence
        static List<int> FindLongestConsecutiveSequence(List<int> accessLog)
        {
            int longestLength = 0;
            List<int> longestSequence = new List<int>();
            var set = new HashSet<int>(accessLog);

            foreach (var num in set)
            {
                // If set doesn't contain num - 1, then num is the start of a sequence
                if (!set.Contains(num - 1))
                {
                    int currentNum = num;
                    List<int> currentSequence = new List<int> { currentNum };

                    while (set.Contains(currentNum + 1))
                    {
                        currentNum++;
                        currentSequence.Add(currentNum);
                    }

                    if (currentSequence.Count > longestLength)
                    {
                        longestLength = currentSequence.Count;
                        longestSequence = currentSequence;
                    }
                }
            }
            return longestSequence;
        }

        // 2. Logic for Frequency (Helper method to avoid repeating code)
        static Dictionary<int, int> GetFrequencies(List<int> accessLog)
        {
            var frequency = new Dictionary<int, int>();
            foreach (var num in accessLog)
            {
                if (frequency.ContainsKey(num)) frequency[num]++;
                else frequency[num] = 1;
            }
            return frequency;
        }

        static void Main()
        {
            // Sample input parsing
            var accessLog = new List<int> { 1, 3, 2, 3, 3, 4, 5, 3, 6, 7, 8, 9, 10, 3 };
            int k = 2;
            int n = accessLog.Count;

            Console.WriteLine("--- Access Pattern Analysis ---");

            // 1. Longest Consecutive Sequence
            var longestSeq = FindLongestConsecutiveSequence(accessLog);
            Console.WriteLine($"Longest Consecutive Sequence: {string.Join(",", longestSeq)} (Length: {longestSeq.Count})");

            // 2. Most Frequent Element
            var freqs = GetFrequencies(accessLog);
            var mostFreq = freqs.OrderByDescending(x => x.Value).First();
            Console.WriteLine($"Most Frequent Element: {mostFreq.Key} (appears {mostFreq.Value} times)");

            // 3. First Non-Repeating Element
            int firstNon = -1;
            foreach (var num in accessLog)
            {
                if (freqs[num] == 1)
                {
                    firstNon = num;
                    break;
                }
            }
            Console.WriteLine($"First Non-Repeating Element: {firstNon}");

            // 4. Pairs with Difference K
            Console.WriteLine($"Pairs with Difference {k}:");
            var uniqueElements = accessLog.Distinct().OrderBy(x => x).ToList();
            var pairs = new List<string>();
            foreach (var num in uniqueElements)
            {
                if (uniqueElements.Contains(num + k))
                {
                    pairs.Add($"({num}, {num + k})");
                }
            }
            Console.WriteLine(string.Join(", ", pairs));

            // 5. Majority Element Logic
            // Definition: Appears > n/2 times
            var majority = freqs.FirstOrDefault(x => x.Value > n / 2);
            double percentage = (double)mostFreq.Value / n * 100;

            if (majority.Key != 0 || freqs.ContainsKey(majority.Key) && majority.Value > n / 2)
            {
                Console.WriteLine($"Majority Element: {majority.Key} (appears {majority.Value} out of {n} times)");
            }
            else
            {
                // To match your sample output format exactly
                Console.WriteLine($"Majority Element: {mostFreq.Key} (appears {mostFreq.Value} out of {n} times - {percentage:F1}% - No majority)");
            }
        }
    }
}