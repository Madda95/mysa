"use client";

import { MassageDetail } from "@/components/MassageDetail";
import { massaggi } from "@/const";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

export function Projects() {
  const [massageSelected, setMassageSelected] =
    useState<(typeof massaggi)[0]>();

  return (
    <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 ">
      <section className="py-2">
        <div className="flex flex-wrap justify-space-between md:justify-center gap-8">
          {massaggi.map((massaggio) => (
            <div
              className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              key={massaggio.id}
            >
              <Image
                className="w-full h-100 object-cover min-h-577px"
                src={massaggio.previewImage?.[0] || ""}
                alt={massaggio.titolo}
                width={400}
                height={400}
                style={{ minHeight: "577px" }}
              />
              <div className="p-6 bg-white flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {massaggio.titolo}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {massaggio.descrizioneLite}
                </p>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-auto"
                  style={{ background: "#CB997E" }}
                  onClick={() => setMassageSelected(massaggio)}
                >
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" py-2">
        <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16">
          <div className="col-span-1">
            <Typography
              variant="h2"
              color="blue-gray"
              style={{ color: "#CB997E" }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Dove trovarmi
            </Typography>
          </div>
        </div>
      </section>
      <section className="py-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.2220914977356!2d13.498439776253285!3d45.82683570917006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ba7d075088f55%3A0x8175f38457e86125!2sMysa%20massaggi!5e0!3m2!1sit!2sit!4v1747036841356!5m2!1sit!2sit"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </section>

      <MassageDetail
        description={massageSelected?.descrizione}
        images={massageSelected?.previewImage ?? []}
        isOpen={!!massageSelected}
        onClose={() => setMassageSelected(undefined)}
      />
    </div>
  );
}

export default Projects;
