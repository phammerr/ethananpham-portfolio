export type Destination = {
  name: string
  coordinates: [number, number] // [longitude, latitude]
  year?: number
}

export const destinations: Destination[] = [
  { name: "Tokyo, Japan", coordinates: [139.6917, 35.6895], year: 2024, caption: "Post Graduation Trip Summer 2024" },
]
