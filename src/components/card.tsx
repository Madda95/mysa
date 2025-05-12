import Image from "next/image";

export const Card: React.FC<{
  titolo: string;
  descrizione: string;
  immagine: string;
  alt: string;
}> = ({ alt, descrizione, immagine, titolo }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden md:max-w-md">
      <div className="relative w-full h-48">
        <Image
          className="object-cover"
          src={immagine}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{titolo}</h2>
        <p className="mt-2 text-gray-600">{descrizione}</p>
      </div>
    </div>
  );
};

export default Card;
