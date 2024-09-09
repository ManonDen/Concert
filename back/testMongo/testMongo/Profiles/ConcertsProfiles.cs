using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class ConcertsProfiles:Profile
    {
        public ConcertsProfiles() 
        {
            CreateMap<Concerts, ConcertsDto>();
            CreateMap<ConcertsDto, Concerts>();
        }
    }
}
