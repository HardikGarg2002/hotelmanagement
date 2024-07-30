import axios from 'axios';

const rooms = [
    {
      "slug": "leela-standard-101",
      "hotel_slug": "the-leela-palace",
      "room_type": "Standard",
      "status": "AVAILABLE",
      "price": 5000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service"],
      "images": [
        "https://www.example.com/images/leela-standard-101-1.jpg",
        "https://www.example.com/images/leela-standard-101-2.jpg"
      ]
    },
    {
      "slug": "leela-deluxe-102",
      "hotel_slug": "the-leela-palace",
      "room_type": "Deluxe",
      "status": "RESERVED",
      "price": 8000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service", "Mini Bar"],
      "images": [
        "https://www.example.com/images/leela-deluxe-102-1.jpg",
        "https://www.example.com/images/leela-deluxe-102-2.jpg"
      ]
    },
    {
      "slug": "leela-family-103",
      "hotel_slug": "the-leela-palace",
      "room_type": "Family Suite",
      "status": "OCCUPIED",
      "price": 15000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service", "Kitchenette"],
      "images": [
        "https://www.example.com/images/leela-family-103-1.jpg",
        "https://www.example.com/images/leela-family-103-2.jpg"
      ]
    },
    {
      "slug": "taj-standard-201",
      "hotel_slug": "taj-mahal-palace",
      "room_type": "Standard",
      "status": "AVAILABLE",
      "price": 6000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service"],
      "images": [
        "https://www.example.com/images/taj-standard-201-1.jpg",
        "https://www.example.com/images/taj-standard-201-2.jpg"
      ]
    },
    {
      "slug": "taj-deluxe-202",
      "hotel_slug": "taj-mahal-palace",
      "room_type": "Deluxe",
      "status": "NOT_AVAILABLE",
      "price": 9000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service", "Mini Bar"],
      "images": [
        "https://www.example.com/images/taj-deluxe-202-1.jpg",
        "https://www.example.com/images/taj-deluxe-202-2.jpg"
      ]
    },
    {
      "slug": "taj-business-203",
      "hotel_slug": "taj-mahal-palace",
      "room_type": "Business Suite",
      "status": "AVAILABLE",
      "price": 12000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service", "Work Desk"],
      "images": [
        "https://www.example.com/images/taj-business-203-1.jpg",
        "https://www.example.com/images/taj-business-203-2.jpg"
      ]
    },
    {
      "slug": "itc-standard-301",
      "hotel_slug": "itc-grand-chola",
      "room_type": "Standard",
      "status": "RESERVED",
      "price": 5500,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service"],
      "images": [
        "https://www.example.com/images/itc-standard-301-1.jpg",
        "https://www.example.com/images/itc-standard-301-2.jpg"
      ]
    },
    {
      "slug": "itc-family-302",
      "hotel_slug": "itc-grand-chola",
      "room_type": "Family Suite",
      "status": "OCCUPIED",
      "price": 16000,
      "amenities": ["Free WiFi", "Television", "Air Conditioning", "Room Service", "Kitchenette"],
      "images": [
        "https://www.example.com/images/itc-family-302-1.jpg",
        "https://www.example.com/images/itc-family-302-2.jpg"
      ]
    }
  ]
const createRoom = async (room:any) => {
  try {
    const response = await axios.post('https://api.yourhotelmanagementsystem.com/rooms', room);
    console.log(`Room created: ${response.data.slug}`);
  } catch (error) {
    console.error(`Error creating room ${room.slug}:`);
  }
};

const createRooms = async () => {
  for (const room of rooms) {
    await createRoom(room);
  }
};

createRooms();
