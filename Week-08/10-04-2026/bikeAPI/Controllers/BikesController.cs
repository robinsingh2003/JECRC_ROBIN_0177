using Microsoft.AspNetCore.Mvc;
using bikeAPI.Models.Entities;
using bikeAPI.Models.Dtos;

namespace bikeAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BikesController : ControllerBase
{
    private static List<Bike> _bikes = new ();
    [HttpGet]
    public IActionResult GetAll()
    {
        var summaryList = _bikes.Select(bike => new BikeSummaryDto
        {
            Name = bike.Name,
            Brand = bike.Brand,
            Model = bike.Model,
            Price = bike.Price
        }).ToList();

        return Ok(summaryList);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        var bike = _bikes.FirstOrDefault(b => b.Id == id);
        if (bike == null) return NotFound(new { message = "Bike not found!" });
        return Ok(bike);
    }

    [HttpPost]
    public IActionResult Create(BikeCreateDto dto)
    {
        var newBike = new Bike
        {
            Id = Guid.NewGuid(),
            Name = dto.Name,
            Brand = dto.Brand,
            Model = dto.Model,
            Price = dto.Price,
            Description = dto.Description,
            ImageUrl = dto.ImageUrl,
            Color = "Default",
            Type = "Standard"
        };

        _bikes.Add(newBike);
        return CreatedAtAction(nameof(GetById), new { id = newBike.Id }, newBike);
    }

    [HttpPut("{id}")]
    public IActionResult Update(Guid id, BikeCreateDto updateDto)
    {
        var existingBike = _bikes.FirstOrDefault(b => b.Id == id);
        if (existingBike == null) return NotFound();

        existingBike.Name = updateDto.Name;
        existingBike.Price = updateDto.Price;
        existingBike.Brand = updateDto.Brand;
        existingBike.Description = updateDto.Description;
        existingBike.ImageUrl = updateDto.ImageUrl;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var bike = _bikes.FirstOrDefault(b => b.Id == id);
        if (bike == null) return NotFound();

        _bikes.Remove(bike);
        return Ok(new { message = "Bike deleted successfully" });
    }
}