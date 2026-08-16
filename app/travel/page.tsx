"use client"

import { useMemo } from "react"
import { PageShell } from "@/components/page-shell"
import RotatingEarth from "@/components/ui/wireframe-dotted-globe"
import { PhotoStack } from "@/components/photo-stack"
import { destinations, travelPhotos } from "@/lib/travel-data"

export default function TravelPage() {
  const globeDestinations = useMemo(
    () =>
      destinations.map((d) => ({
        ...d,
        caption: d.trips
          .map((t) => (t.year ? `${t.season} ${t.year}` : t.season))
          .join(", "),
      })),
    [],
  )

  return (
    <PageShell title="Travel" meta={`"If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. Walk in someone else's shoes or at least eat their food. It's a plus for everybody."\n— Anthony Bourdain`}>
      <div className="flex flex-col items-center w-full overflow-x-hidden">
        <RotatingEarth width={600} destinations={globeDestinations} />
        <PhotoStack photos={travelPhotos} />
      </div>
    </PageShell>
  )
}
