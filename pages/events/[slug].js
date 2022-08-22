import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { Store } from '../../utils/Store';
import Layout from "@/components/Layout";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import Event from '../../models/Event';
import db from '../../utils/db';
import Link from "next/link";
import styles from "@/styles/Event.module.css";
import EventMap from '../../components/EventMap'
import Map from '../../components/Map'

function EventPage(props) {
  const { event } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!event) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }
 

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
            {/* <Image src={event.image}  loader={myLoader} width={960} height={600} /> */}
            <Image src={event.image}  width={960} height={600} />
          </div>
        )}
        <Map />
       <h3>Description:</h3>
       <p>{event.description}</p>
       <h3>Venue:{event.venue}</h3>
       <p>{event.address}</p>
       
       <EventMap event={event} />
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const event = await Event.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      event: event ? db.convertDocToObj(event) : null,
    },
  };
}
