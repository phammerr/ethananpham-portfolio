export type Destination = {
  name: string
  coordinates: [number, number] // [longitude, latitude]
  year?: number
}

export const destinations: Destination[] = [
  { name: "Tokyo, Japan", coordinates: [139.6917, 35.6895], year: 2024 },
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
