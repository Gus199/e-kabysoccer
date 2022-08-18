import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from "@/styles/Header.module.css";


const images = [
  'images/soc01.jpg',
  'images/soc02.jpg',
  'images/soc03.jpg',
  'images/soc04.jpg',
  'images/soc05.jpg',
  'images/soc06.jpg'
 ]

function SliderPhoto() {
  return (
    <div className={styles.header}>
    <Zoom scale={0.4}>
      {
        images.map((each, index) => <img key={index} style={{width: "300px"}} src={each} />)
      }
    </Zoom>
  </div>
  )
}

export default SliderPhoto
