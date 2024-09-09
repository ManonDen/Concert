using MongoDB.Bson.Serialization.Attributes;

namespace testMongo.Dto
{
    public class ConcertsDto
    {
        public string Nom { get; set; }

        public int PlacesRestantes { get; set; }

        public DateTime Date { get; set; }
    }
}
