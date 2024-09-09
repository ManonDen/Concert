using AutoMapper;
using testMongo.Dto;
using testMongo.Models;

namespace testMongo.Profiles
{
    public class UsersProfiles: Profile
    {

            public UsersProfiles()
            {
                CreateMap<Users, UsersDto>();
                CreateMap<UsersDto, Users>();
            }
        
    }
}
