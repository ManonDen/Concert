using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class AdressesProfiles : Profile
    {
        public AdressesProfiles() 
        { 
            CreateMap<Adresse, AdressesDto>();
            CreateMap<AdressesDto, Adresse>();
        }
    }
}
