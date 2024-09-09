
using IFramework.Infrastructure;

namespace testMongo.Dto
{
    public class SallesDto
    {
        public int Id { get; set; }

        public string Nom { get; set; }

        public AdressesDto Adresse { get; set; }

        public List<string> Styles { get; set; }

        public List<AvisDto>? Avis { get; set; }

        public int Capacite { get; set; }

        public bool Smac { get; set; }

        public List<ConcertsDto>? Concerts{ get; set; }
}

    public class SallesDtoOut
    {
        public int Id { get; set; }

        public string Nom { get; set; }

        public AdressesDto Adresse { get; set; }

        public List<string> Styles { get; set; }

        public List<AvisDto> Avis { get; set; }

        public int Capacite { get; set; }

        public bool Smac { get; set; }

        public List<ConcertsDto>? Concerts { get; set; }

    }
}
