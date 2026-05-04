using Microsoft.AspNetCore.Mvc;
using Mvc.Models;
using System.Text;
using System.Text.Json;

namespace Mvc.Controllers;

public class HomeController : Controller
{
    private readonly HttpClient _client;

    public HomeController(IHttpClientFactory factory, IConfiguration config)
    {
        _client = factory.CreateClient();
        _client.BaseAddress = new Uri(config["ApiBaseUrl"]);
    }

    public async Task<IActionResult> Index()
    {
        var res = await _client.GetStringAsync("api/employees");

        var data = JsonSerializer.Deserialize<List<Employee>>(res,
            new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        return View(data);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Employee emp)
    {
        var json = JsonSerializer.Serialize(emp);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        await _client.PostAsync("api/employees", content);
        return RedirectToAction("Index");
    }

    public async Task<IActionResult> Delete(int id)
    {
        await _client.DeleteAsync($"api/employees/{id}");
        return RedirectToAction("Index");
    }
    public async Task<IActionResult> Edit(int id)
{
    var res = await _client.GetStringAsync($"api/employees/{id}");
    var emp = JsonSerializer.Deserialize<Employee>(res,
        new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

    return View(emp);
}

[HttpPost]
public async Task<IActionResult> Edit(Employee emp)
{
    var json = JsonSerializer.Serialize(emp);
    var content = new StringContent(json, Encoding.UTF8, "application/json");

    await _client.PutAsync($"api/employees/{emp.Id}", content);
    return RedirectToAction("Index");
}
public async Task<IActionResult> Index(string? search)
{
    string url = "api/employees";

    if (!string.IsNullOrEmpty(search))
    {
        url += $"?search={search}";
    }

    var res = await _client.GetStringAsync(url);

    var data = JsonSerializer.Deserialize<List<Employee>>(res,
        new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

    ViewBag.Search = search;

    return View(data);
}
public async Task<IActionResult> Index(string? search, int page = 1)
{
    int pageSize = 5;

    string url = $"api/employees?page={page}&pageSize={pageSize}";

    if (!string.IsNullOrEmpty(search))
    {
        url += $"&search={search}";
    }

    var res = await _client.GetStringAsync(url);

    var result = JsonSerializer.Deserialize<PagedResult<Employee>>(res,
        new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

    ViewBag.Search = search;
    ViewBag.Page = result!.Page;
    ViewBag.TotalPages = (int)Math.Ceiling((double)result.TotalCount / pageSize);

    return View(result.Data);
}
}