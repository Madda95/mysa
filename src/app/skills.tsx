"use client";

import Card from "@/components/card";
import { Typography } from "@material-tailwind/react";

const MASSAGES = [
  {
    titolo: "Massaggio Connettivale",
    descrizione:
      "Il massaggio connettivale riflessogeno è una tecnica manuale che agisce sul tessuto connettivo per stimolare una risposta riflessa negli organi interni e nei sistemi corporei. Favorisce il rilassamento, migliora la circolazione e aiuta a ridurre tensioni muscolari.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Bionaturale",
    descrizione:
      "Il massaggio bionaturale è una pratica olistica che combina diverse tecniche e l'uso di oli essenziali per promuovere il benessere fisico, mentale ed emozionale, favorendo il rilassamento e la riduzione dello stress.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Chakra Balancing Massage",
    descrizione:
      "Il Chakra Balancing Massage lavora sulle fasce muscolari e sull'energia vitale dei 7 chakra principali, favorendo il rilascio di tensioni e portando a uno stato di benessere profondo.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio al Piede On Zon Su - Riflessologia Plantare",
    descrizione:
      "L'ON ZON SU è un antico massaggio cinese del piede che stimola il flusso energetico, migliora le funzioni corporee e allevia disturbi come dolori articolari, cefalee e problemi digestivi.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Metodo OsteoNat",
    descrizione:
      "Il metodo OsteoNat integra tecniche muscolo-scheletriche, viscerali e posturali per un approccio globale al benessere, migliorando mobilità, postura e funzionalità organica.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Decontratturante Sportivo",
    descrizione:
      "Il massaggio decontratturante allevia tensioni muscolari, migliora la mobilità e favorisce il recupero muscolare. Indicato per atleti e chi soffre di contratture dolorose.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio in Gravidanza",
    descrizione:
      "Un massaggio pensato per le future mamme, aiuta a ridurre stress, alleviare dolori muscolari e migliorare la circolazione, offrendo un profondo rilassamento.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Lomi Lomi Hawaiano",
    descrizione:
      "Il massaggio Lomi Lomi hawaiano combina movimenti fluidi e ritmici per favorire rilassamento profondo, armonia tra corpo e spirito e benessere generale.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Circolatorio Linfatico",
    descrizione:
      "Stimola il sistema linfatico e favorisce il drenaggio dei liquidi, riducendo la ritenzione idrica, migliorando la circolazione e promuovendo il rilassamento muscolare.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Body Shaping",
    descrizione:
      "Un massaggio mirato a ridurre cellulite e ritenzione idrica, migliorando la circolazione e tonificando la pelle attraverso manipolazioni specifiche.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio al Viso",
    descrizione:
      "Favorisce la microcircolazione, migliora la tonicità della pelle e aiuta a combattere i segni dell'invecchiamento, riducendo anche tensioni facciali.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Ayurveda",
    descrizione:
      "Un massaggio della tradizione ayurvedica che mira a riequilibrare corpo e mente, utilizzando oli naturali e tecniche specifiche per il benessere psicofisico.",
    immagine: "https://picsum.photos/1000/1000",
  },
  {
    titolo: "Massaggio Personalizzato",
    descrizione:
      "Ogni trattamento è adattato alle esigenze specifiche della persona, combinando diverse tecniche per un benessere personalizzato e completo.",
    immagine: "https://picsum.photos/1000/1000",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          color="blue-gray"
          className="lg:text-5xl !leading-tight text-3xl bold"
        >
          I benefici di un massaggio
        </Typography>

        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Negli ultimi anni, sempre più persone si riavvicinano ai trattamenti
          olistici per prendersi cura di sé in modo naturale. Il massaggio è un
          prezioso alleato per corpo e mente: scioglie le tensioni muscolari,
          allevia stress, ansia e stanchezza, regalando un profondo senso di
          rilassamento. Favorisce il rinnovamento cellulare, migliora
          l’equilibrio naturale della pelle, stimola la circolazione sanguigna e
          linfatica e rende i tessuti più elastici agendo inoltre sul sistema
          nervoso, donando calma o nuova energia a seconda delle necessità,
          apporta benefici al sistema muscolare e scheletrico, migliorando la
          postura e riducendo rigidità e contratture. È ideale per chi pratica
          sport, per chi ha una vita più sedentaria, per le persone anziane e
          per chiunque voglia dedicarsi un momento di autentico benessere. E’
          importante prendersi cura di se stessi facendo del massaggio una
          esperienza abituale rigenerante e riequilibrante, perfetta per
          ritrovare armonia, vitalità e serenità interiore.
        </Typography>

        <Typography
          color="blue-gray"
          className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900  mt-12"
        >
          Le tipologie di massaggio
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        {MASSAGES.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
