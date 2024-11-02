'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const characters = [
  {
    name: "Oedipus",
    description: "The protagonist and king of Thebes. Intelligent and determined, he unknowingly fulfills a prophecy to kill his father and marry his mother. His quest for truth leads to his tragic downfall.",
    image: "/images/oedipus.jpg"
  },
  {
    name: "Jocasta",
    description: "Oedipus' mother and wife, queen of Thebes. She tries to discourage Oedipus from pursuing the truth and hangs herself upon realizing the full extent of their tragic situation.",
    image: "/images/jocasta.jpg"
  },
  {
    name: "Creon",
    description: "Jocasta's brother and Oedipus' brother-in-law. Initially accused by Oedipus of plotting against him, he later becomes king after Oedipus' downfall. He shows compassion towards Oedipus in the end.",
    image: "/images/creon.jpg"
  },
  {
    name: "Tiresias",
    description: "A blind prophet who reluctantly reveals the truth to Oedipus. His blindness is contrasted with his ability to see the truth, while Oedipus, with sight, is blind to reality.",
    image: "/images/teiresias.jpg"
  },
  {
    name: "Laius",
    description: "Oedipus' biological father and the former king of Thebes. He was killed by Oedipus at the crossroads, fulfilling part of the prophecy. His unsolved murder is the catalyst for the play's events.",
    image: "/images/laius.png"
  },
  {
    name: "The Chorus",
    description: "Represents the elders of Thebes. They offer commentary, ask questions, and provide insight throughout the play. The Chorus often expresses the collective wisdom and reactions of the citizens of Thebes.",
    image: "/images/chorus.jpeg"
  },
  {
    name: "Messenger from Corinth",
    description: "Brings news of King Polybus' death and inadvertently reveals that Oedipus was adopted, setting in motion the final revelation of Oedipus' true identity.",
    image: "/images/messenger.jpg"
  },
  {
    name: "Shepherd",
    description: "An old servant of Laius who was ordered to expose the infant Oedipus. His testimony provides the final piece of evidence that confirms Oedipus' true parentage.",
    image: "/images/shepherd.jpg"
  },
  {
    name: "Antigone",
    description: "Oedipus' daughter and sister. Though a minor character in this play, she becomes the protagonist in Sophocles' 'Antigone'. She supports her father in his exile.",
    image: "/images/antigone.jpg"
  },
  {
    name: "Ismene",
    description: "Oedipus' other daughter and sister. Like Antigone, she appears briefly at the end of the play when Oedipus laments the difficult future his children will face.",
    image: "/images/ismene.jpg"
  },
  {
    name: "Polybus",
    description: "The king of Corinth who raised Oedipus as his own son. His death, reported in the play, leads to the revelation that Oedipus was adopted.",
    image: "/images/polybus.jpg"
  },
  {
    name: "Merope",
    description: "The queen of Corinth and wife of Polybus. Along with Polybus, she raised Oedipus, believing him to be their son.",
    image: "/images/Merope.webp"
  }
]

export default function Characters() {
  return (
    <div className="space-y-12 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">Characters of Oedipus Rex</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
              <CardHeader className="p-0">
                <Image 
                  src={character.image} 
                  alt={character.name} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex flex-col h-full">
                <CardTitle className="font-playfair text-2xl font-bold mb-2 text-amber-400">{character.name}</CardTitle>
                <p className="text-gray-300 flex-grow">{character.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}