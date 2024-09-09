using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using testMongo.Services;
using testMongo.Models;
using testMongo.Dto;
using Microsoft.AspNetCore.Authorization;

namespace testMongo.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SallesController : ControllerBase
{
    private readonly SallesService _SallesService;
    private readonly IMapper _mapper;

    public SallesController(SallesService service, IMapper mapper)
    {
        _SallesService = service;
        _mapper = mapper;
    }

    [AllowAnonymous]
    [HttpGet]
    public  async Task<ActionResult<IEnumerable<SallesDtoOut>>> Get()
    {
        var listeSalles =  await _SallesService.GetAsync();
        var  salles = _mapper.Map<IEnumerable<SallesDtoOut>>(listeSalles);
        return Ok(salles);
    }

    [AllowAnonymous]
    [HttpGet("{id}", Name = "GetSalleById")]
    public async Task<ActionResult<Salle>> Get(int id)
    {
        var SalleItem = await _SallesService.GetAsync(id);

        if (SalleItem != null)
        {
            return Ok(SalleItem);
        }

        return NotFound();
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<Salle>> CreateSalle(Salle entity)
    {
      
        await _SallesService.CreateAsync(entity);

        return CreatedAtRoute("GetSalleById", new { id = entity.Id }, entity);
    }

    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateSalle(int id, Salle entity)
    {
        // TODO trouver un moyen de récupérer le token (dans le header de la requête http)
        // TODO vérifier que l'utilisateur qui a envoyé le token est bien un administrateur


        var SalleFromRepo = await _SallesService.GetAsync(id);

        if (SalleFromRepo == null)
        {
            return NotFound();
        }

        await _SallesService.UpdateAsync(id, entity);
        return NoContent();
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {

        var book = await _SallesService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _SallesService.RemoveAsync(id);

        return NoContent();
    }
}

