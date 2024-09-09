using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace testMongo.Models
{
    public class Concerts
    {

        [BsonElement("nom")]
        public string Nom { get; set; }

        [BsonElement("placesRestantes")]
        public int PlacesRestantes { get; set; }

        [BsonElement("date")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Date { get; set; }
    }
}
