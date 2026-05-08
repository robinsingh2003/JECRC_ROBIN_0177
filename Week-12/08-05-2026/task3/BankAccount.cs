using System.Globalization;

public abstract class BankAccount
{
    public string AccountNumber { get; }
    public decimal Balance { get; private set; }

    protected BankAccount(string accountNumber, decimal initialDeposit)
    {
        if (string.IsNullOrWhiteSpace(accountNumber))
        {
            throw new ArgumentException("Account number is required.", nameof(accountNumber));
        }

        if (initialDeposit < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(initialDeposit), "Initial deposit cannot be negative.");
        }

        AccountNumber = accountNumber;
        Balance = initialDeposit;
    }

    public virtual bool Deposit(decimal amount)
    {
        if (amount <= 0)
        {
            return false;
        }

        Balance += amount;
        return true;
    }

    public virtual bool Withdraw(decimal amount)
    {
        if (amount <= 0 || amount > Balance)
        {
            return false;
        }

        Balance -= amount;
        return true;
    }

    public void UpdateBalance(decimal newBalance)
    {
        Balance = newBalance;
    }
}

public sealed class SavingsAccount : BankAccount
{
    private const decimal DefaultMinimumBalance = 1000m;

    public decimal InterestRate { get; private set; }
    public decimal MinimumBalance { get; }

    public SavingsAccount(string accountNumber, decimal initialDeposit)
        : base(accountNumber, initialDeposit)
    {
        MinimumBalance = DefaultMinimumBalance;
    }

    public override bool Withdraw(decimal amount)
    {
        if (Balance - amount < MinimumBalance)
        {
            Console.WriteLine($"Withdrawal failed: You must maintain a minimum balance of {MinimumBalance:C}.");
            return false;
        }

        return base.Withdraw(amount);
    }

    public void ApplyInterest(decimal rate)
    {
        if (rate <= 0)
        {
            Console.WriteLine("Interest rate must be greater than zero.");
            return;
        }

        InterestRate = rate;
        decimal interest = Balance * InterestRate / 100m;
        UpdateBalance(Balance + interest);
        Console.WriteLine($"Interest applied at {InterestRate}% rate. New balance: {Balance:F2}.");
    }
}

public sealed class CurrentAccount : BankAccount
{
    public decimal OverdraftLimit { get; }
    public decimal TransactionFee { get; }

    public CurrentAccount(
        string accountNumber,
        decimal initialDeposit,
        decimal overdraftLimit,
        decimal transactionFee)
        : base(accountNumber, initialDeposit)
    {
        if (overdraftLimit < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(overdraftLimit), "Overdraft limit cannot be negative.");
        }

        if (transactionFee < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(transactionFee), "Transaction fee cannot be negative.");
        }

        OverdraftLimit = overdraftLimit;
        TransactionFee = transactionFee;
    }

    public override bool Withdraw(decimal amount)
    {
        if (amount <= 0)
        {
            return false;
        }

        if (Balance - amount < -OverdraftLimit)
        {
            Console.WriteLine("Withdrawal failed: Overdraft limit exceeded.");
            return false;
        }

        UpdateBalance(Balance - amount);
        return true;
    }

    public void DeductTransactionFee()
    {
        UpdateBalance(Balance - TransactionFee);
        Console.WriteLine($"A transaction fee of {TransactionFee:C} has been deducted. Remaining balance: {Balance:F2}.");
    }
}

public static class Program
{
    public static void Main()
    {
        string accountType = Console.ReadLine()?.Trim() ?? string.Empty;
        string accNumber = Console.ReadLine()?.Trim() ?? string.Empty;
        string initialDepositInput = Console.ReadLine()?.Trim() ?? string.Empty;

        if (!decimal.TryParse(initialDepositInput, NumberStyles.Number, CultureInfo.InvariantCulture, out decimal initialDeposit))
        {
            Console.WriteLine("Invalid initial deposit amount.");
            return;
        }

        BankAccount? account = CreateAccount(accountType, accNumber, initialDeposit);
        if (account == null)
        {
            Console.WriteLine("Invalid account type. Use Savings or Current.");
            return;
        }

        while (true)
        {
            string? input = Console.ReadLine();
            if (string.IsNullOrWhiteSpace(input))
            {
                break;
            }

            var parts = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            string operation = parts[0];

            switch (operation)
            {
                case "Withdraw":
                    if (parts.Length < 2 || !decimal.TryParse(parts[1], NumberStyles.Number, CultureInfo.InvariantCulture, out decimal withdrawAmount))
                    {
                        Console.WriteLine("Invalid withdraw amount.");
                        break;
                    }

                    if (account.Withdraw(withdrawAmount))
                    {
                        Console.WriteLine($"Withdrawal successful. Remaining balance: {account.Balance:F2}.");
                    }
                    else
                    {
                        Console.WriteLine("Withdrawal failed. Please check the amount and account rules.");
                    }

                    break;

                case "Deposit":
                    if (parts.Length < 2 || !decimal.TryParse(parts[1], NumberStyles.Number, CultureInfo.InvariantCulture, out decimal depositAmount))
                    {
                        Console.WriteLine("Invalid deposit amount.");
                        break;
                    }

                    if (account.Deposit(depositAmount))
                    {
                        Console.WriteLine($"Deposit successful. Balance: {account.Balance:F2}.");
                    }
                    else
                    {
                        Console.WriteLine("Deposit failed. Amount must be greater than zero.");
                    }

                    break;

                case "GetBalance":
                    Console.WriteLine($"Current balance: {account.Balance:F2}.");
                    break;

                case "ApplyInterest" when account is SavingsAccount savingsAccount:
                    if (parts.Length < 2 || !decimal.TryParse(parts[1], NumberStyles.Number, CultureInfo.InvariantCulture, out decimal rate))
                    {
                        Console.WriteLine("Invalid interest rate.");
                        break;
                    }

                    savingsAccount.ApplyInterest(rate);
                    break;

                case "DeductTransactionFee" when account is CurrentAccount currentAccount:
                    currentAccount.DeductTransactionFee();
                    break;

                default:
                    Console.WriteLine("Unknown operation or unsupported command for this account type.");
                    break;
            }
        }
    }

    private static BankAccount? CreateAccount(string accountType, string accNumber, decimal initialDeposit)
    {
        return accountType.Equals("Savings", StringComparison.OrdinalIgnoreCase)
            ? new SavingsAccount(accNumber, initialDeposit)
            : accountType.Equals("Current", StringComparison.OrdinalIgnoreCase)
                ? new CurrentAccount(accNumber, initialDeposit, 2000m, 100m)
                : null;
    }
}
