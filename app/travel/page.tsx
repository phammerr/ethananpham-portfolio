import { PageShell } from "@/components/page-shell"
import RotatingEarth from "@/components/ui/wireframe-dotted-globe"
import { TravelCarousel } from "@/components/travel-carousel"
import { destinations, travelPhotos } from "@/lib/travel-data"

export default function TravelPage() {
  return (
    <PageShell title="travel" meta={`"If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. Walk in someone else's shoes or at least eat their food. It's a plus for everybody."\n— Anthony Bourdain`}>
      <RotatingEarth width={600} destinations={destinations} />
      <TravelCarousel photos={travelPhotos} />
    </PageShell>
  )
}
