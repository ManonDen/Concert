import React,{useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./CreateMap.module.css";
import "leaflet/dist/leaflet.css";



function CreateMap({ coordinates }) {
  // const [monDictionnaire, setMonDictionnaire] = useState({
  //   "regvre": [43.85643,4.405415],
  //   "ejrkfzef": [43.85643,5.405415],
  //   "cle3": [43.85643,6.405415]
  // })
  return (
    <>
      <MapContainer
        className={styles.mapContainer}
        center={[46.6031, 1.8883]}
        zoom={5}
        minZoom={4}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
        (typeof coordinates[0] == "number" && (
          <Marker position={[coordinates[0], coordinates[1]]}></Marker>
        )) ||
          (coordinates !=null &&
            Object.entries(coordinates).map(([cle, valeur])  => (
              <Marker key={cle} position={valeur}>
                <Popup>{cle}</Popup>
              </Marker>
            )))}
      </MapContainer>
    </>
  );
}

export default CreateMap;
