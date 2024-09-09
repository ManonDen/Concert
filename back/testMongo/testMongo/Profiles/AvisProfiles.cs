using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class AvisProfiles : Profile
    {
        public AvisProfiles() {
            CreateMap<Avis,AvisDto>();
            CreateMap<AvisDto, Avis>();
        }
    }
}
