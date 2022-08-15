/* eslint-disable jsx-a11y/alt-text */
import Layout from "@/components/Layout";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "../../utils/data";
import Link from "next/link";
import styles from "@/styles/Event.module.css";

function EventPage() {
  const { query } = useRouter();
  const { slug } = query;
  const event = data.events.find((x) => x.slug === slug);
  if (!event) {
    return <div>Produt Not Found</div>;
  }
  const deleteEvent = (e) => {
    console.log("Delete");
  };
  return (
    <Layout title={event.name}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.slug}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image src={event.image} width={960} height={600} />
          </div>
        )}
       <h3>Description:</h3>
       <p>{event.description}</p>
       <h3>Venue:{event.venue}</h3>
       <p>{event.address}</p>
       <Link href='/events'>
         <a className={styles.back}>
          {'<'} Go Back
         </a>
       </Link>
      </div>
    </Layout>
  );
}

export default EventPage;
