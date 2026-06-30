import { PageShell } from "@/components/page-shell"
import { Gallery } from "@/components/gallery"
import { galleryItems } from "@/lib/gallery-data"

export default function HobbiesPage() {
  return (
    <PageShell title="Hobbies" meta='"A jack of all trades is a master of none, but oftentimes better than a master of one."'>
      <Gallery items={galleryItems} />
    </PageShell>
  )
}
