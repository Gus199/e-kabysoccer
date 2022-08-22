import React, { useRef, useEffect, useState } from 'react';
import styles from "@/styles/Map.module.css";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hcjE5OSIsImEiOiJjbDZ6NWp0bTgwMTM3M25sNXZkdXR0dGkwIn0.rQdN68r1pKcD2qs_4pthxg';
function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
      });
  return (
    <div>
       {/* <div className="sidebar"></div> */}
    <div className={styles.sidebar}>
    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
    <div ref={mapContainer} className={styles.map} />
    </div>
  )
}

export default Map