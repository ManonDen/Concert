using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class SallesProfiles : Profile
    {
        public SallesProfiles() 
        {
            CreateMap<Salle,SallesDto>();
            CreateMap<SallesDto, Salle>();
            CreateMap<Salle, SallesDtoOut>();
            CreateMap<SallesDtoOut, Salle>();
        }
    }
}
