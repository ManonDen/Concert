using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class LocalisationsProfiles : Profile
    {
        public LocalisationsProfiles() { 
            CreateMap<Localisation,LocalisationsDto>();
            CreateMap<LocalisationsDto, Localisation>();
        }
    }
}
