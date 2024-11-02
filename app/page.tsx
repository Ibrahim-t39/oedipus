import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gray-800 rounded-lg shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/title.jpg" 
            alt="Greek theater" 
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-amber-400">Oedipus Rex</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">Explore the timeless Greek tragedy by Sophocles</p>
          <Button asChild size="lg">
            <Link href="/story">Begin the Journey</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Oedipus' Story", description: "Unravel the tragic tale of the ill-fated king", link: "/story" },
          { title: "Key Characters", description: "Meet the figures that shape this legendary narrative", link: "/characters" },
          { title: "Pivotal Moments", description: "Explore the turning points in Oedipus' journey", link: "/moments" },
          { title: "Significant Quotes", description: "Delve into the powerful words that echo through time", link: "/quotes" },
          { title: "Join the Discussion", description: "Share your thoughts and insights on the tragedy", link: "/discussion" },
        ].map((item, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 transition-transform duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl font-bold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.description}</p>
              <Button asChild variant="outline">
                <Link href={item.link}>Explore More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}