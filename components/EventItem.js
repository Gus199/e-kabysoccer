/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";
// import data from "utils/data";

function EventItem({event}) {
 
  return (
    <div className={styles.event}>
      <div className={styles.img}>
          <a>
              <img src={event.image} alt={event.name}  width={170} height={100}/>

          </a>
      </div>
      <div className={styles.info}>
          <span>
              {event.date} at {event.time}
          </span>
          <h3>{event.name}</h3>
      </div>
      <div className={styles.link}>
          <Link href={`/events/${event.slug}`}>
              <a className="btn">
              Details
              </a>
          </Link>

      </div>
    </div>
  );
}

export default EventItem;
