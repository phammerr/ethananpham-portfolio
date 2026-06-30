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
  { name: "London, United Kingdom", coordinates: [-0.1278, 51.5074], trips: [{ season: "Summer", year: 2024 }] },
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
  { name: "McLean, Virginia", coordinates: [-77.1772, 38.9338], trips: [{ season: "Home" }] },
]

export type TravelPhoto = {
  src: string
  location: string
  date: string
}

export const travelPhotos: TravelPhoto[] = [
  { src: "/placeholder.jpg", location: "Tokyo, Japan", date: "Summer 2024" },
  { src: "/placeholder.jpg", location: "Ho Chi Minh City, Vietnam", date: "Spring 2023" },
  { src: "/placeholder.jpg", location: "Washington, D.C.", date: "Fall 2022" },
]
