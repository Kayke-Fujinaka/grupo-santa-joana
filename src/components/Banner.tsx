import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative h-80 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/banner.png"
          alt="Mulheres grávidas em ambiente acolhedor"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
          priority
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-transparent to-blue-100/30"></div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white drop-shadow-lg">
        </div>
      </div>
    </section>
  );
};

export default Banner;
