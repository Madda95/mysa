"use client";

import { Typography } from "@material-tailwind/react";

export function Resume() {
  return (
    <>
      <section className="px-8 py-2">
        <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 ">
          <div className="col-span-1">
            <Typography
              variant="h2"
              color="blue-gray"
              style={{ color: "#CB997E" }}
            >
              Chi sono
            </Typography>
            <Typography className="mb-4 mt-3 w-12/12 font-normal !text-gray-500">
              Sono Susanna Miotti, massaggiatrice diplomata nel campo del
              benessere e mi dedico con passione e amore a questa professione.
              Nel tempo ho conseguito numerosi attestati, ma ritengo che la vera
              misura della professionalità e della competenza non risieda nei
              titoli, bensì nella capacità di creare un'esperienza autentica e
              soddisfacente per chi si rivolge a me. Il mio obiettivo è
              garantire un percorso di benessere personalizzato, mirato a
              rispondere alle esigenze uniche di ogni individuo.
            </Typography>
          </div>
        </div>
      </section>
      <section className="px-8 py-2">
        <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 ">
          <div className="col-span-1">
            <Typography
              variant="h2"
              color="blue-gray"
              style={{ color: "#CB997E" }}
            >
              I benefici di un massaggio
            </Typography>
            <Typography className="mb-4 mt-3 w-12/12 font-normal !text-gray-500">
              Negli ultimi anni, sempre più persone si riavvicinano ai
              trattamenti olistici per prendersi cura di sé in modo naturale. Il
              massaggio è un prezioso alleato per corpo e mente: scioglie le
              tensioni muscolari, allevia stress, ansia e stanchezza, regalando
              un profondo senso di rilassamento. Favorisce il rinnovamento
              cellulare, migliora l’equilibrio naturale della pelle, stimola la
              circolazione sanguigna e linfatica e rende i tessuti più elastici
              agendo inoltre sul sistema nervoso, donando calma o nuova energia
              a seconda delle necessità, apporta benefici al sistema muscolare e
              scheletrico, migliorando la postura e riducendo rigidità e
              contratture. È ideale per chi pratica sport, per chi ha una vita
              più sedentaria, per le persone anziane e per chiunque voglia
              dedicarsi un momento di autentico benessere. E’ importante
              prendersi cura di se stessi facendo del massaggio una esperienza
              abituale rigenerante e riequilibrante, perfetta per ritrovare
              armonia, vitalità e serenità interiore.
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
