// import Product from '../../models/Product';
import User from '../../models/User';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Event.deleteMany();
  await Event.insertMany(data.events);
  await db.disconnect();
  res.send({ message: 'seeded successfully for kabyle' });
};
export default handler;
