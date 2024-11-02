/* eslint-disable react/no-unescaped-entities */

import { ScrollArea } from "@/components/ui/scroll-area"

export default function FullText() {
  return (
    <div className="space-y-8">
      <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 text-center">Oedipus the King</h1>
      <p className="text-center text-lg">By Sophocles (c. 420 BCE)</p>
      <p className="text-center text-sm text-gray-400">
        This translation, which has been prepared by Ian Johnston of Malaspina University-College, Nanaimo, BC, 
        is in the public domain and may be used, in whole or in part, without permission and without charge, 
        provided the source is acknowledged—released August 2004.
      </p>
      
      <ScrollArea className="h-[70vh] border border-gray-700 rounded-lg p-4">
        <div className="space-y-6">
          <section>
            <h2 className="font-playfair text-2xl font-bold mb-4">Translator's Note</h2>
            <p>The translator would like to acknowledge the invaluable help provided by Sir Richard Jebb's translation and commentary.</p>
            <p>Sophocles (495 BC-405 BC) was a famous and successful Athenian writer of tragedies in his own lifetime. Of his 120 plays, only 7 have survived. Oedipus the King, also called Oedipus Tyrannos or Oedipus Rex, written around 420 BC, has long been regarded not only as his finest play but also as the purest and most powerful expression of Greek tragic drama.</p>
            <p>Oedipus, a stranger to Thebes, became king of the city after the murder of king Laius, about fifteen or sixteen years before the start of the play. He was offered the throne because he was successful in saving the city from the Sphinx, an event referred to repeatedly in the text of the play. He married Laius' widow, Jocasta, and had four children with her, two sons, Eteocles and Polyneices, and two daughters, Antigone and Ismene.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold mb-4">Dramatis Personae</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>OEDIPUS: king of Thebes</li>
              <li>PRIEST: the high priest of Thebes</li>
              <li>CREON: Oedipus' brother-in-law</li>
              <li>CHORUS of Theban elders</li>
              <li>TEIRESIAS: an old blind prophet</li>
              <li>BOY: attendant on Teiresias</li>
              <li>JOCASTA: wife of Oedipus, sister of Creon</li>
              <li>MESSENGER: an old man</li>
              <li>SERVANT: an old shepherd</li>
              <li>SECOND MESSENGER: a servant of Oedipus</li>
              <li>ANTIGONE: daughter of Oedipus and Jocasta, a child</li>
              <li>ISMENE: daughter of Oedipus and Jocasta, a child</li>
              <li>SERVANTS and ATTENDANTS on Oedipus and Jocasta</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold mb-4">The Play</h2>
            <p>[The action takes place in Thebes in front of the royal palace. The main doors are directly facing the audience. There are altars beside the doors. A crowd of citizens carrying branches decorated with laurel garlands and wool and led by the PRIEST has gathered in front of the altars, with some people sitting on the altar steps. OEDIPUS enters through the palace doors]</p>
            
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-bold">OEDIPUS:</p>
                <p>My children, latest generation born from Cadmus,
                why are you sitting here with wreathed sticks
                in supplication to me, while the city
                fills with incense, chants, and cries of pain?
                Children, it would not be appropriate for me
                to learn of this from any other source,
                so I have come in person—I, Oedipus,
                whose fame all men acknowledge. But you there,
                old man, tell me—you seem to be the one
                who ought to speak for those assembled here.
                What feeling brings you to me—fear or desire?
                You can be confident that I will help.
                I shall assist you willingly in every way.
                I would be a hard-hearted man indeed,
                if I did not pity suppliants like these.</p>
              </div>

              <div>
                <p className="font-bold">PRIEST:</p>
                <p>Oedipus, ruler of my native land,
                you see how people here of every age
                are crouching down around your altars,
                some fledglings barely strong enough to fly
                and others bent by age, with priests as well—
                for I'm priest of Zeus—and these ones here,
                the pick of all our youth. The other groups
                sit in the market place with suppliant sticks
                or else in front of Pallas' two shrines,
                or where Ismenus prophesies with fire.
                For our city, as you yourself can see,
                is badly shaken—she cannot raise her head
                above the depths of so much surging death.
                Disease infects fruit blossoms in our land,
                disease infects our herds of grazing cattle,
                makes women in labour lose their children.
                And deadly pestilence, that fiery god,
                swoops down to blast the city, emptying
                the House of Cadmus, and fills black Hades
                with groans and howls. These children and myself
                now sit here by your home, not because we think
                you're equal to the gods. No. We judge you
                the first of men in what happens in this life
                and in our interactions with the gods.
                For you came here, to our Cadmeian city,
                and freed us from the tribute we were paying
                to that cruel singer—and yet you knew
                no more than we did and had not been taught.
                In their stories, the people testify
                how, with gods' help, you gave us back our lives.
                So now, Oedipus, our king, most powerful
                in all men's eyes, we're here as suppliants,
                all begging you to find some help for us,
                either by listening to a heavenly voice,
                or learning from some other human being.
                For, in my view, men of experience
                provide advice which gives the best results.
                So now, you best of men, raise up our state.
                Act to consolidate your fame, for now,
                thanks to your eagerness in earlier days,
                the city celebrates you as its saviour.
                Don't let our memory of your ruling here
                declare that we were first set right again,
                and later fell. No. Restore our city,
                so that it stands secure. In those times past
                you brought us joy—and with good omens, too.
                Be that same man today. If you're to rule
                as you are doing now, it's better to be king
                in a land of men than in a desert.
                An empty ship or city wall is nothing
                if no men share your life together there.</p>
              </div>

              <div>
                <p className="font-bold">OEDIPUS:</p>
                <p>My poor children, I know why you have come—
                I am not ignorant of what you yearn for.
                For I well know that you are ill, and yet,
                sick as you are, there is not one of you
                whose illness equals mine. Your agony
                comes to each one of you as his alone,
                a special pain for him and no one else.
                But the soul inside me sorrows for myself,
                and for the city, and for you—all together.
                You are not rousing me from a deep sleep.
                You must know I've been shedding many tears
                and, in my wandering thoughts, exploring
                many pathways. After a careful search
                I followed up the one thing I could find
                and acted on it. So I have sent away
                my brother-in-law, son of Menoeceus,
                Creon, to Pythian Apollo's shrine,
                to learn from him what I might do or say
                to save our city. But when I count the days—
                the time he's been away—I now worry
                what he's doing. For he's been gone too long,
                well past the time he should have taken.
                But when he comes, I'll be a wicked man
                if I do not act on all the god reveals.</p>
              </div>

              <div>
                <p className="font-bold">PRIEST:</p>
                <p>What you have said is most appropriate,
                for these men here have just informed me
                that Creon is approaching.</p>
              </div>

              <div>
                <p className="font-bold">OEDIPUS:</p>
                <p>Lord Apollo,
                as he returns may fine shining fortune,
                bright as his countenance, attend on him.</p>
              </div>

              <div>
                <p className="font-bold">PRIEST:</p>
                <p>It seems the news he brings is good—if not,
                he would not wear that wreath around his head,
                a laurel thickly packed with berries.</p>
              </div>

              <div>
                <p className="font-bold">OEDIPUS:</p>
                <p>We'll know soon enough—he's within earshot.</p>
              </div>

              <div><p>[Enter CREON. OEDIPUS calls to him as he approaches]</p></div>
            </div>
          </section>

          <section>
            <p className="font-bold">OEDIPUS:</p>
            <p>My royal kinsman, child of Menoeceus, what message from the god do you bring us?</p>
        </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Good news. I tell you even troubles difficult to bear will all end happily if events lead to the right conclusion.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What is the oracle? So far your words inspire in me no confidence or fear.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>If you wish to hear the news in public, I’m prepared to speak. Or we could step inside.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Speak out to everyone. The grief I feel for these citizens is even greater than any pain I feel for my own life.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Then let me report what I heard from the god. Lord Phoebus clearly orders us to drive away the polluting stain this land has harbored—which will not be healed if we keep nursing it.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What sort of cleansing? And this disaster—how did it happen?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>By banishment—or atone for murder by shedding blood again. This blood brings on the storm which blasts our state.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And the one whose fate the god revealed—what sort of man is he?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Before you came, my lord, to steer our ship of state, Laius ruled this land.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I have heard that, but I never saw the man.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Laius was killed. And now the god is clear: those murderers, he tells us, must be punished, whoever they may be.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And where are they? In what country? Where am I to find a trace of this ancient crime? It will be hard to track.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Here in Thebes, so said the god. What is sought is found, but what is overlooked escapes.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When Laius fell in bloody death, where was he—at home, or in his fields, or in another land?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>He was abroad, on his way to Delphi—that’s what he told us. He began the trip, but did not return.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Was there no messenger—no companion who made the journey with him and witnessed what took place—a person who might provide some knowledge men could use?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>They all died—except for one who was afraid and ran away. There was only one thing he could inform us of with confidence about the things he saw.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What was that? We might get somewhere if we had one fact—we could find many things, if we possessed some slender hope to get us going.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>He told us it was robbers who attacked them—not just a single man, a gang of them—they came on with force and killed him.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>How would a thief have dared to do this, unless he had financial help from Thebes?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>That’s what we guessed. But once Laius was dead we were in trouble, so no one sought revenge.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When the ruling king had fallen in this way, what bad trouble blocked your path, preventing you from looking into it?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>It was the Sphinx—she sang her enigmatic song and thus forced us to put aside something we found obscure to look into the urgent problem we now faced.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Then I will start afresh, and once again shed light on darkness. It is most fitting that Apollo demonstrates his care for the dead man, and worthy of you, too. And so, as is right, you will see how I work with you, seeking vengeance for this land, as well as for the god. This polluting stain I will remove, not for some distant friend, but for myself. For whoever killed this man may soon enough desire to turn his hand in the same way against me, too, and kill me. Thus, in avenging Laius, I serve myself.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But now, my children, as quickly as you can stand up from these altar steps and take your suppliant branches. Someone must call the Theban people to assemble here. I’ll do everything I can. With the god’s help this will all come to light successfully, or else it will prove our common ruin.</p>
    <p>[OEDIPUS and CREON go into the palace]</p>
    </section>

    <section>
    <p className="font-bold">PRIEST:</p>
    <p>Let us get up, children. For this man has willingly declared just what we came for. And may Phoebus, who sent this oracle, come as our saviour and end our sickness.</p>
    <p>[The PRIEST and the CITIZENS leave. Enter the CHORUS OF THEBAN ELDERS]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>Oh sweet speaking voice of Zeus, you have come to glorious Thebes from golden Pytho—but what is your intent? My fearful heart twists on the rack and shakes with fear. O Delian healer, for whom we cry aloud in holy awe, what obligation will you demand from me, a thing unknown or now renewed with the revolving years? Immortal voice, O child of golden Hope, speak to me!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>First I call on you, Athena the immortal, daughter of Zeus, and on your sister, too, Artemis, who guards our land and sits on her glorious round throne in our market place, and on Phoebus, who shoots from far away. O you three guardians against death, appear to me!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>First I call on you, Athena the immortal, daughter of Zeus, and on your sister, too, Artemis, who guards our land and sits on her glorious round throne in our market place, and on Phoebus, who shoots from far away. O you three guardians against death, appear to me!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>If before now you have ever driven off a fiery plague to keep away disaster from the city and have banished it, then come to us this time as well! Alas, the pains I bear are numberless—my people now all sick with plague, our minds can find no weapons to serve as our defence. Now the offspring of our splendid earth no longer grow, nor do our women crying out in labour get their relief from a living new-born child. As you can see—one by one they swoop away, off to the shores of the evening god, like birds faster than fire which no one can resist.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>Our city dies—we’ve lost count of all the dead. Her sons lie in the dirt unpitied, unlamented. Corpses spread the pestilence, while youthful wives and grey-haired mothers on the altar steps wail everywhere and cry in supplication, seeking to relieve their agonizing pain. Their solemn chants ring out—they mingle with the voices of lament. O Zeus’ golden daughter, send your support and strength, your lovely countenance!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>And that ravenous Ares, god of killing, who now consumes me as he charges on with no bronze shield but howling battle cries, let him turn his back and quickly leave this land, with a fair following wind to carry him to the great chambers of Amphitrite or inhospitable waves of Thrace. For if destruction does not come at night, then day arrives to see it does its work. O you who wield that mighty flash of fire, O father Zeus, with your lightning blast let Ares be destroyed!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>O Lyceian lord, how I wish those arrows from the golden string of your bent bow with their all-conquering force would wing out to champion us against our enemy, and the blazing fires of Artemis, as well, with which she races through the Lycian hills. I call the god who binds his hair with gold, the one whose name our country shares, the one to whom the Maenads shout their cries, Dionysus with his radiant face—may he come to us with his flaming torchlight, our ally against Ares, a god dishonoured among gods.</p>
    </section>

    <section>
    <p className="font-bold">[Enter OEDIPUS from the palace]</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You pray. But if you listen now to me, you’ll get your wish. Hear what I have to say and treat your own disease—then you may hope to find relief from your distress. I shall speak as one who is a stranger to the story, a stranger to the crime. If I alone were tracking down this act, I’d not get far without a single clue. That being the case, for it was after the event that I became a citizen of Thebes, I now proclaim the following to all of you Cadmeians: Whoever among you knows the man who murdered Laius, son of Labdacus, I order him to reveal it all to me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And if the murderer’s afraid, I tell him to avoid the danger of the major charge by speaking out against himself. If so, he will be sent out from this land unhurt—and undergo no further punishment. If someone knows the killer is a stranger, from some other state, let him not stay mute. As well as a reward, he’ll earn my thanks. But if he remains quiet, if anyone, through fear, hides himself or a friend of his against my orders, here’s what I shall do—so listen to my words.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>For I decree that no one in this land, in which I rule as your own king, shall give that killer shelter or talk to him, whoever he may be, or act in concert with him during prayers, or sacrifice, or sharing lustral water. Ban him from your homes, every one of you, for he is our pollution, as the Pythian god has just revealed to me. In doing this, I’m acting as an ally of the god and of dead Laius, too.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And I pray whoever the man is who did this crime, one unknown person acting on his own or with companions, the worst of agonies will wear out his wretched life. I pray, too, that, if he should become an honoured guest in my own home and with my knowledge, I may suffer all those things I’ve just called down upon the killers. And I urge you now to make sure all these orders take effect, for my sake, for the sake of the god, and for our barren, godless, ruined land.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>For in this matter, even if a god were not prompting us, it would not be right for you to simply leave things as they are, and not to purify the murder of a man who was so noble and who was your king. You should have looked into it. But now I possess the ruling power which Laius held in earlier days. I have his bed and wife—she would have borne his children if his hopes to have a son had not been disappointed.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Children from a common mother might have linked Laius and myself. But as it turned out, fate swooped down onto his head. So now I will fight on his behalf, as if this matter concerned my father, and I will strive to do everything I can to find him, the man who spilled his blood, and thus avenge the son of Labdacus and Polydorus, of Cadmus and Agenor from old times.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>As for those who do not follow what I urge, I pray the gods send them no fertile land, no, nor any children in their women’s wombs—may they all perish in our present fate or one more hateful still. To you others, you Cadmeians who support my efforts, may Justice, our ally, and all the gods attend on us with kindness always.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>My lord, since you extend your oath to me, I will say this. I am not the murderer, nor can I tell you who the killer is. As for what you’re seeking, it’s for Apollo, who launched this search, to state who did it.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That is well said. But no man has power to force the gods to speak against their will.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>May I then suggest what seems to me the next best course of action?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You may indeed, and if there is a third course, too, don’t hesitate to let me know.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Our lord Teiresias, I know, can see into things, like lord Apollo. From him, my king, a man investigating this might well find out the details of the crime.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I’ve taken care of that—it’s not something I could overlook. At Creon’s urging, I have dispatched two messengers to him and have been wondering for some time now why he has not come.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Apart from that, there are rumours—but inconclusive ones from a long time ago.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What kind of rumours? I’m looking into every story.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>It was said that Laius was killed by certain travellers.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Yes, I heard as much. But no one has seen the one who did it.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Well, if the killer has any fears, once he hears your curses on him, he will not hold back, for they are serious.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When a man has no fear of doing the act, he’s not afraid of words.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>No, not in the case where no one stands there to convict him. But at last Teiresias is being guided here, our god-like prophet, in whom the truth resides more so than in all other men.</p>
    </section>

    <section>
    <p className="font-bold">[Enter TEIRESIAS led by a small BOY]</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Teiresias, you who understand all things—what can be taught and what cannot be spoken of, what goes on in heaven and here on the earth—you know, although you cannot see, how sick our state is. And so we find in you alone, great seer, our shield and saviour. For Phoebus Apollo, in case you have not heard the news, has sent us an answer to our question: the only cure for this infecting pestilence is to find the men who murdered Laius and kill them or else expel them from this land as exiles. So do not withhold from us your prophecies in voices of the birds or by some other means. Save this city and yourself. Rescue me. Deliver us from this pollution by the dead. We are in your hands. For a mortal man, the finest labour he can do is help with all his power other human beings.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Alas, alas! How dreadful it can be to have wisdom when it brings no benefit to the man possessing it. This I knew, but it had slipped my mind. Otherwise, I would not have journeyed here.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What’s wrong? You’ve come, but seem so sad.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Let me go home. You must bear your burden to the very end, and I will carry mine, if you’ll agree with me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What you are saying is not customary and shows little love toward the city-state which nurtured you, if you deny us your prophetic voice.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I see your words are also out of place. I do not speak for fear of doing the same.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If you know something, then, by heaven, do not turn away. We are your suppliants—all of us—we bend our knees to you.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>You are all ignorant. I will not reveal the troubling things inside me, which I can call your grief as well.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What are you saying? Do you know and will not say? Do you intend to betray me and destroy the city?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I will cause neither me nor you distress. Why do you vainly question me like this? You will not learn a thing from me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You most disgraceful of disgraceful men! You’d move something made of stone to rage!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Will you not speak out? Will your stubbornness never have an end?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>You blame my temper, but do not see the one which lives within you. Instead, you are finding fault with me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What man who listened to these words of yours would not be enraged—you insult the city!</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Yet events will still unfold, for all my silence.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Since they will come, you must inform me.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I will say nothing more. Fume on about it, if you wish, as fiercely as you can.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I will. In my anger I will not conceal just what I make of this. You should know I get the feeling you conspired in the act, and played your part, as much as you could do, short of killing him with your own hands. If you could use your eyes, I would have said that you had done this work all by yourself.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Is that so? Then I would ask you to stand by the very words which you yourself proclaimed and from now on not speak to me or these men. For the accursed polluter of this land is you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You dare to utter shameful words like this? Do you think you can get away with it?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I am getting away with it. The truth within me makes me strong.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Who taught you this? It could not have been your craft.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>You did. I did not want to speak, but you incited me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What do you mean? Speak it again, so I can understand you more precisely.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Did you not grasp my words before, or are you trying to test me with your question?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I did not fully understand your words. Tell me again.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I say that you yourself are the very man you’re looking for.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That’s twice you’ve stated that disgraceful lie—something you’ll regret.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Shall I tell you more, so you can grow even more enraged?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>As much as you desire. It will be useless.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I say that with your dearest family, unknown to you, you are living in disgrace. You have no idea how bad things are.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Do you really think you can just speak out, say things like this, and still remain unpunished?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Yes, I can, if the truth has any strength.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>It does, but not for you. Truth is not in you—for your ears, your mind, your eyes are blind!</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>You are a wretched fool to use harsh words which all men soon enough will use to curse you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You live in endless darkness of the night, so you can never injure me or any man who can glimpse daylight.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>It is not your fate to fall because of me. It’s up to Apollo to make that happen. He will be enough.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Is this something Creon has devised, or is it your invention?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Creon is no threat. You have made this trouble on your own.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>O riches, ruling power, skill after skill surpassing all in this life’s rivalries, how much envy you must carry with you, if, for this kingly office, which the city gave me, for I did not seek it out, Creon, my old trusted family friend, has secretly conspired to overthrow me and paid off a double-dealing quack like this, a crafty bogus priest, who can only see his own advantage, who in his special art is absolutely blind. Come on, tell me how you have ever given evidence of your wise prophecy. When the Sphinx, that singing bitch, was here, you said nothing to set the people free. Why not? Her riddle was not something the first man to stroll along could solve—a prophet was required. And there the people saw your knowledge was no use—nothing from birds or picked up from the gods. But then I came, Oedipus, who knew nothing. Yet I finished her off, using my wits rather than relying on birds. That’s the man you want to overthrow, hoping, no doubt, to stand up there with Creon, once he’s king. But I think you and your conspirator in this will regret trying to usurp the state. If you did not look so old, you’d find the punishment your arrogance deserves.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>To us it sounds as if Teiresias has spoken in anger, and, Oedipus, you have done so, too. That’s not what we need. Instead we should be looking into this: How can we best carry out the god’s decree?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>You may be king, but I have the right to answer you—and I control that right, for I am not your slave. I serve Apollo, and thus will never stand with Creon, signed up as his man. So I say this to you, since you have chosen to insult my blindness—you have your eyesight, and you do not see how miserable you are, or where you live, or who it is who shares your household. Do you know the family you come from? Without your knowledge you’ve become the enemy of your own kindred, those in the world below and those up here, and the dreadful feet of that two-edged curse.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>from father and mother both will drive you from this land in exile. Those eyes of yours, which now can see so clearly, will be dark. What harbour will not echo with your cries? Where on Cithaeron will they not soon be heard, once you have learned the truth about the wedding by which you sailed into this royal house—a lovely voyage, but the harbour’s doomed? You’ve no idea of the quantity of other troubles which will render you and your own children equals. So go on—keep insulting Creon and my prophecies, for among all living mortals no one will be destroyed more wretchedly than you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Must I tolerate this insolence from him? Get out, and may the plague get rid of you! Off with you! Now! Turn your back and go! And don’t come back here to my home again.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I would not have come, but you summoned me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I did not know you would speak so stupidly. If I had, you would have waited a long time before I called you here.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I was born like this. You think I am a fool, but to your parents, the ones who made you, I was wise enough.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Wait! My parents? Who was my father?</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>This day will reveal that and destroy you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Everything you speak is all so cryptic—like a riddle.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>Well, in solving riddles, are you not the best there is?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Mock my excellence, but you will find out I am truly great.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>That quality of yours now ruins you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I do not care, if I have saved the city.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I will go now. Boy, lead me away.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Yes, let him guide you back. You’re in the way. If you stay, you’ll just provoke me. Once you’re gone, you won’t annoy me further.</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>I’m going. But first I shall tell you why I came. I do not fear the face of your displeasure—there is no way you can destroy me. I tell you, the man you have been seeking all this time, while proclaiming threats and issuing orders about the one who murdered Laius—that man is here. According to reports, he is a stranger who lives here in Thebes. But he will prove to be a native Theban. From that change he will derive no pleasure. He will be blind, although he now can see. He will be a poor, although he now is rich. He will set off for a foreign country,</p>
    </section>

    <section>
    <p className="font-bold">TEIRESIAS:</p>
    <p>groping the ground before him with a stick. And he will turn out to be the brother of the children in his house—their father, too, both at once, and the husband and the son of the very woman who gave birth to them. He sowed the same womb as his father and murdered him. Go in and think on this. If you discover I have spoken falsely, you can say I lack all skill in prophecy.</p>
    </section>

    <section>
    <p className="font-bold">[Exit TEIRESIAS led off by the BOY. OEDIPUS turns and goes back into the palace]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>Speaking from the Delphic rock the oracular voice intoned a name. But who is the man, the one who with his blood-red hands has done unspeakable brutality? The time has come for him to flee—to move his powerful foot more swiftly than those hooves on horses riding on the storm. Against him Zeus’ son now springs, armed with lightning fire and leading on the inexorable and terrifying Furies.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>From the snowy peaks of Mount Parnassus the message has just flashed, ordering all to seek the one whom no one knows. Like a wild bull he wanders now, hidden in the untamed wood, through rocks and caves, alone with his despair on joyless feet, keeping his distance from that doom uttered at earth’s central naval stone. But that fatal oracle still lives, hovering above his head forever.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>That wise interpreter of prophecies stirs up my fears, unsettling dread. I cannot approve of what he said and I cannot deny it. I am confused. What shall I say? My hopes flutter here and there, with no clear glimpse of past or future. I have never heard of any quarrelling, past or present, between those two, the house of Labdacus and Polybus’ son, which could give me evidence enough to undermine the fame of Oedipus, as he seeks vengeance for the unsolved murder for the family of Labdacus.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>Apollo and Zeus are truly wise—they understand what humans do. But there is no sure way to ascertain if human prophets grasp things any more than I do, although in wisdom one man...</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>may leave another far behind. But until I see the words confirmed, I will not approve of any man who censures Oedipus, for it was clear when that winged Sphinx went after him he was a wise man then. We witnessed it. He passed the test and endeared himself to all the city. So in my thinking now he never will be guilty of a crime.</p>
    </section>

    <section>
    <p className="font-bold">[Enter CREON]</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>You citizens, I have just discovered that Oedipus, our king, has levelled charges against me, disturbing allegations. That I cannot bear, so I have come here. In these present troubles, if he believes that he has suffered any injury from me, in word or deed, then I have no desire to continue living into ripe old age still bearing his reproach. For me the injury produced by this report is no single isolated matter—no, it has the greatest scope of all, if I end up being called a wicked man here in the city, a bad citizen, by you and by my friends.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Perhaps he charged you spurred on by the rash power of his rage, rather than his mind’s true judgment.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Was it publicized that my opinions convinced Teiresias to utter lies?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>That’s what was said. I have no idea just what that meant.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Did he accuse me and announce the charges with a steady gaze, in a normal state of mind?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>I do not know. What those in power do I do not see. But he’s approaching from the palace—here he comes in person.</p>
    </section>

    <section>
    <p className="font-bold">[Enter OEDIPUS from the palace]</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You! How did you get here? Has your face grown so bold you now come to my own home—you who are obviously the murderer of the man whose house it was, a thief who clearly wants to steal my throne? Come, in the name of all the gods, tell me this—did you plan to do it because you thought I was a coward or a fool? Or did you think I would not learn about your actions as they crept up on me with such deceit—or that, if I knew, I could not deflect them? This attempt of yours, is it not madness—to chase after the king’s place without friends, without a horde of men, to seek a goal which only gold or factions could attain?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Will you listen to me? It’s your turn now to hear me make a suitable response. Once you know, then judge me for yourself.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You are a clever talker. But from you I will learn nothing. I know you now—a troublemaker, an enemy of mine.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>At least first listen to what I have to say.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>There’s one thing you do not have to tell me—you have betrayed me.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>If you think being stubborn and forgetting common sense is wise, then you’re not thinking as you should.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And if you think you can act to injure a man who is a relative of yours and escape without a penalty then you’re not thinking as you should.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I agree. What you’ve just said makes sense. So tell me the nature of the damage you claim you’re suffering because of me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Did you or did you not persuade me to send for Teiresias, that prophet?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Yes. And I’d still give you the same advice.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>How long is it since Laius… [pauses]</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Did what? What’s Laius got to do with anything?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>… since Laius was carried off and disappeared, since he was killed so brutally?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>That was long ago—many years have passed since then.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>At that time, was Teiresias as skilled in prophecy?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Then, as now, he was honoured for his wisdom.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And back then did he ever mention me?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>No, never—not while I was with him.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Did you not investigate the killing?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Yes, of course we did. But we found nothing.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Why did this man, this wise man, not speak up?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I do not know. And when I don’t know something, I like to keep my mouth shut.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You know enough—at least you understand enough to say …</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>What? If I really do know something I will not deny it.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If Teiresias were not working with you, he would not name me as the one who murdered Laius.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>If he says this, well, you’re the one who knows. But I think the time has come for me to question you the way that you’ve been questioning me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Ask all you want. You’ll not prove that I’m the murderer.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Then tell me this—are you not married to my sister?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Since you ask me, yes. I don’t deny that.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>And you two rule this land as equals?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Whatever she desires, she gets from me.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>And am I not third, equal to you both?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That’s what makes your friendship so deceitful.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>No, not if you think this through, as I do. First, consider this. In your view, would anyone prefer to rule and have to cope with fear rather than live in peace, carefree and safe, if his powers were the same? I, for one, have no natural desire to be king in preference to performing royal acts. The same is true of any other man whose understanding grasps things properly.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>For now I get everything I want from you, but without the fear. If I were king myself, I’d be doing many things against my will. So how can being a king be sweeter to me than royal power without anxiety? I am not yet so mistaken in my mind that I want things which bring no benefits. Now I greet all men, and they all welcome me. Those who wish to get something from you now flatter me, since I’m the one who brings success in what they want. So why would I give up such benefits for something else?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>A mind that’s wise will not turn treacherous. It’s not my nature to love such policies. And if another man pursued such things, I’d not work with him. I couldn’t bear to. If you want proof of this, then go to Delphi. Ask the prophet if I brought back to you exactly what was said. At that point, if you discover I have planned something, that I’ve conspired with Teiresias, then arrest me and have me put to death, not just on your own authority, but on mine as well, a double judgment.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Do not condemn me on an unproved charge. It's not fair to judge these things by guesswork, to assume bad men are good or good men bad. In my view, to throw away a noble friend is like a man who parts with his own life, the thing most dear to him. Give it some time. Then you’ll see clearly, since only time can fully validate a man who’s true. A bad man is exposed in just one day.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>For a man concerned about being killed, my lord, he has spoken eloquently. Those who are unreliable give rash advice.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If some conspirator moves against me, in secret and with speed, I must be quick to make my counter plans. If I just rest and wait for him to act, then he’ll succeed in what he wants to do, and I’ll be finished.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>What do you want—to exile me from here?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>No. I want you to die, not just run off—so I can demonstrate what envy means.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>You are determined not to change your mind or listen to me?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You’ll not convince me, for there’s no way that I can trust you.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I can see that you’ve become unbalanced.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I’m sane enough to defend my interests.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>You should be protecting mine as well.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But you’re a treacherous man. It’s your nature.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>What if you are wrong?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I still have to govern.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Not if you do it badly.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Oh Thebes—my city!</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I have some rights in Thebes as well—it is not yours alone.</p>
    </section>

    <section>
    <p className="font-bold">[The palace doors open]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>My lords, an end to this. I see Jocasta coming from the palace, and just in time. With her assistance you should bring this quarrel to a close.</p>
    </section>

    <section>
    <p className="font-bold">[Enter JOCASTA from the palace]</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>You foolish men, why are you arguing in such a silly way? With our land so sick, are you not ashamed to start a private fight? You, Oedipus, go in the house, and you, Creon, return to yours. Why blow up a trivial matter into something huge?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Sister, your husband Oedipus intends to punish me in one of two dreadful ways—to banish me from my fathers’ country or arrest me and then have me killed.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That’s right. Lady, I caught him committing treason, conspiring against my royal authority.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Let me not prosper but die a man accursed, if I have done what you accuse me of.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Oedipus, for the sake of the gods, trust him in this. Respect that oath he made before all heaven—do it for my sake and for those around you.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>I beg you, my lord, consent to this—agree with her.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What is it then you’re asking me to do?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Pay Creon due respect. He has not been foolish in the past, and now that oath he’s sworn has power.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Are you aware just what you’re asking?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Yes. I understand.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Then tell me exactly what you’re saying.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>You should not accuse a friend of yours and thus dishonour him with a mere story which may not be true, when he’s sworn an oath and therefore could be subject to a curse.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>By this point you should clearly understand, when you request this, what you are doing—seeking to exile me from Thebes or kill me.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>No, no, by sacred Helios, the god whose stands pre-eminent before the rest, may I die the most miserable of deaths, abandoned by the gods and by my friends, if I have ever harboured such a thought! But the destruction of our land wears down the troubled heart within me—and so does this, if you two add new problems to the ones which have for so long been afflicting us.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Let him go, then, even though it’s clear I must be killed or sent from here in exile, forced out in disgrace. I have been moved to act compassionately by what you said, not by Creon’s words. But if he stays here, he will be hateful to me.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>You are obstinate—obviously unhappy to concede, and when you lose your temper, you go too far. But men like that find it most difficult to tolerate themselves. In that there’s justice.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Why not go—just leave me alone?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I’ll leave—since I see you do not understand me. But these men here know I’m a reasonable man.</p>
    </section>

    <section>
    <p className="font-bold">[Exit CREON away from the palace, leaving OEDIPUS and JOCASTA and the CHORUS on stage]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Lady, will you escort our king inside?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Yes, once I have learned what happened here.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>They talked—their words gave rise to uninformed suspicions, an all-consuming lack of proper justice.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>From both of them?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Yes.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What caused it?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>With our country already in distress, it is enough, it seems to me, enough to leave things as they are.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Now do you see the point you’ve reached thanks to your noble wish to dissolve and dull my firmer purpose?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>My lord, I have declared it more than once, so you must know it would have been quite mad if I abandoned you, who, when this land, my cherished Thebes, was in great trouble, set it right again and who, in these harsh times which now consume us, should prove a trusty guide.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>By all the gods, my king, let me know why in this present crisis you now feel such unremitting rage.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>To you I’ll speak, lady, since I respect you more than I do these men. It’s Creon’s fault. He conspired against me.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>In this quarrel what was said? Tell me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Creon claims that I’m the murderer—that I killed Laius.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Does he know this first hand, or has he picked it up from someone else?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>No. He set up that treasonous prophet. What he says himself sounds innocent.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>All right, forget about those things you’ve said. Listen to me, and ease your mind with this—no human being has skill in prophecy. I’ll show you why with this example. King Laius once received a prophecy. I won’t say it came straight from Apollo, but it was from those who do assist the god. It said Laius was fated to be killed by a child conceived by him and me. Now, at least according to the story, one day Laius was killed by foreigners, by robbers, at a place where three roads meet. Besides, before our child was three days old, Laius fused his ankles tight together and ordered other men to throw him out on a mountain rock where no one ever goes. And so Apollo’s plan that he’d become the one who killed his father didn’t work, and Laius never suffered what he feared, that his own son would be his murderer, although that’s what the oracle had claimed. So don’t concern yourself with prophecies. Whatever gods intend to bring about they themselves make known quite easily.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Lady, as I listen to these words of yours, my soul is shaken, my mind confused …</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Why do you say that? What’s worrying you?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I thought I heard you say that Laius was murdered at a place where three roads meet.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>That’s what was said and people still believe.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Where is this place? Where did it happen?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>In a land called Phocis. Two roads lead there—one from Delphi and one from Daulia.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>How long is it since these events took place?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>The story was reported in the city just before you took over royal power here in Thebes.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Oh Zeus, what have you done? What have you planned for me?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What is it, Oedipus? Why is your spirit so troubled?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Not yet, no questions yet. Tell me this—Laius, how tall was he? How old a man?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>He was big—his hair was turning white. In shape he was not all that unlike you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>The worse for me! I may have just set myself under a dreadful curse without my knowledge!</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What do you mean? As I look at you, my king, I start to tremble.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I am afraid, full of terrible fears the prophet sees. But you can reveal this better if you now will tell me one thing more.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>I’m shaking, but if you ask me, I will answer you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Did Laius have a small escort with him or a troop of soldiers, like a royal king?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Five men, including a herald, went with him. A carriage carried Laius.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Alas! Alas! It’s all too clear! Lady, who told you this?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>A servant—the only one who got away. He came back here.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Is there any chance he’s in our household now?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>No. Once he returned and understood that you had now assumed the power of slaughtered Laius, he clasped my hands, begged me to send him off to where our animals graze out in the fields, so he could be as far away as possible from the sight of town. And so I sent him. He was a slave but he'd earned my gratitude. He deserved an even greater favour.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I’d like him to return back here to us, and quickly, too.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>That can be arranged—but why’s that something you would want to do?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Lady, I’m afraid I may have said too much. That’s why I want to see him here in front of me.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Then he will be here. But now, my lord, I deserve to learn why you are so distressed.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>My forebodings now have grown so great I will not keep them from you, for who is there I should confide in rather than in you about such a twisted turn of fortune. My father was Polybus of Corinth, my mother Merope, a Dorian. There I was regarded as the finest man in all the city, until, as chance would have it, something really astonishing took place, though it was not worth what it caused me to do. At a dinner there a man who was quite drunk from too much wine began to shout at me, claiming I was not my father’s real son. That troubled me, but for a day at least I said nothing, though it was difficult. The next day I went to ask my parents, my father and my mother. They were angry at the man who had insulted them this way, so I was reassured. But nonetheless, the accusation always troubled me—the story had become well known all over. And so I went in secret off to Delphi. I didn’t tell my mother or my father. Apollo sent me back without an answer, so I didn’t learn what I had come to find. But when he spoke he uttered monstrous things, strange terrors and horrific miseries—it was my fate to defile my mother’s bed, to bring forth to men a human family that people could not bear to look upon, to murder the father who engendered me. When I heard that, I ran away from Corinth. From then on I thought of it just as a place beneath the stars. I went to other lands, so I would never see that prophecy fulfilled, the abomination of my evil fate.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Why do you say that? What’s worrying you?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I thought I heard you say that Laius was murdered at a place where three roads meet.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>That’s what was said and people still believe.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Where is this place? Where did it happen?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>In a land called Phocis. Two roads lead there—one from Delphi and one from Daulia.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>How long is it since these events took place?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>The story was reported in the city just before you took over royal power here in Thebes.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Oh Zeus, what have you done? What have you planned for me?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What is it, Oedipus? Why is your spirit so troubled?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Not yet, no questions yet. Tell me this—Laius, how tall was he? How old a man?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>He was big—his hair was turning white. In shape he was not all that unlike you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>The worse for me! I may have just set myself under a dreadful curse without my knowledge!</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What do you mean? As I look at you, my king, I start to tremble.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I am afraid, full of terrible fears the prophet sees. But you can reveal this better if you now will tell me one thing more.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>I’m shaking, but if you ask me, I will answer you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Did Laius have a small escort with him or a troop of soldiers, like a royal king?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Five men, including a herald, went with him. A carriage carried Laius.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Alas! Alas! It’s all too clear! Lady, who told you this?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>A servant—the only one who got away. He came back here.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Is there any chance he’s in our household now?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>No. Once he returned and understood that you had now assumed the power of slaughtered Laius, he clasped my hands, begged me to send him off to where our animals graze out in the fields, so he could be as far away as possible from the sight of town. And so I sent him. He was a slave but he'd earned my gratitude. He deserved an even greater favour.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I’d like him to return back here to us, and quickly, too.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>That can be arranged—but why’s that something you would want to do?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Lady, I’m afraid I may have said too much. That’s why I want to see him here in front of me.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Then he will be here. But now, my lord, I deserve to learn why you are so distressed.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>My forebodings now have grown so great I will not keep them from you, for who is there I should confide in rather than in you about such a twisted turn of fortune. My father was Polybus of Corinth, my mother Merope, a Dorian. There I was regarded as the finest man in all the city, until, as chance would have it, something really astonishing took place, though it was not worth what it caused me to do.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>At a dinner there a man who was quite drunk from too much wine began to shout at me, claiming I was not my father’s real son. That troubled me, but for a day at least I said nothing, though it was difficult. The next day I went to ask my parents, my father and my mother. They were angry at the man who had insulted them this way, so I was reassured. But nonetheless, the accusation always troubled me—the story had become well known all over.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And so I went in secret off to Delphi. I didn’t tell my mother or my father. Apollo sent me back without an answer, so I didn’t learn what I had come to find. But when he spoke he uttered monstrous things, strange terrors and horrific miseries—it was my fate to defile my mother’s bed, to bring forth to men a human family that people could not bear to look upon, to murder the father who engendered me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When I heard that, I ran away from Corinth. From then on I thought of it just as a place beneath the stars. I went to other lands, so I would never see that prophecy fulfilled, the abomination of my evil fate. In my travelling I came across that place in which you say your king was murdered. And now, lady, I will tell you the truth.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>As I was on the move, I passed close by a spot where three roads meet, and in that place I met a herald and a horse-drawn carriage. Inside there was a man like you described. The guide there tried to force me off the road—and the old man, too, got personally involved.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>In my rage, I lashed out at the driver, who was shoving me aside. The old man, seeing me walking past him in the carriage, kept his eye on me, and with his double whip struck me on my head, right here on top. Well, I retaliated in good measure—I hit him a quick blow with the staff I held and knocked him from his carriage to the road. He lay there on his back. Then I killed them all.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If that stranger was somehow linked to Laius, who is now more unfortunate than me? What man could be more hateful to the gods? No stranger and no citizen can welcome him into their lives or speak to him. Instead, they must keep him from their doors, a curse I laid upon myself.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>With these hands of mine, these killer’s hands, I now contaminate the dead man’s bed. Am I not depraved? Am I not utterly abhorrent? Now I must fly into exile and there, a fugitive, never see my people, never set foot in my native land again—or else I must get married to my mother and kill my father, Polybus, who raised me, the man who gave me life. If anyone claimed this came from some malevolent god, would he not be right?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>O you gods, you pure, blessed gods, may I not see that day! Let me rather vanish from the sight of men, before I see a fate like that roll over me.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>My lord, to us these things are ominous. But you must sustain your hope until you hear the servant who was present at the time.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I do have some hope left, at least enough to wait for the man we’ve summoned from the fields.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Once he comes, what do you hope to hear?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I’ll tell you. If we discover what he says matches what you say, then I’ll escape disaster.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What was so remarkable in what I said?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You said that in his story the man claimed Laius was murdered by a band of thieves. If he still says that there were several men, then I was not the killer, since one man could never be mistaken for a crowd. But if he says it was a single man, then I’m the one responsible for this.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Well, that’s certainly what he reported then. He cannot now withdraw what he once said. The whole city heard him, not just me alone.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>But even if he changes that old news, he cannot ever demonstrate, my lord, that Laius’ murder fits the prophecy. For Apollo clearly said the man would die at the hands of an infant born from me. Now, how did that unhappy son of ours kill Laius, when he’d perished long before? So as far as these oracular sayings go, I would not look for confirmation anywhere.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You’re right in what you say. But nonetheless, send for that peasant. Don’t fail to do that.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>I’ll call him here as quickly as I can. Let’s go inside. I’ll not do anything which does not meet with your approval.</p>
    </section>

    <section>
    <p className="font-bold">[OEDIPUS and JOCASTA go into the palace together]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>I pray fate still finds me worthy, demonstrating piety and reverence in all I say and do—in everything our loftiest traditions consecrate, those laws engendered in the heavenly skies, whose only father is Olympus. They were not born from mortal men, nor will they sleep and be forgotten. In them lives an ageless mighty god.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>Insolence gives birth to tyranny—that insolence which vainly crams itself and overflows with so much stuff beyond what’s right or beneficial, that once it’s climbed the highest rooftop,</p>
    </section>

    <section>
    <p>It’s hurled down by force—such a quick fall there’s no safe landing on one’s feet. But I pray the god never will abolish the rivalry so beneficial to our state. That god I will hold on to always, the one who stands as our protector.</p>
    </section>

    <section>
    <p>But if a man conducts himself disdainfully in what he says and does, and manifests no fear of righteousness, no reverence for the statues of the gods, may miserable fate seize such a man for his disastrous arrogance, if he does not behave with justice when he strives to benefit himself, appropriates all things impiously, and, like a fool, profanes the sacred.</p>
    </section>

    <section>
    <p>What man is there who does such things who can still claim he will ward off the arrow of the gods aimed at his heart? If such actions are considered worthy, why should we dance to honour god? No longer will I go in reverence to the sacred stone, earth’s very centre, or to the temple at Abae or Olympia, if these prophecies fail to be fulfilled and manifest themselves to mortal men.</p>
    </section>

    <section>
    <p>But you, all-conquering, all-ruling Zeus, if by right those names belong to you, let this not evade you and your ageless might. For ancient oracles which dealt with Laius are withering—men now set them aside. Nowhere is Apollo honoured publicly, and our religious faith is dying away.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>You leading men of Thebes, I think it is appropriate for me to visit our god’s sacred shrine, bearing in my hands this garland and an offering of incense. For Oedipus has let excessive pain seize on his heart and does not understand what’s happening now by thinking of the past, like a man with sense. Instead, he listens to whoever speaks to him of dreadful things.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>I can do nothing more for him with my advice, and so, Lycean Apollo, I come to you, who stand here beside us, a suppliant, with offerings and prayers for you to find some way of cleansing what corrupts us. For now we are afraid, just like those who on a ship see their helmsman terrified.</p>
    </section>

    <section>
    <p>[JOCASTA sets her offerings on the altar. A MESSENGER enters, an older man.]</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Strangers, can you tell me where I find the house of Oedipus, your king? Better yet, if you know, can you tell me where he is?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>His home is here, stranger, and he’s inside. This lady is the mother of his children.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>May her happy home always be blessed, for she is his queen, true mistress of his house.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>I wish the same for you, stranger. Your fine words make you deserve as much. But tell us now why you have come. Do you seek information, or do you wish to give us some report?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Lady, I have good news for your whole house—and for your husband, too.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What news is that? Where have you come from?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>I’ve come from Corinth. I’ll give you my report at once, and then you will, no doubt, be glad, although perhaps you will be sad, as well.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What is your news? How can it have two such effects at once?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>The people who live there, in the lands beside the Isthmus, will make him their king. They have announced it.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What are you saying? Is old man Polybus no longer king?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>No. He’s dead and in his grave.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>What? Has Oedipus’ father died?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Yes. If what I’m telling you is not the truth, then I deserve to die.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>[to a servant] You there—go at once and tell this to your master.</p>
    </section>

    <section>
    <p>[SERVANT goes into the palace]</p>
    <p>Oh, you oracles of the gods, so much for you. Oedipus has for so long been afraid that he would murder him. He ran away. Now Polybus has died, killed by fate and not by Oedipus.</p>
    </section>

    <section>
    <p className="font-bold">[Enter OEDIPUS from the palace]</p>
    <p className="font-bold">OEDIPUS:</p>
    <p>Ah, Jocasta, my dearest wife, why have you summoned me to leave our home and come out here?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>You must hear this man, and as you listen, decide for yourself what these prophecies, these solemn proclamations from the gods, amount to.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Who is this man? What report does he have for me?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>He comes from Corinth, bringing news that Polybus, your father, no longer is alive. He’s dead.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What? Stranger, let me hear from you in person.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>If I must first report my news quite plainly, then I should let you know that Polybus has passed away. He’s gone.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>By treachery, or was it the result of some disease?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>With old bodies a slight weight on the scales brings final peace.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Apparently his death was from an illness?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Yes, and from old age.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Alas! Indeed, lady, why should any man pay due reverence to Apollo’s shrine, where his prophet lives, or to those birds which scream out overhead? For they foretold that I was going to murder my own father. But now he’s dead and lies beneath the earth, and I am here. I never touched my spear. Perhaps he died from a desire to see me—so in that sense I brought about his death. But as for those prophetic oracles, they’re worthless. Polybus has taken them to Hades, where he lies.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Was I not the one who predicted this some time ago?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You did, but then I was misguided by my fears.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>You must not keep on filling up your heart with all these things.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But my mother’s bed—I am afraid of that. And surely I should be?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Why should a man whose life seems ruled by chance live in fear—a man who never looks ahead, who has no certain vision of his future? It’s best to live haphazardly, as best one can. Do not worry you will wed your mother. It’s true that in their dreams a lot of men have slept with their own mothers, but someone who ignores all this bears life more easily.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Everything you say would be commendable, if my mother were not still alive. But since she is, I must remain afraid, although what you are saying is right.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>But still, your father’s death is a great comfort to us.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Yes, it is good, I know. But I do fear that lady—she is still alive.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>This one you fear, what kind of woman is she?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Old man, her name is Merope, wife to Polybus.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>And what in her makes you so fearful?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Stranger, a dreadful prophecy sent from the god.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Is it well known? Or something private, which another person has no right to know?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>No, no. It's public knowledge. Loxias once said it was my fate that I would marry my own mother and shed my father's blood with my own hands. That's why, many years ago, I left my home in Corinth. Things turned out well, but nonetheless it gives the sweetest joy to look into the eyes of one's own parents.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>And because you were afraid of her you stayed away from Corinth?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And because I did not want to be my father's killer.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>My lord, since I came to make you happy, why don't I relieve you of this fear?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You would receive from me a worthy thanks.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>That's really why I came—so your return might prove a benefit to me back home.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But I will never go back to my parents.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>My son, it is so clear you have no idea what you are doing …</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>[interrupting] In the name of all the gods, tell me. What do you mean, old man?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>… if that's the reason you're a fugitive and won't go home.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I feared Apollo's prophecy might reveal itself in me.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>You were afraid you might become corrupted through your parents?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That's right, old man. That was my constant fear.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Are you aware these fears of yours are groundless?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And why is that? If I was born their child …</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Because you and Polybus were not related.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What do you mean? Was not Polybus my father?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>He was as much your father as this man here, no more, no less.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But how can any man who means nothing to me be the same as my own father?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>But Polybus was not your father, no more than I am.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Then why did he call me his son?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>If you must know, he received you many years ago as a gift. I gave you to him.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>He really loved me. How could he if I came from someone else?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Well, before you came, he had no children— that made him love you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When you gave me to him, had you bought me or found me by accident?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>I found you in Cithaeron's forest valleys.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What were you doing wandering up there?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>I was looking after flocks of sheep.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You were a shepherd, just a hired servant roaming here and there?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Yes, my son, I was. But at that time I was the one who saved you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>When you picked me up and took me off, what sort of suffering was I going through?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>The ankles on your feet could tell you that.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Ah, my old misfortune. Why mention that?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Your ankles had been pierced and tied together. I set them free.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>My dreadful mark of shame— I've had that scar there since I was a child.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>That's why fortune gave you your very name, the one which you still carry.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Tell me, in the name of heaven, why did my parents, my father or my mother, do this to me?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>I don't know. The man who gave you to me knows more of that than I do.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You mean to say you got me from someone else? It wasn't you who stumbled on me?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>No, it wasn't me. Another shepherd gave you to me.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Who? Who was he? Do you know? Can you tell me any details, ones you know for certain?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Well, I think he was one of Laius' servants— that's what people said.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You mean king Laius, the one who ruled this country years ago?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>That's right. He was one of the king's shepherds.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Is he still alive? Can I still see him?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>You people live here. You'd best answer that.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>[turning to the Chorus] Do any of you here now know the man, this shepherd he describes? Have you seen him, either in the fields or here in Thebes? Answer me. It's critical, time at last to find out what this means.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>The man he mentioned is, I think, the very peasant from the fields you wanted to see earlier. But of this Jocasta could tell more than anyone.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Lady, do you know the man we sent for— just minutes ago—the one we summoned here? Is he the one this messenger refers to?</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Why ask me what he means? Forget all that. There's no point in trying to sort out what he said.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>With all these indications of the truth here in my grasp, I cannot end this now. I must reveal the details of my birth.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>In the name of the gods, no! If you have some concern for your own life, then stop! Do not keep investigating this. I will suffer—that will be enough.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Be brave. Even if I should turn out to be born from a shameful mother, whose family for three generations have been slaves, you will still have your noble lineage.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Listen to me, I beg you. Do not do this.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I will not be convinced I should not learn the whole truth of what these facts amount to.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>But I care about your own well being— what I tell you is for your benefit.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What you're telling me for my own good just brings me more distress.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Oh, you unhappy man! May you never find out who you really are!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>[to Chorus] Go, one of you, and bring that shepherd here. Leave the lady to enjoy her noble family.</p>
    </section>

    <section>
    <p className="font-bold">JOCASTA:</p>
    <p>Alas, you poor miserable man! There's nothing more that I can say to you. And now I'll never speak again.</p>
    </section>

    <section>
    <p className="italic">[JOCASTA runs into the palace]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Why has the queen rushed off, Oedipus, so full of grief? I fear a disastrous storm will soon break through her silence.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Then let it break, whatever it is. As for myself, no matter how base born my family, I wish to know the seed from where I came. Perhaps my queen is now ashamed of me and of my insignificant origin— she likes to play the noble lady. But I will never feel myself dishonoured. I see myself as a child of fortune— and she is generous, that mother of mine from whom I spring, and the months, my siblings, have seen me by turns both small and great. That's how I was born. I cannot change to someone else, nor can I ever cease from seeking out the facts of my own birth.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>If I have any power of prophecy or skill in knowing things, then, by the Olympian deities, you, Cithaeron, at tomorrow's moon will surely know that Oedipus pays tribute to you as his native land both as his mother and his nurse, and that our choral dance and song acknowledge you because you are so pleasing to our king. O Phoebus, we cry out to you— may our song fill you with delight! Who gave birth to you, my child? Which one of the immortal gods bore you to your father Pan, who roams the mountainsides? Was it some daughter of Apollo, the god who loves all country fields? Perhaps Cyllene's royal king? Or was it the Bacchanalian god dwelling on the mountain tops who took you as a new-born joy from maiden nymphs of Helicon with whom he often romps and plays?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>[looking out away from the palace] You elders, although I've never seen the man we've been looking for a long time now, if I had to guess, I think I see him. He's coming here. He looks very old— as is appropriate, if he's the one. And I know the people coming with him, servants of mine. But if you've seen him before, you'll recognize him better than I will.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Yes, I recognize the man. There's no doubt. He worked for Laius—a trusty shepherd.</p>
    </section>

    <section>
    <p className="italic">[Enter SERVANT, an old shepherd]</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Stranger from Corinth, let me first ask you— is this the man you mentioned?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>Yes, he is— he's the man you see in front of you.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You, old man, over here. Look at me. Now answer what I ask. Some time ago did you work for Laius?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Yes, as a slave. But I was not bought. I grew up in his house.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>How did you live? What was the work you did?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Most of my life I've spent looking after sheep.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Where? In what particular areas?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>On Cithaeron or the neighbouring lands.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Do you know if you came across this man anywhere up there?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Doing what? What man do you mean?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>The man over here— this one. Have you ever run into him?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Right now I can't say I remember him.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>My lord, that's surely not surprising. Let me refresh his failing memory. I think he will remember all too well the time we spent around Cithaeron. He had two flocks of sheep and I had one. I was with him there for six months at a stretch, from early spring until the autumn season. In winter I'd drive my sheep down to my folds, and he'd take his to pens that Laius owned. Isn't that what happened—what I've just said?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>You spoke the truth. But it was long ago.</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>All right, then. Now, tell me if you recall how you gave me a child, an infant boy, for me to raise as my own foster son.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>What? Why ask about that?</p>
    </section>

    <section>
    <p className="font-bold">MESSENGER:</p>
    <p>This man here, my friend, was that young child back then.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Damn you! Can't you keep quiet about it!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Hold on, old man. Don't criticize him. What you have said is more objectionable than his account.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>My noble master, what have I done wrong?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You did not tell us of that infant boy, the one he asked about.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>That's what he says, but he knows nothing—a useless busybody.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If you won't tell us of your own free will, once we start to hurt you, you will talk.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>By all the gods, don't torture an old man!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>One of you there, tie up this fellow's hands.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Why are you doing this? It's too much for me! What is it you want to know?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That child he mentioned— did you give it to him?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>I'd died that day! I did. How I wish</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Well, you're going to die if you don't speak the truth.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>And if I do, there's an even greater chance that I'll be killed.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>It seems to me the man is trying to stall.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>No, no, I'm not. I've already told you— I did give him the child.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Where did you get it? Did it come from your home or somewhere else?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>It was not mine—I got it from someone.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Which of our citizens? Whose home was it?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>In the name of the gods, my lord, don't ask! Please, no more questions!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If I have to ask again, then you will die.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>The child was born in Laius' house.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>From a slave or from some relative of his?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Alas, what I'm about to say now … it's horrible.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>And I'm about to hear it. But nonetheless I have to know this.</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>If you must know, they said the child was his. But your wife inside the palace is the one who could best tell you what was going on.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>You mean she gave the child to you?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Yes, my lord.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Why did she do that?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>So I would kill it.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>That wretched woman was the mother?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>Yes. She was afraid of dreadful prophecies.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What sort of prophecies?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>The story went that he would kill his father.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>If that was true, why did you give the child to this old man?</p>
    </section>

    <section>
    <p className="font-bold">SERVANT:</p>
    <p>I pitied the boy, master, and I thought he'd take the child off to a foreign land where he was from. But he rescued him, only to save him for the greatest grief of all. For if you're the one this man says you are you know your birth carried an awful fate.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Ah, so it all came true. It's so clear now. O light, let me look at you one final time, a man who stands revealed as cursed by birth, cursed by my own family, and cursed by murder where I should not kill.</p>
    </section>

    <section>
    <p className="italic">[OEDIPUS moves into the palace]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>O generations of mortal men, how I count your life as scarcely living. What man is there, what human being, who attains a greater happiness than mere appearances, a joy which seems to fade away to nothing? Poor wretched Oedipus, your fate stands here to demonstrate for me how no mortal man is ever blessed. Here was a man who fired his arrows well— his skill was matchless—and he won the highest happiness in everything. For, Zeus, he slaughtered the hook-taloned Sphinx and stilled her cryptic song. For our state, he stood there like a tower against death, and from that moment, Oedipus, we have called you our king and honoured you above all other men, the one who rules in mighty Thebes. But now who is there whose story is more terrible to hear? Whose life has been so changed by trouble, by such ferocious agonies? Alas, for celebrated Oedipus, the same spacious place of refuge served you both as child and father, the place you entered as a new bridegroom. How could the furrow where your father planted, poor wretched man, have tolerated you in such silence for so long? Time, which watches everything and uncovered you against your will, now sits in judgment of that fatal marriage, where child and parent have been joined so long. O child of Laius, how I wish I'd never seen you—now I wail like one whose mouth pours forth laments. To tell it right, it was through you I found my life and breathed again, and then through you my eyesight failed.</p>
    </section>

    <section>
    <p className="italic">[The Second Messenger enters from the palace]</p>
    </section>

    <section>
    <p className="font-bold">SECOND MESSENGER:</p>
    <p>O you most honoured citizens of Thebes, what actions you will hear about and see, what sorrows you will bear, if, as natives here, you are still loyal to the house of Labdacus! I do not think the Ister or the Phasis rivers could cleanse this house. It conceals too much and soon will bring to light the vilest things, brought on by choice and not by accident. What we do to ourselves brings us most pain.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>The calamities we knew about before were hard enough to bear. What can you say to make them worse?</p>
    </section>

    <section>
    <p className="font-bold">SECOND MESSENGER:</p>
    <p>I'll waste no words— know this—noble Jocasta, our queen, is dead.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>That poor unhappy lady! How did she die?</p>
    </section>

    <section>
    <p className="font-bold">SECOND MESSENGER:</p>
    <p>She killed herself. You did not see it, so you'll be spared the worst of what went on. But from what I recall of what I saw you'll learn how that poor woman suffered. She left here frantic and rushed inside, fingers on both hands clenched in her hair. She ran through the hall straight to her marriage bed. She went in, slamming both doors shut behind her and crying out to Laius, who's been a corpse a long time now. She was remembering that child of theirs born many years ago— the one who killed his father, who left her to conceive cursed children with that son. She lay moaning by the bed, where she, poor woman, had given birth twice over— a husband from a husband, children from a child. How she died after that I don't fully know. With a scream Oedipus came bursting in. He would not let us see her suffering, her final pain. We watched him charge around, back and forth. As he moved, he kept asking us to give him a sword, as he tried to find that wife who was no wife—whose mother's womb had given birth to him and to his children. As he raved, some immortal power led him on— no human in the room came close to him. With a dreadful howl, as if someone had pushed him, he leapt at the double doors, bent the bolts by force out of their sockets, and burst into the room. Then we saw her. She was hanging there, swaying, with twisted cords roped round her neck. When Oedipus saw her, with a dreadful groan he took her body out of the noose in which she hung, and then, when the poor woman was lying on the ground— what happened next was a horrific sight— from her clothes he ripped the golden brooches she wore as ornaments, raised them high, and drove them deep into his eyeballs, crying as he did so: "You will no longer see all those atrocious things I suffered, the dreadful things I did! No. You have seen those you never should have looked upon, and those I wished to know you did not see. So now and for all future time be dark!" With these words he raised his hand and struck, not once, but many times, right in the sockets. With every blow blood spurted from his eyes down on his beard, and not in single drops, but showers of dark blood spattered like hail.</p>
    </section>

    <section>
    <p className="font-bold">SECOND MESSENGER:</p>
    <p>So what these two have done has overwhelmed not one alone—this disaster swallows up a man and wife together. That old happiness they had before in their rich ancestry was truly joy, but now lament and ruin, death and shame, and all calamities which men can name are theirs to keep.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>And has that suffering man found some relief to ease his pain?</p>
    </section>

    <section>
    <p className="font-bold">SECOND MESSENGER:</p>
    <p>He shouts at everyone to open up the gates and thus reveal to all Cadmeians his father's killer, his mother's … but I must not say those words. He wants them to cast him out of Thebes, so the curse he laid will not come on this house if he still lives inside. But he is weak and needs someone to lead him on his way. His agony is more than he can bear— as he will show you—for on the palace doors the bolts are being pulled back. Soon you will see a sight which even a man filled with disgust would have to pity.</p>
    </section>

    <section>
    <p className="italic">[OEDIPUS enters through the palace doors]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>An awful fate for human eyes to witness, an appalling sight—the worst I've ever seen. O you poor man, what madness came on you? What eternal force pounced on your life and, springing further than the longest leap, brought you this awful doom? Alas! Alas! You unhappy man! I cannot look at you. I want to ask you many things—there's much I wish to learn. You fill me with such horror, yet there is so much I must see.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Aaaiiii, aaaiii … Alas! Alas! How miserable I am … such wretchedness … Where do I go? How can the wings of air sweep up my voice? Oh my destiny, how far you have sprung now!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>To a fearful place from which men turn away, a place they hate to look upon.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>O the dark horror wrapped around me, this nameless visitor I can't resist swept here by fair and fatal winds. Alas for me! And yet again, alas for me! The agony of stabbing brooches pierces me! The memory of aching shame!</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>In your distress it's not astonishing you bear a double load of suffering, a double load of pain.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Ah, my friend, so you still care for me, as always, and with patience nurse me now I'm blind. Alas! Alas! You are not hidden from me— I recognize you all too clearly. Though I am blind, I know that voice so well.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>You have carried out such dreadful things— how could you dare to blind yourself this way? What god drove you to it?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>It was Apollo, friends, it was Apollo. He brought on these troubles— the awful things I suffer. But the hand which stabbed out my eyes was mine alone. In my wretched life, why should I have eyes when nothing I could see would bring me joy?</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>What you have said is true enough.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What is there for me to see, my friends? What can I love? Whose greeting can I hear and feel delight? Hurry now, my friends, lead me away from Thebes—take me somewhere, a man completely lost, utterly accursed, the mortal man the gods despise the most.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Unhappy in your fate and in your mind which now knows all. Would I had never known you!</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Whoever the man is who freed my feet, who released me from that cruel shackle and rescued me from death, may that man die! It was a thankless act. Had I perished then, I would not have brought such agony to myself or to my friends.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>I agree— I would have preferred your death, as well.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I would not have come to kill my father, and men would not see in me the husband of the woman who gave birth to me. Now I am abandoned by the gods, the son of a corrupted mother, conceiving children with the woman who gave me my own miserable life. If there is some suffering more serious than all the rest, then it too belongs in the fate of Oedipus.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>I do not believe what you did to yourself is for the best. Better to be dead than alive and blind.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Don't tell me what I've done is not the best. And from now on spare me your advice. If I could see, I don't know how my eyes could look at my own father when I come to Hades or could see my wretched mother. Against those two I have committed acts so vile that even if I hanged myself that would not be sufficient punishment. Perhaps you think the sight of my own children might give me joy? No! Look how they were born! They could never bring delight to eyes of mine. Nor could the city or its massive walls, or the sacred images of its gods. I am the most abhorred of men, I, the finest one of all those bred in Thebes, I have condemned myself, telling everyone they had to banish for impiety the man the gods have now exposed as sacrilegious—a son of Laius, too. With such polluting stains upon me, could I set eyes on you and hold your gaze? No. And if I could somehow block my ears and kill my hearing, I would not hold back. I'd make a dungeon of this wretched body, so I would never see or hear again. For there is joy in isolated thought, sealed off from a world of sorrow. O Cithaeron, why did you shelter me? Why, when I was handed over to you, did you not do away with me at once, so I would never then reveal to men the nature of my birth? Ah Polybus, and Corinth, the place men called my home, my father's ancient house, you raised me well— so fine to look at, so corrupt inside! Now I've been exposed as something bad, contaminated in my origins. Oh you three roads and hidden forest grove, you thicket and defile where three paths meet, you who swallowed down my father's blood from my own hands, do you remember me, what I did there in front of you and then what else I did when I came here to Thebes? Ah, you marriage rites—you gave birth to me, and then when I was born, you gave birth again, children from the child of that same womb, creating an incestuous blood family of fathers, brothers, children, brides, wives and mothers—the most atrocious act that human beings commit! But it is wrong to talk about what it is wrong to do, so in the name of all the gods, act quickly— hide me somewhere outside the land of Thebes, or slaughter me, or hurl me in the sea, where you will never gaze on me again. Come, allow yourself to touch a wretched man. Listen to me, and do not be afraid— for this disease infects no one but me.</p>
    </section>

    <section>
    <p className="font-bold">CHORUS LEADER:</p>
    <p>Creon is coming. He is just in time to plan and carry out what you propose. With you gone he's the only one who's left to act as guardian of Thebes.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Alas, how will I talk to him? How can I ask him to put his trust in me? Not long ago I treated him with such contempt.</p>
    </section>

    <section>
    <p className="italic">[Enter Creon]</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Oedipus, I have not come here to mock or blame you for disasters in the past. But if you can no longer value human beings, at least respect our lord the sun, whose light makes all things grow, and do not put on show pollution of this kind in such a public way, for neither earth nor light nor sacred rain can welcome such a sight.</p>
    </section>

    <section>
    <p className="italic">[Creon speaks to the attending servants]</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Take him inside the house as quickly as you can. The kindest thing would be for members of his family to be the only ones to see and hear him.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>By all the gods, since you are acting now so differently from what I would expect and have come here to treat me graciously, the very worst of men, do what I ask. I will speak for your own benefit, not mine.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>What are you so keen to get from me?</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Cast me out as quickly as you can, away from Thebes, to a place where no one, no living human being, will cross my path.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>That is something I could do, of course, but first I wish to know what the god says about what I should do.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But what he said was all so clear—the man who killed his father must be destroyed. And that corrupted man is me.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Yes, that is what was said. But now, with things the way they are, the wisest thing is to ascertain quite clearly what to do.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Will you then be making a request on my behalf when I am so depraved?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I will. For even you must now trust in the gods.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Yes, I do. And I have a task for you as I make this plea—that woman in the house, please bury her as you see fit. You are the one to give your own the proper funeral rites. But never let my father's city be condemned to have me living here while I still live. Let me make my home up in the mountains by Cithaeron, whose fame is now my own. When my father and mother were alive, they chose it as my special burying place— and thus, when I die, I'll be following the orders of the ones who tried to kill me. And yet I know this much—no disease nor any other suffering can kill me— for I would never have been saved from death unless I was to suffer a strange destiny. But wherever my fate leads, just let it go. As for my two sons, Creon, there's no need for you to care for them on my behalf— they are men—thus, no matter where they are, they'll always have enough to live on. But my two poor daughters have never known my dining table placed away from them or lacked their father's presence. They shared everything I touched—that's how it's always been. So take care of them for me. But first let me feel them with my hands and then I'll grieve. Oh my lord, you noble heart, let me do that— if my hands could touch them it would seem as if I were with them when I still could see.</p>
    </section>

    <section>
    <p className="italic">[Some SERVANTS lead ANTIGONE and ISMENE out of the palace]</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>What's this? By all the gods I hear something— is it my two dear children crying … ? Has Creon taken pity on me and sent out the children, my dear treasures? Is that what's happening?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Yes. I sent for them. I know the joy they've always given you— the joy which you feel now.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I wish you well. And for this act, may the god watch over you and treat you better than he treated me. Ah, my children, where are you? Come here, come into my arms—you are my sisters now— feel these hands which turned your father's eyes, once so bright, into what you see now, these empty sockets. He was a man, who, seeing nothing, knowing nothing, fathered you with the woman who had given birth to him. I weep for you. Although I cannot see, I think about your life in days to come, the bitter life which men will force on you. What citizens will associate with you? What feasts will you attend and not come home in tears, with no share in the rejoicing? When you're mature enough for marriage, who will be there for you, my children, what husband ready to assume the shame tainting my children and their children, too? What perversion is not manifest in us? Your father killed his father, and then ploughed his mother's womb—where he himself was born— conceiving you where he, too, was conceived. Those are the insults they will hurl at you. Who, then, will marry you? No one, my children. You must wither, barren and unmarried. Son of Menoeceus, with both parents gone, you alone remain these children's father. Do not let them live as vagrant paupers, wandering around unmarried. You are a relative of theirs—don't let them sink to lives of desperation like my own. Have pity. You see them now at their young age deprived of everything except a share in what you are. Promise me, you noble soul, you will extend your hand to them. And you, my children, if your minds were now mature, there's so much I could say. But I urge you— pray that you may live as best you can and lead your destined life more happily than your own father.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>You have grieved enough. Now go into the house.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I must obey, although that's not what I desire.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>In due time all things will work out for the best.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>I will go. But you know there are conditions.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Tell me. Once I hear them, I'll know what they are.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Send me away to live outside of Thebes.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Only the god can give you what you ask.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>But I've become abhorrent to the gods.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Then you should quickly get what you desire.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>So you agree?</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>I don't like to speak thoughtlessly and say what I don't mean.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>Come then, lead me off.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>All right, but let go of the children.</p>
    </section>

    <section>
    <p className="font-bold">OEDIPUS:</p>
    <p>No, no! Do not take them away from me.</p>
    </section>

    <section>
    <p className="font-bold">CREON:</p>
    <p>Don't try to be in charge of everything. Your life has lost the power you once had.</p>
    </section>

    <section>
    <p className="italic">[CREON, OEDIPUS, ANTIGONE, ISMENE, and ATTENDANTS all enter the palace]</p>
    </section>

    <section>
    <p className="font-bold">CHORUS:</p>
    <p>You residents of Thebes, our native land, look on this man, this Oedipus, the one who understood that celebrated riddle. He was the most powerful of men. All citizens who witnessed this man's wealth were envious. Now what a surging tide of terrible disaster sweeps around him. So while we wait to see that final day, we cannot call a mortal being happy before he's passed beyond life free from pain.</p>
    </section>
    </div>
      </ScrollArea>
    </div>
  )
}