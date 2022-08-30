import Image from 'next/image'
import { useState, useEffect } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'
import styles from "@/styles/Map.module.css";

export default function EventMap({ event }) {
  
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    // latitude: 40.712772,
    // longitude: -73.935242,
    width:"100vw" ,
    height:"100vh",
    zoom: 14,
  
  })

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(event.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        setLat(lat)
        setLng(lng)
        setViewport({ ...viewport, latitude: lat, longitude: lng, })
        setLoading(false)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  if (loading) return false

  return (
    <Map  
      {...viewport}
      width="100vw" 
      height="100vh"
      // mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      mapStyle='mapbox://styles/amar199/cl7flmtiy000514l2s2fm1t4n'
      onViewportChange={(vp) => setViewport(vp)}
      
    >
      <div className={styles.mapit} key={event.id} latitude={lat} longitude={lng} >
        {/* <Image src='/images/pin.svg' width={30} height={30} /> */}
        here at
      </div>
    </Map>
  )
}
{/* <div ></div> */}
