"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            style={{ color: "#CB997E" }}
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            aria-label="Mysa centro massaggi ronchi dei legionari"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Mysa
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Il termine Mysa ha origini svedesi e racchiude un profondo senso di
            benessere e comfort. Significa &quot;rilassarsi&quot; e
            &quot;godersi un momento di tranquillità&quot;, un invito a
            rallentare, riconnettersi con se stessi e ritrovare equilibrio.
          </Typography>
          <Typography
            variant="lead"
            className="italic mb-4 !text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            &quot;Il massaggio si fa con le mani, con la mente e con il cuore,
            dando il meglio di se stessi agli altri.&quot;
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          style={{
            objectPosition: "top",
          }}
          alt="team work"
          src="/image/hero.png"
          className="h-[30rem] w-[30rem] w-full rounded-xl object-cover ml-auto"
        />
      </div>
    </header>
  );
}

export default Hero;
