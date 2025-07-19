import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";

import {
  POLICY_URL,
  PRO_MATRE_URL,
  SANTA_JOANA_URL,
  SANTA_MARIA_URL,
} from "../constants";

const Contact = () => {
  const maternidadeLogos = [
    {
      src: "/assets/images/santa-joana-logo.png",
      alt: "Logo do Santa Joana",
      name: "Santa Joana",
      url: SANTA_JOANA_URL,
    },
    {
      src: "/assets/images/pro-matre-logo.png",
      alt: "Logo do Pro Matre",
      name: "Pro Matre Paulista",
      url: PRO_MATRE_URL,
    },
    {
      src: "/assets/images/santa-maria-logo.png",
      alt: "Logo da Santa Maria",
      name: "Santa Maria",
      url: SANTA_MARIA_URL,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-700 rounded-full mb-6">
            <MdLocalPhone className="text-4xl text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-700 mb-4 leading-tight">
            Para dúvidas ou informações, acesse nossos canais de comunicação:
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {maternidadeLogos.map((maternidade, index) => (
            <a
              key={index}
              href={maternidade.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:border-primary-200 h-80 w-full flex flex-col justify-between">
                <div className="flex flex-col items-center flex-1 justify-center">
                  <div className="mb-4 h-32 w-32 flex items-center justify-center">
                    <Image
                      src={maternidade.src}
                      alt={maternidade.alt}
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-700 text-center">
                    {maternidade.name}
                  </h3>
                  <p className="text-base text-gray-500 mt-2">
                    Clique para acessar o site <span className="ml-1">→</span>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <span className="text-gray-700 font-medium">Leia nossa </span>
          <a
            href={POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 underline hover:text-primary-800 transition-colors font-semibold"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
