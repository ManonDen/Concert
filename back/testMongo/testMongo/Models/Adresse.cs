using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace testMongo.Models
{
    public class Adresse
    {
        [BsonElement("numero")]
        public int Numero { get; set; }

        [BsonElement("voie")]
        public string Voie { get; set; }

        [BsonElement("codePostal")]
        public string CodePostal { get; set; }

        [BsonElement("ville")]
        public string Ville { get; set; }

        [BsonElement("localisation")]
        public Localisation Localisation { get; set; }
    }
}
