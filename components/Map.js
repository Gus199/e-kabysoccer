// import React, { useRef, useEffect, useState } from 'react';
// import styles from "@/styles/Map.module.css";
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import Geocode from 'react-geocode'


// mapboxgl.accessToken = (process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN);
// // this.mapContainer = React.createRef();
// function Map({event}) {
 
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [loading, setLoading] = useState(true)
//     const [lng, setLng] = useState(-70.9);
//     const [lat, setLat] = useState(42.35);
//     const [zoom, setZoom] = useState(9);
//     const [viewport, setViewport] = useState({
//       latitude: 40.712772,
//       longitude: -73.935242,
//       width: '100%',
//       height: '500px',
//       zoom: 12,
//     })

//     useEffect(() => {
//       if (map.current) return; // initialize map only once
//       map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [lng, lat],
//       zoom: zoom
//       });
//       });
    

//       useEffect(() => {
//         // Get latitude & longitude from address.
//         Geocode.fromAddress(event.address).then(
//           (response) => {
//             const { lat, lng } = response.results[0].geometry.location
//             setLat(lat)
//             setLng(lng)
//             setViewport({ ...viewport, latitude: lat, longitude: lng })
//             setLoading(false)
//           },
//           (error) => {
//             console.error(error)
//           }
//         )
//       }, [])
    
//       Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)
    
//       if (loading) return false
//   return (
//     <div>
//        {/* <div className="sidebar"></div> */}
//     <div className={styles.sidebar}>
//     Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//     </div>
//     <div ref={mapContainer} className={styles.map} />
//     </div>
//   )
// }

// export default Map