using testMongo.Models;

namespace testMongo.Dto
{
    public class AdressesDto
    {
        public int Numero { get; set; }

        public string Voie { get; set; }

        public string CodePostal { get; set; }

        public string Ville { get; set; }

        public Localisation Localisation { get; set; }
    }
}
