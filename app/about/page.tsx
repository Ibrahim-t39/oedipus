/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="space-y-12 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">About This Project</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">The Oedipus Rex Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              This website is dedicated to exploring the timeless Greek tragedy, Oedipus Rex, written by Sophocles. Our goal is to provide a comprehensive resource for students, scholars, and enthusiasts to delve into the rich themes, characters, and enduring legacy of this masterpiece.
            </p>
            <p className="text-gray-300">
              Through interactive elements, in-depth analysis, and a platform for discussion, we aim to bring this ancient work to life for a modern audience, highlighting its continued relevance and profound insights into the human condition.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About Sophocles</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="/images/him.JPG"
              alt="Portrait of Sophocles"
              width={150}
              height={150}
              className="w-[150px] h-[150px] object-cover"
            />
            <p className="text-gray-300 text-center">
              Sophocles (c. 497/6 BC - 406/5 BC) was one of the most famous and celebrated writers of ancient Greek tragedies. He wrote over 120 plays during his lifetime, of which only seven have survived in a complete form, including the famous Oedipus Rex.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">The Significance of Oedipus Rex</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Oedipus Rex, also known as Oedipus the King, is considered by many to be Sophocles' masterpiece and one of the greatest works of ancient Greek tragedy. First performed around 429 BC, the play has had a lasting impact on literature, psychology, and cultural discourse.
          </p>
          <p className="text-gray-300 mb-4">
            The story of Oedipus, a man fated to kill his father and marry his mother, explores themes of fate versus free will, the limits of human knowledge, and the consequences of pride and hubris. Its influence extends far beyond the realm of literature, inspiring countless adaptations, interpretations, and psychological theories, including Sigmund Freud's Oedipus complex.
          </p>
          <p className="text-gray-300">
            Through this website, we invite you to explore the depths of this remarkable work, its historical context, and its enduring relevance in our modern world.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About the Creator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/images/me.JPG"
            alt="Portrait of the Creator"
            width={150}
            height={150}
            className="square"
          />
          <div>
            <p className="text-gray-300 mb-4">
              Hello! I'm [Your Name], a passionate literature student at [Your University]. This website is the culmination of my final year project for my degree in Classical Literature.
            </p>
            <p className="text-gray-300 mb-4">
              My fascination with Greek tragedy, particularly Oedipus Rex, inspired me to create this digital resource. I wanted to make this timeless work more accessible and engaging for modern readers, while also deepening my own understanding of its themes and cultural significance.
            </p>
            <p className="text-gray-300">
              This project has been a labor of love, combining my interests in classical literature, digital humanities, and web development. I hope that this website serves as a valuable resource for fellow students, educators, and anyone interested in exploring the enduring power of Sophocles' masterpiece.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}