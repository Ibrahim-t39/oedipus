'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'

type Note = {
  id: number;
  title: string;
  content: string;
}

const facts: Note[] = [
  {
    id: 1,
    title: "Sophocles",
    content: "The ancient Greek playwright who wrote 'Oedipus Rex' as part of his Theban plays trilogy."
  },
  {
    id: 2,
    title: "Thebes",
    content: "The ancient Greek city-state where the events of Oedipus Rex take place."
  },
  {
    id: 3,
    title: "Aristotle's Poetics",
    content: "An ancient Greek text on dramatic theory that uses Oedipus Rex as the prime example of a perfect tragedy."
  },
  {
    id: 4,
    title: "Delphi",
    content: "The site of the ancient Greek oracle that delivered the prophecy about Oedipus' fate."
  },
  {
    id: 5,
    title: "Three Unities",
    content: "Aristotelian principles of drama (unity of action, time, and place) that Oedipus Rex closely follows."
  },
  {
    id: 6,
    title: "Sphinx's Riddle",
    content: "The riddle posed by the Sphinx was: 'What walks on four feet in the morning, two in the afternoon and three at night?'"
  },
  {
    id: 7,
    title: "Oedipus' Name",
    content: "The name 'Oedipus' literally means 'swollen foot' in Greek, referring to his pierced ankles as an infant."
  },
  {
    id: 8,
    title: "Freud's Theory",
    content: "Sigmund Freud named his theory of the Oedipus complex after the main character of this play."
  },
  {
    id: 9,
    title: "Plague in Thebes",
    content: "The play begins with Thebes suffering from a plague, which Oedipus seeks to end by finding the murderer of the previous king."
  },
  {
    id: 10,
    title: "Jocasta's Jewelry",
    content: "Oedipus blinds himself using the pins from Jocasta's brooches, symbolizing how her death opens his eyes to the truth."
  },
  {
    id: 11,
    title: "Oedipus' Exile",
    content: "At the end of the play, Oedipus asks to be exiled from Thebes, fulfilling the punishment he declared for Laius' murderer."
  },
  {
    id: 12,
    title: "Tiresias' Blindness",
    content: "The prophet Tiresias is physically blind but can see the truth, contrasting with Oedipus who has sight but is blind to reality."
  }
]

const terms: Note[] = [
  {
    id: 1,
    title: "Tragic Irony",
    content: "A literary device heavily used in Oedipus Rex, where the audience knows the tragic truth long before the characters realize it."
  },
  {
    id: 2,
    title: "Hubris",
    content: "Excessive pride or self-confidence, a common trait in tragic heroes like Oedipus, often leading to their downfall."
  },
  {
    id: 3,
    title: "Catharsis",
    content: "The purification or purgation of emotions through art, particularly tragedy. Oedipus Rex is known for its strong cathartic effect."
  },
  {
    id: 4,
    title: "Hamartia",
    content: "A fatal flaw leading to the downfall of a tragic hero. In Oedipus' case, it could be his pride or his relentless pursuit of the truth."
  },
  {
    id: 5,
    title: "Peripeteia",
    content: "A sudden reversal of fortune or change in circumstances, often seen in the moment Oedipus realizes his true identity."
  },
  {
    id: 6,
    title: "Anagnorisis",
    content: "The moment of critical discovery or recognition. In Oedipus Rex, it's when Oedipus finally recognizes his true identity and actions."
  },
  {
    id: 7,
    title: "Chorus",
    content: "A group in Greek tragedies that comments on the action, often representing the voice of the community or providing background information."
  },
  {
    id: 8,
    title: "Deus ex Machina",
    content: "While not used in Oedipus Rex, this term refers to an unexpected power or event saving a seemingly hopeless situation, often contrasted with Oedipus' fate."
  },
  {
    id: 9,
    title: "Tragic Hero",
    content: "A literary character who makes an error of judgment or has a fatal flaw that leads to their downfall. Oedipus is a classic example."
  },
  {
    id: 10,
    title: "Fate vs. Free Will",
    content: "A central theme in Oedipus Rex, exploring whether Oedipus' actions were predetermined by fate or a result of his own choices."
  },
  {
    id: 11,
    title: "Dramatic Irony",
    content: "When the audience understands the implications of a situation on stage, but the characters do not. This is prevalent throughout Oedipus Rex."
  },
  {
    id: 12,
    title: "Prophecy",
    content: "A prediction of future events. The prophecy about Oedipus killing his father and marrying his mother drives the plot of the play."
  }
]

export default function Notes() {
  const [searchTerm, setSearchTerm] = useState('')

  const filterNotes = (notes: Note[]) => 
    notes.filter(note => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="space-y-12 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">Oedipus Rex: Notes</h1>
      
      <Input
        placeholder="Search facts and terms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-800 border-gray-700 mb-8"
      />

      <Tabs defaultValue="facts" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="facts">Facts</TabsTrigger>
          <TabsTrigger value="terms">Terms</TabsTrigger>
        </TabsList>
        <TabsContent value="facts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filterNotes(facts).map((fact) => (
                <motion.div
                  key={fact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800 border-gray-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-amber-400">{fact.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{fact.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>
        <TabsContent value="terms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filterNotes(terms).map((term) => (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-gray-800 border-gray-700 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-amber-400">{term.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{term.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}