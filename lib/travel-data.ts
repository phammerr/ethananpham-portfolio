export type Trip = {
  season: string
  year?: number
}

export type Destination = {
  name: string
  coordinates: [number, number] // [longitude, latitude]
  trips: Trip[]
}

export const destinations: Destination[] = [
  { name: "Tokyo, Japan", coordinates: [139.6917, 35.6895], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Lisbon, Portugal", coordinates: [-9.1393, 38.7223], trips: [{ season: "Summer", year: 2023 }] },
  { name: "Tróia, Portugal", coordinates: [-8.8856, 38.4919], trips: [{ season: "Summer", year: 2023 }] },
  { name: "Sintra, Portugal", coordinates: [-9.3897, 38.8029], trips: [{ season: "Summer", year: 2023 }] },
  { name: "Osaka, Japan", coordinates: [135.5023, 34.6937], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Kyoto, Japan", coordinates: [135.7681, 35.0116], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Bangkok, Thailand", coordinates: [100.5018, 13.7563], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Koh Tao, Thailand", coordinates: [99.84, 10.0956], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Chiang Mai, Thailand", coordinates: [98.9853, 18.7883], trips: [{ season: "Summer", year: 2024 }] },
  {
    name: "London, United Kingdom",
    coordinates: [-0.1278, 51.5074],
    trips: [
      { season: "Summer", year: 2024 },
      { season: "Summer", year: 2026 },
    ],
  },
  { name: "Amsterdam, Netherlands", coordinates: [4.9041, 52.3676], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Manuel Antonio, Costa Rica", coordinates: [-84.1499, 9.3925], trips: [{ season: "Summer", year: 2024 }] },
  { name: "La Fortuna, Costa Rica", coordinates: [-84.6431, 10.4709], trips: [{ season: "Summer", year: 2024 }] },
  { name: "Ljubljana, Slovenia", coordinates: [14.5058, 46.0569], trips: [{ season: "Winter", year: 2025 }] },
  { name: "Lake Bled, Slovenia", coordinates: [14.0942, 46.3683], trips: [{ season: "Winter", year: 2025 }] },
  { name: "Lake Tahoe, California", coordinates: [-120.0324, 39.0968], trips: [{ season: "Spring", year: 2025 }] },
  {
    name: "New York, New York",
    coordinates: [-74.006, 40.7128],
    trips: [
      { season: "Fall", year: 2024 },
      { season: "Summer", year: 2025 },
    ],
  },
  {
    name: "Chicago, Illinois",
    coordinates: [-87.6298, 41.8781],
    trips: [
      { season: "Winter", year: 2024 },
      { season: "Spring", year: 2025 },
    ],
  },
  { name: "Lake Forest, California", coordinates: [-117.6862, 33.6469], trips: [{ season: "Winter", year: 2024 }] },
  {
    name: "San Francisco, California",
    coordinates: [-122.4194, 37.7749],
    trips: [
      { season: "Spring", year: 2025 },
      { season: "Fall", year: 2025 },
      { season: "Spring", year: 2026 },
    ],
  },
  { name: "Deep Creek, Maryland", coordinates: [-79.3756, 39.5079], trips: [{ season: "Summer", year: 2025 }] },
  { name: "Outer Banks, North Carolina", coordinates: [-75.6665, 35.5582], trips: [{ season: "Summer", year: 2025 }] },
  { name: "Oahu, Hawaii", coordinates: [-157.9806, 21.4389], trips: [{ season: "Fall", year: 2025 }] },
  { name: "Ho Chi Minh City, Vietnam", coordinates: [106.6297, 10.8231], trips: [{ season: "Fall/Winter", year: 2025 }] },
  { name: "Hanoi, Vietnam", coordinates: [105.8342, 21.0278], trips: [{ season: "Winter", year: 2025 }] },
  { name: "Ha Giang, Vietnam", coordinates: [104.9784, 22.8025], trips: [{ season: "Winter", year: 2026 }] },
  { name: "Hoi An, Vietnam", coordinates: [108.338, 15.8801], trips: [{ season: "Winter", year: 2025 }] },
  { name: "Kathmandu, Nepal", coordinates: [85.324, 27.7172], trips: [{ season: "Winter", year: 2026 }] },
  { name: "Chitwan, Nepal", coordinates: [84.4303, 27.5291], trips: [{ season: "Winter", year: 2026 }] },
  { name: "Himalayas, Nepal", coordinates: [86.925, 27.9881], trips: [{ season: "Winter", year: 2026 }] },
  { name: "Henderson, North Carolina", coordinates: [-78.4031, 36.3293], trips: [{ season: "Summer", year: 2026 }] },
  { name: "Berlin, Germany", coordinates: [13.405, 52.52], trips: [{ season: "Summer", year: 2026 }] },
  { name: "Winchester, United Kingdom", coordinates: [-1.308, 51.0632], trips: [{ season: "Summer", year: 2026 }] },
  { name: "Oxford, United Kingdom", coordinates: [-1.2577, 51.752], trips: [{ season: "Summer", year: 2026 }] },
  { name: "Barcelona, Spain", coordinates: [2.1734, 41.3851], trips: [{ season: "Summer", year: 2026 }] },
  { name: "McLean, Virginia", coordinates: [-77.1772, 38.9338], trips: [{ season: "Home" }] },
]

export type TravelPhoto = {
  src: string
  location: string
  date: string
}

export const travelPhotos: TravelPhoto[] = [
  { src: "/gallery/travel1.jpg", location: "camden market started as a small arts n crafts fair", date: "London, United Kingdom" },
  { src: "/gallery/travel2.jpg", location: "this is the only natural island in all of slovenia", date: "Lake Bled, Slovenia" },
  { src: "/gallery/travel3.jpg", location: 'deer learn to nod their head here as a sign of "i want a cracker"', date: "Nara, Japan" },
  { src: "/gallery/travel4.jpg", location: "former WW2 battle ship now home to thousands of fish", date: "Koh Tao, Thailand" },
  { src: "/gallery/IMG_6644.jpg", location: "rice balls & watermelon are also elephant food", date: "Chiang Mai, Thailand" },
  { src: "/gallery/travel5.jpg", location: "almost 3000 people cross at once during peak time", date: "Tokyo, Japan" },
  { src: "/gallery/travel6.jpg", location: "one of nearly 1700 bridges in the city", date: "Amsterdam, Netherlands" },
  { src: "/gallery/travel8.jpg", location: "my wingspan is 1/3 of oahu", date: "Hawaii, USA" },
  { src: "/gallery/travel9.jpg", location: 'cheers in vietnamese: "một, hai, ba, vô!"', date: "Ha Giang, Vietnam" },
  { src: "/gallery/travel10.jpg", location: "plastic bag is the safest way to transport a chicken on motorbike", date: "Ha Giang, Vietnam" },
  { src: "/gallery/travel11.jpg", location: "fútbol transcends language barriers", date: "Manuel Antonio, Costa Rica" },
  { src: "/gallery/travel12.jpg", location: "250,000 steps", date: "Himalayas, Nepal" },
  { src: "/gallery/travel13.jpg", location: "nepali rock and metal is the heartbeat of kathmandu's nightlife", date: "Kathmandu, Nepal" },
  { src: "/gallery/travel14.jpg", location: "my safari tour guide likes selfies", date: "Chitwan, Nepal" },
  { src: "/gallery/travel15.jpg", location: "my lovely coworkers in vietnam for 3 months", date: "Ho Chi Minh City, Vietnam" },
  { src: "/gallery/travel16.jpg", location: "after soccer wins the city will parade the streets til sunrise", date: "Ho Chi Minh City, Vietnam" },
  { src: "/gallery/travel17.jpg", location: "the blue bandana uses natural indigo to dye", date: "Sapa, Vietnam" },
  { src: "/gallery/travel18.jpg", location: "riding motorbikes in vietnam are so much fun", date: "Hoi An, Vietnam" },
  { src: "/gallery/travel19.jpg", location: "basketball transcends japanese language barriers", date: "Tokyo, Japan" },
  { src: "/gallery/travel20.jpg", location: "galapagos sharks can grow up to 12 feet", date: "Hawaii, USA" },
  { src: "/gallery/travel21.jpg", location: "got globally famous when obama and bourdain ate it on tv in 2016", date: "Hanoi, Vietnam" },
  { src: "/gallery/travel22.jpg", location: 'paella actually means "pan" rather than the food itself', date: "Barcelona, Spain" },
  { src: "/gallery/travel23.jpg", location: "some people escaped the berlin wall using hot air balloon", date: "Berlin, Germany" },
  { src: "/gallery/travel24.jpg", location: "there are 13 white geese that live in this cathedral", date: "Barcelona, Spain" },
  { src: "/gallery/travel25.jpg", location: "WW2 soldiers would use Fish n Chips as a secret verbal password", date: "London, United Kingdom" },
  { src: "/gallery/travel26.jpg", location: "august hall was originally built in 1890s as a victorian playhouse", date: "San Francisco, California" },
  { src: "/gallery/travel27.jpg", location: "1/694 one horned rhinos", date: "Chitwan, Nepal" },
  { src: "/gallery/travel28.jpg", location: "mercat de la boqueria dates back to 1217", date: "Barcelona, Spain" },
  { src: "/gallery/travel29.jpg", location: "west village impromptu watch party hosted over 15,000 people", date: "New York, NY" },
  { src: "/gallery/travel30.jpg", location: "it's illegal to climb everest without a guide", date: "Himalayas, Nepal" },
  { src: "/gallery/travel31.jpg", location: "spin prayer wheels clockwise for good luck", date: "Himalayas, Nepal" },
  { src: "/gallery/travel32.jpg", location: "70% of the park is rock, snow, or ice", date: "Himalayas, Nepal" },
]
