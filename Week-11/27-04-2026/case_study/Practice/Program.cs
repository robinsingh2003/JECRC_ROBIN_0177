
class Program
{
    
    static void SumofDigits(string number)
    {
        int sum = 0;
        for(int i=0;i<number.Length;i++)
        {
            sum += (int)char.GetNumericValue(number[i]);
        }
        Console.WriteLine(sum);
    }
    static int sumofdigits(int num)
    {
        int sum=0;
        while(num>0)
        {
            sum += num%10;
            num /= 10;
        }
        return sum;
    }
    static bool CheckPalinDrome(string str)
    {
        int left = 0;
        int right = str.Length-1;
        while(left<right)
        {
            if(str[left] != str[right])
            {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    static void fizzBuzz(int n)
    {
        for (int i=1;i<=n;i++)
        {
            if(i%3==0 && i%5==0)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if(i%3==0)
            {
                Console.WriteLine("Fizz");
            }
            else if(i%5==0)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }
    static int[] twosum(int[] nums, int target)
    {
        Dictionary<int, int>map = new Dictionary<int, int>();
        for(int i =0 ; i<nums.Length;i++)
        {
            int complement = target- nums[i];
            if(map.ContainsKey(complement))
            {
            return new int[] { map[complement],i};
            }
            if(!map.ContainsKey(nums[i]))
            {
                map.Add(nums[i],i);
            }
        }
        return new int[] {-1,-1}; // Return -1 if no solution is found
    }
    static int MissingNumber(int[] nums)
    {
        int n = nums.Length+1;
        int expectedSum = n*(n+1)/2;
        int actualsum = 0;
        for(int i =0 ;i<nums.Length;i++)
        {
            actualsum += nums[i];
        }
        return expectedSum - actualsum ;

    }
    static void MostFrequentItem(string[] items)
    {
        Dictionary<string, int> frequencyMap = new Dictionary<string, int>();
        foreach (string item in items)
        {
            if (frequencyMap.ContainsKey(item))
            {
                frequencyMap[item]++;
            }
            else
            {
                frequencyMap[item] = 1;
            }
        }
        string mostFrequentItem = null;
        int maxFrequency = 0;
        foreach (var pair in frequencyMap)
        {
            if (pair.Value > maxFrequency)
            {
                mostFrequentItem = pair.Key;
                maxFrequency = pair.Value;
            }
        }
        Console.WriteLine($"Most frequent item: {mostFrequentItem} (Frequency: {maxFrequency})");
    }
    static int[] MergeSortedArrays(int[] arr1,int[] arr2)
    {
        int[] merged = new int[arr1.Length + arr2.Length];
        int i = 0, j = 0, k = 0;
        while (i < arr1.Length && j < arr2.Length)
        {
            if(arr1[i] < arr2[j])
            {
                merged[k++] = arr1  [i++];
            }
            else
            {
                merged[k++] = arr2[j++];
            }
        }
        while(i<arr1.Length)
        {
            merged[k++] = arr1[i++];
        }
        while(j<arr2.Length)
        {
            merged[k++] = arr2[j++];
        }
        return merged;
    }
    
    static void Main(string[] args)
    {
        // SumofDigits("12345");
        // Console.WriteLine(sumofdigits(1234567));
        // Console.WriteLine(CheckPalinDrome("madam"));
        // int n = int.Parse(Console.ReadLine());
        // fizzBuzz(n);
        // Console.WriteLine("Enter the array of numbers (space separated):");
        // int[] nums = Console.ReadLine()!.Split(' ').Select(int.Parse).ToArray();
        // Console.WriteLine("Enter the target sum:");
        // int target = int.Parse(Console.ReadLine()!);
        // int[] result = twosum(nums, target);
        // Console.WriteLine($"Indices: [{result[0]}, {result[1]}]");
        // Console.WriteLine("enter the size of the array:");
        // int size = int.Parse(Console.ReadLine());
        // Console .WriteLine("enter the elements of the array:");
        // int[] arr = Console.ReadLine()!.Split(' ',StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
        // // if (arr.Length != size)
        // // {
        // //     Console.WriteLine("Size mismatch!");
        // //     return;
        // // }
        // Console.WriteLine($"Missing number is: {MissingNumber(arr)}");
        // string[] items = new string[] { "Apple", "Banana", "Apple", "Orange", "Banana", "Apple" };
        // MostFrequentItem(items);
        int[] arr1 = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
        int[] arr2 = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
        int[] mergedArray = MergeSortedArrays(arr1, arr2);
        Console.WriteLine(string.Join(" ", mergedArray));
    }   
}