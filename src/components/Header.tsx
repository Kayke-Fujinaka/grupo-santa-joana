import Image from "next/image";

import { GRUPO_SANTA_JOANA_URL } from "@/constants";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-white via-slate-50 to-blue-50/30 overflow-hidden px-4">
      <div className="container mx-auto px-4 pb-16 mt-2">
        <div className="text-center mb-12 mr-4">
          <div className="inline-block">
            <a
              href={GRUPO_SANTA_JOANA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src="/assets/images/grupo-santa-joana-logo.png"
                alt="Logo do Grupo Santa Joana"
                width={240}
                height={120}
                className="max-w-xs mx-auto md:h-32 md:w-64 lg:h-36 lg:w-72"
                priority
              />
            </a>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl uppercase font-bold text-primary-700 tracking-tight">
              Projeto Madrinha
            </h1>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="w-12 h-1 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-full"></div>
              <div className="w-2 h-2 bg-secondary-700 rounded-full"></div>
              <div className="w-12 h-1 bg-gradient-to-l from-primary-700 to-secondary-700 rounded-full"></div>
            </div>
          </div>

          <div className="lg:mb-10">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
              O Projeto Madrinha foi criado para proporcionar{" "}
              <span className="font-semibold text-primary-700">
                acolhimento
              </span>
              ,<span className="font-semibold text-primary-700"> educação</span>{" "}
              e
              <span className="font-semibold text-primary-700">
                {" "}
                suporte personalizado
              </span>{" "}
              a mulher e famílias de diferentes composições, com foco na saúde
              da mulher, gestação, parto, pós-parto e cuidados com o bebê.
            </p>

            <p className="text-xl font-semibold text-primary-700">
              Seja muito bem-vinda a essa experiência de muito cuidado e amor!
              💕
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
