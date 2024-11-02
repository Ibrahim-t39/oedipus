/* eslint-disable react/no-unescaped-entities */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const quotes = [
  {
    text: "To throw away an honest friend is, as it were, to throw your life away",
    speaker: "Oedipus",
    context: "Oedipus to Creon, emphasizing the importance of loyalty and friendship."
  },
  {
    text: "It's a terrible thing to be wise when wisdom brings no reward.",
    speaker: "Tiresias",
    context: "Tiresias to Oedipus, lamenting the burden of knowing the truth."
  },
  {
    text: "Time, which sees all things, has found you out against your will.",
    speaker: "Chorus",
    context: "The Chorus commenting on the revelation of Oedipus' true identity."
  },
  {
    text: "Oh God! It was true! All the prophecies!",
    speaker: "Oedipus",
    context: "Oedipus' realization that he has fulfilled the prophecy."
  },
  {
    text: "I would never have come to this if I had known.",
    speaker: "Jocasta",
    context: "Jocasta's lament upon learning the truth about Oedipus' identity."
  },
  {
    text: "I see myself as a child of fortune— and she is generous, that mother of mine from whom I spring, and the months, my siblings, have seen me by turns both small and great.",
    speaker: "Oedipus",
    context: "Oedipus reflecting on his life and fate."
  },
  {
    text: "You will no longer see all those atrocious things I suffered, the dreadful things I did!",
    speaker: "Oedipus",
    context: "Oedipus after blinding himself, addressing his own eyes."
  },
  {
    text: "So while we wait to see that final day, we cannot call a mortal being happy before he's passed beyond life free from pain.",
    speaker: "Chorus",
    context: "The Chorus's final reflection on Oedipus's fate and the nature of human happiness."
  },
  {
    text: "It was Apollo, friends, it was Apollo. He brought on these troubles— the awful things I suffer. But the hand which stabbed out my eyes was mine alone.",
    speaker: "Oedipus",
    context: "Oedipus explaining the source of his troubles and his self-inflicted blindness."
  },
  {
    text: "In the name of the gods, my lord, don't ask! Please, no more questions!",
    speaker: "Servant",
    context: "The servant pleading with Oedipus to stop his inquiry into his own past."
  },
  {
    text: "I see myself as a child of fortune— and she is generous, that mother of mine from whom I spring, and the months, my siblings, have seen me by turns both small and great.",
    speaker: "Oedipus",
    context: "Oedipus reflecting on his life and fate."
  },
  {
    text: "You will no longer see all those atrocious things I suffered, the dreadful things I did!",
    speaker: "Oedipus",
    context: "Oedipus after blinding himself, addressing his own eyes."
  },
  {
    text: "So while we wait to see that final day, we cannot call a mortal being happy before he's passed beyond life free from pain.",
    speaker: "Chorus",
    context: "The Chorus's final reflection on Oedipus's fate and the nature of human happiness."
  },
  {
    text: "It was Apollo, friends, it was Apollo. He brought on these troubles— the awful things I suffer. But the hand which stabbed out my eyes was mine alone.",
    speaker: "Oedipus",
    context: "Oedipus explaining the source of his troubles and his self-inflicted blindness."
  },
  {
    text: "In the name of the gods, my lord, don't ask! Please, no more questions!",
    speaker: "Servant",
    context: "The servant pleading with Oedipus to stop his inquiry into his own past."
  }
]

export default function Quotes() {
  return (
    <div className="space-y-12 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">Significant Quotes from Oedipus Rex</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <blockquote className="font-playfair text-xl italic mb-4 flex-grow">"{quote.text}"</blockquote>
                <div>
                  <p className="font-bold mb-2 text-amber-400">- {quote.speaker}</p>
                  <p className="text-sm text-gray-400">{quote.context}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}