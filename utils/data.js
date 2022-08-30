import bcrypt from 'bcryptjs'
const data ={
    users: [
        {
          name: 'John',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Jane',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
      events: [
        {
            name: 'Special Game',
            slug: 'special-game',
            venue: 'North East Philadelphia',
            image: '/images/soc01.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            // address: '919 3rd Ave New York, New York(NY), 10022',
            address : "70 W 115th St New York, New York(NY),10026",
            rating: 4.8,
            numReviews: 8,
            countInStock: 20,
            description: "There are many events in the international calendar for football (soccer), and also significant events in national and regional football competitions",
        },
        {
            name: 'south vs northeast',
            slug: 'south-vs-northeast',
            venue: 'North East Philadelphia',
            image: '/images/soc02.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            address: '70 W 115th St New York, New York(NY),10026',
            rating: 4.9,
            numReviews: 17,
        
            description: "There are many events in the international calendar for football (soccer), and also significant events in national and regional football competitions",
        },
        {
            name: 'Pro Game',
            slug: 'pro-game',
            venue: 'North East Philadelphia',
            image: '/images/soc03.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            address: '70 W 115th St New York, New York(NY),10026',
            rating: 4.4,
            numReviews: 5,
         
            description: "There are many events in the international calendar for football (soccer), and also significant events in national and regional football competitions",
        },
        {
            name: 'Soccer League',
            slug: 'soccer-league',
            venue: 'North East Philadelphia',
            image: '/images/soc04.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            address: '70 W 115th St New York, New York(NY),10026',
            rating: 4.3,
            numReviews: 6,
            
            description: 'Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90 '
        },
        {
            name: 'Pro-Soccer League',
            slug: 'pro-soccer-league',
            venue: 'North East Philadelphia',
            image: '/images/soc05.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            address: '70 W 115th St New York, New York(NY),10026',
            rating: 5,
            numReviews: 10,
            
            description: "There are many events in the international calendar for football (soccer), and also significant events in national and regional football competitions",
        },
        {
            name: 'Summer League',
            slug: 'summer-league',
            venue: 'North East Philadelphia',
            image: '/images/soc06.jpg',
            date: "June 09, 2021",
           time: "10:00 PM EST",
            address: '235 S 33rd St, Philadelphia, PA 19104',
            rating: 5,
            numReviews: 11,
          
            description: "There are many events in the international calendar for football (soccer), and also significant events in national and regional football competitions",
        }
    ]
}

export default data