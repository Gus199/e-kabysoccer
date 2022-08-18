import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Layout from '@/components/Layout';

const images = [
  'images/soc01.jpg',
  'images/soc02.jpg',
  'images/soc04.jpg',
  'images/soc05.jpg',
  'images/soc03.jpg',
  'images/soc06.jpg'
];


function slidphotos() {
  return (
 <Layout>
    <div className="slide-container">
    <Zoom scale={0.4}>
      {
        images.map((each, index) => <img key={index} style={{width: "100%", height:"80vh"}} src={each} />)
      }
    </Zoom>
  </div>
  </Layout>
  )
}

export default slidphotos