import Image from "next/image";

export const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-lg">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6x1 font-bold text-white mb-4">
            Semana do consumidor!
          </h1>
          <p className="text-white mb:4 p-3 text-2xl">
            Desconto de até imperdiveis
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold ">
            Garanta 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner-image.png"
            fill
            alt="Banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
