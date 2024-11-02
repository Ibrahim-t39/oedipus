'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const storyEvents = [
  {
    title: "The Oracle's Prophecy",
    description: "King Laius and Queen Jocasta of Thebes receive a chilling prophecy from the Oracle of Delphi: their newborn son will grow up to kill his father and marry his mother. Horrified by this prediction, they decide to avoid this fate at all costs.",
    image: "/images/IMG_3636.jpeg"
  },
  {
    title: "Abandonment of the Infant",
    description: "To prevent the prophecy from coming true, Laius and Jocasta order a servant to abandon their infant son on Mount Cithaeron. The servant pierces the baby's ankles and binds them together, giving rise to the name 'Oedipus', which means 'swollen foot'.",
    image: "/images/IMG_3639.jpeg"
  },
  {
    title: "Rescue and Adoption",
    description: "A shepherd from Corinth finds the abandoned infant and takes him to the childless King Polybus and Queen Merope of Corinth. They adopt Oedipus and raise him as their own, never revealing his true origins.",
    image: "/images/IMG_3642.jpeg"
  },
  {
    title: "Oedipus Learns of the Prophecy",
    description: "As a young man, Oedipus hears a rumor that he is not the biological son of Polybus and Merope. He consults the Oracle of Delphi, who tells him the same prophecy given to his birth parents: he will kill his father and marry his mother.",
    image: "/images/IMG_3646.jpeg"
  },
  {
    title: "Flight from Corinth",
    description: "Determined to avoid this terrible fate, Oedipus flees Corinth, believing he is running away from his 'parents' Polybus and Merope. Ironically, this decision sets him on the path to fulfill the very prophecy he's trying to avoid.",
    image: "/images/IMG_3651.jpeg"
  },
  {
    title: "The Fateful Crossroads",
    description: "At a crossroads near Thebes, Oedipus encounters a small group of travelers. A quarrel erupts over who has the right of way. In the ensuing fight, Oedipus kills an older man who, unknown to him, is his biological father, King Laius of Thebes.",
    image: "/images/IMG_3655.jpeg"
  },
  {
    title: "The Riddle of the Sphinx",
    description: "Arriving in Thebes, Oedipus finds the city terrorized by the Sphinx, a monster with the head of a woman, body of a lion, and wings of a bird. The Sphinx poses a riddle to all travelers, killing those who cannot solve it. Oedipus successfully solves the riddle: 'Man, who crawls on four legs in infancy, walks on two in adulthood, and uses a cane in old age.'",
    image: "/images/IMG_3662.jpeg"
  },
  {
    title: "Oedipus Becomes King of Thebes",
    description: "Having defeated the Sphinx and freed Thebes from its terror, Oedipus is hailed as a hero. As a reward, he is offered the throne of Thebes and the hand of Queen Jocasta in marriage. Unaware that Jocasta is his mother, Oedipus accepts, unknowingly fulfilling the second part of the prophecy.",
    image: "/images/IMG_3663.jpeg"
  },
  {
    title: "Years of Prosperity",
    description: "For many years, Thebes prospers under Oedipus' rule. He and Jocasta have four children: Eteocles, Polynices, Antigone, and Ismene. Oedipus is respected as a wise and just king, completely unaware of the true nature of his relationship to his wife and children.",
    image: "/images/IMG_3664.jpeg"
  },
  {
    title: "The Plague Strikes Thebes",
    description: "A terrible plague descends upon Thebes, causing crops to fail, livestock to perish, and women to bear stillborn children. The people turn to their king, Oedipus, to save them once again.",
    image: "/images/IMG_3667.jpeg"
  },
  {
    title: "Creon's Message from Delphi",
    description: "Oedipus sends his brother-in-law, Creon, to consult the Oracle at Delphi. Creon returns with the message that the plague is divine punishment for the unpunished murder of the previous king, Laius. Oedipus vows to find the murderer and bring him to justice.",
    image: "/images/IMG_3668.jpeg"
  },
  {
    title: "The Prophet Tiresias",
    description: "Oedipus summons the blind prophet Tiresias to help identify the murderer. Initially reluctant to speak, Tiresias eventually accuses Oedipus himself of being the killer. Oedipus, outraged, accuses Tiresias of conspiring with Creon to overthrow him.",
    image: "/images/IMG_3670.jpeg"
  },
  {
    title: "Jocasta's Attempt to Comfort",
    description: "Jocasta tries to comfort Oedipus by discrediting prophecies. She mentions that Laius was killed at a place where three roads meet, which disturbs Oedipus as it matches his memory of killing a man at a crossroads years ago.",
    image: "/images/IMG_3671.jpeg"
  },
  {
    title: "The Messenger from Corinth",
    description: "A messenger arrives from Corinth with news of King Polybus' death. Oedipus is relieved, thinking he has escaped the prophecy of killing his father. However, in an attempt to further ease Oedipus' mind, the messenger reveals that Polybus and Merope were not Oedipus' biological parents.",
    image: "/images/IMG_3672.jpeg"
  },
  {
    title: "The Shepherd's Revelation",
    description: "An old shepherd is summoned who confirms he had given the infant Oedipus to the messenger long ago. The terrible truth is finally revealed: Oedipus is indeed the son of Laius and Jocasta, fulfilling the prophecy in its entirety.",
    image: "/images/IMG_3674.jpeg"
  },
  {
    title: "Jocasta's Suicide",
    description: "Jocasta, realizing the full horror of the situation, flees into the palace and hangs herself. Oedipus, following her, discovers her body and is overwhelmed with grief and shame.",
    image: "/images/IMG_3676.jpeg"
  },
  {
    title: "Oedipus Blinds Himself",
    description: "In his anguish, Oedipus takes the pins from Jocasta's dress and uses them to blind himself, declaring that he no longer wishes to see the world that he has polluted with his actions.",
    image: "/images/IMG_3677.jpeg"
  },
  {
    title: "Oedipus' Exile",
    description: "Creon becomes the new ruler of Thebes. Oedipus asks to be exiled, but first begs to see his daughters one last time. In a heart-wrenching scene, he bids farewell to Antigone and Ismene, lamenting the difficult lives that await them.",
    image: "/images/IMG_3680.jpeg"
  },
  {
    title: "The Chorus' Final Reflection",
    description: "As Oedipus is led away into exile, the Chorus reflects on the tragic fall of a once-great king, reminding the audience that no man should be considered fortunate until he has reached the end of his life without suffering misfortune.",
    image: "/images/IMG_3679.jpeg"
  }
]

export default function Story() {
  return (
    <div className="space-y-16 p-6 bg-gray-900 text-white">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">The Tragic Tale of Oedipus Rex</h1>
      
      {storyEvents.map((event, index) => (
        <motion.section 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center space-y-6 md:space-y-0 md:space-x-6 ${index % 2 !== 0 && 'md:space-x-reverse'}`}
        >
          <div className="md:w-1/2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold mb-4 text-amber-400">{event.title}</h2>
            <p className="text-lg">{event.description}</p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src={event.image} 
              alt={event.title} 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </motion.section>
      ))}
    </div>
  )
}