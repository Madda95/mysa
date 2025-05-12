"use client";

import { Typography } from "@material-tailwind/react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Typography variant="h1" className="mb-8 text-[#CB997E]">
        Informativa sulla Privacy
      </Typography>

      <div className="space-y-8">
        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Introduzione
          </Typography>
          <Typography className="text-gray-600">
            La presente Informativa sulla Privacy descrive come Mysa Massaggi
            ("noi", "nostro" o "la Società") raccoglie, utilizza e condivide le
            informazioni personali quando utilizzi il nostro sito web. Ci
            impegniamo a proteggere la tua privacy e a gestire i tuoi dati
            personali in modo trasparente e responsabile.
          </Typography>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Raccolta delle Informazioni
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Raccogliamo le seguenti tipologie di informazioni:
          </Typography>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Dati di navigazione e cookie</li>
            <li>Informazioni sul dispositivo e sulla connessione internet</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Utilizzo dei Cookie
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Utilizziamo i cookie per:
          </Typography>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Migliorare l&apos;esperienza di navigazione</li>
            <li>Ricordare le tue preferenze</li>
            <li>Analizzare l&apos;utilizzo del sito</li>
            <li>Personalizzare i contenuti</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Utilizzo delle Informazioni
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Utilizziamo le informazioni raccolte per:
          </Typography>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Fornire e gestire i nostri servizi</li>
            <li>Processare le tue prenotazioni</li>
            <li>Comunicare con te riguardo ai nostri servizi</li>
            <li>Migliorare il nostro sito web</li>
            <li>Rispettare i nostri obblighi legali</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Protezione dei Dati
          </Typography>
          <Typography className="text-gray-600">
            Implementiamo misure di sicurezza tecniche e organizzative
            appropriate per proteggere i tuoi dati personali contro
            l&apos;accesso non autorizzato, la perdita o l&apos;alterazione. I
            tuoi dati vengono conservati su server sicuri e l&apos;accesso è
            limitato al personale autorizzato.
          </Typography>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            I Tuoi Diritti
          </Typography>
          <Typography className="text-gray-600 mb-4">
            Hai il diritto di:
          </Typography>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiedere la correzione dei dati inesatti</li>
            <li>Richiedere la cancellazione dei tuoi dati</li>
            <li>Opporti al trattamento dei tuoi dati</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Contatti
          </Typography>
          <Typography className="text-gray-600">
            Per qualsiasi domanda riguardante questa Informativa sulla Privacy o
            per esercitare i tuoi diritti, puoi contattarci a:
          </Typography>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <Typography className="text-gray-600">
              Email: info@mysamassaggi.it
              <br />
              Telefono: +39 339 2935151
              <br />
              Indirizzo: Via Rima, 21 - Ronchi dei Legionari (GO)
            </Typography>
          </div>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Modifiche alla Privacy Policy
          </Typography>
          <Typography className="text-gray-600">
            Ci riserviamo il diritto di modificare questa Informativa sulla
            Privacy in qualsiasi momento. Le modifiche saranno pubblicate su
            questa pagina e, se significative, ti informeremo tramite email o
            attraverso una notifica sul nostro sito web.
          </Typography>
        </section>

        <section>
          <Typography variant="h3" className="mb-4 text-gray-800">
            Ultimo Aggiornamento
          </Typography>
          <Typography className="text-gray-600">
            Questa Informativa sulla Privacy è stata aggiornata l&apos;ultima
            volta il {new Date().toLocaleDateString("it-IT")}.
          </Typography>
        </section>
      </div>
    </div>
  );
}
