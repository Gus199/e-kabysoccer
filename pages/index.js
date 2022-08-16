import Layout from "@/components/Layout";
import data from "utils/data";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function Home() {
  console.log(data);
  return (
    <Layout title="Kabyle Soccer Game">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.events.map((event) => (
          <EventItem event={event} key={event.slug}>
            {event.name}
          </EventItem>
        ))}
        {data.events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">View All</a>
          </Link>
        )}
      </div>
    </Layout>
  );
}
