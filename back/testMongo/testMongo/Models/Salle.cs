using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace testMongo.Models
{
    public class Salle
    {
        [BsonElement("_id")]
        //[BsonRepresentation(BsonType.ObjectId)]
        public int Id { get; set; }

        [BsonElement("nom")]
        public string Nom { get; set; }

        [BsonElement("adresse")]
        public Adresse Adresse { get; set; }


        [BsonElement("styles")]
        public List<string> Styles { get; set; }

        [BsonElement("avis")]
        public List<Avis>? Avis { get; set; }

        [BsonElement("capacite")]
        public int Capacite { get; set; }

        [BsonElement("smac")]
        public bool Smac { get; set; }

        [BsonElement("concerts")]
        public List<Concerts>? Concerts { get; set; }
    }




}