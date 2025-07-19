import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/madrinhas.jpeg"
          alt="Mulheres grávidas em ambiente acolhedor"
          fill
          className="object-cover"
          style={{ objectPosition: "center 50%" }}
          priority
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white drop-shadow-lg"></div>
      </div>
    </section>
  );
};

export default Banner;
