import Layout from "@/components/Layout";
import Event from '../models/Event';
import db from '../utils/db';
import { Store } from '../utils/Store';
import EventItem from "@/components/EventItem";
import Link from "next/link";

import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';

export default function Home({ events }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  // const addToCartHandler = async (event) => {
  //   const existItem = cart.cartItems.find((x) => x.slug === event.slug);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/events/${event._id}`);

  //   if (data.countInStock < quantity) {
  //     return toast.error('Sorry. Product is out of stock');
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...event, quantity } });

  //   toast.success('Product added to the cart');
  // };

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