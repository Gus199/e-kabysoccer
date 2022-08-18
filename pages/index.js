import Layout from "@/components/Layout";
import Event from "../models/Event";
import db from "../utils/db";
import { Store } from "../utils/Store";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import { useContext } from "react";



export default function Home({ events }) {
  console.log(events.address);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  return (
    <Layout title="Kabyle Soccer Game">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {events.map((event) => (
          <EventItem event={event} key={event.slug}>
            {event.name}
          </EventItem>
        ))}
        {events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">View All</a>
          </Link>
        )}
      </div>
     
    </Layout>
    
  );
}

export async function getServerSideProps() {
  await db.connect();
  const events = await Event.find().lean();
  return {
    props: {
      events: events.map(db.convertDocToObj),
    },
  };
}
