"use client";

import dynamic from "next/dynamic";

import { POLICY_URL } from "../constants";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => (
    <div className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-500 flex items-center">
      Carregando opções...
    </div>
  ),
});

const Forms = () => {
  const howKnowOptions = [
    { value: "ABNT", label: "ABNT" },
    { value: "B2Mamy", label: "B2Mamy" },
    { value: "Banco Safra", label: "Banco Safra" },
    { value: "Banco Santander", label: "Banco Santander" },
    { value: "Cassi", label: "Cassi" },
    {
      value: "Centro de Diagnósticos e Pré Natal Santa Joana",
      label: "Centro de Diagnósticos e Pré Natal Santa Joana",
    },
    { value: "Centro Médico Alphaville", label: "Centro Médico Alphaville" },
    { value: "Dra. Agnes Rodrigues Yau", label: "Dra. Agnes Rodrigues Yau" },
    { value: "Dr. Americo Akio Fukazawa", label: "Dr. Americo Akio Fukazawa" },
    {
      value: "Dr. Carlos Augusto Vieira De Moraes Filho",
      label: "Dr. Carlos Augusto Vieira De Moraes Filho",
    },
    {
      value: "Dra. Carolina Rebello Da Costa",
      label: "Dra. Carolina Rebello Da Costa",
    },
    {
      value: "Dra. Celia Horie Putini Vieira",
      label: "Dra. Celia Horie Putini Vieira",
    },
    {
      value: "Dra. Cláudia Cristina Veynoglou Kosmiskas",
      label: "Dra. Cláudia Cristina Veynoglou Kosmiskas",
    },
    {
      value: "Dr. Clovis Gonzaga Cunha Camargo",
      label: "Dr. Clovis Gonzaga Cunha Camargo",
    },
    { value: "Dr. Dalton Kameo Matsuo", label: "Dr. Dalton Kameo Matsuo" },
    { value: "Dr. Edison Capuano Filho", label: "Dr. Edison Capuano Filho" },
    { value: "Dr. Fábio Spagnuolo", label: "Dr. Fábio Spagnuolo" },
    {
      value: "Dr. João Gabriel Kosmiskas",
      label: "Dr. João Gabriel Kosmiskas",
    },
    {
      value: "Dr. José Vicente Carvalho Kosmiskas",
      label: "Dr. José Vicente Carvalho Kosmiskas",
    },
    {
      value: "Dr. Juliano Henrique De Oliveira Naliato",
      label: "Dr. Juliano Henrique De Oliveira Naliato",
    },
    {
      value: "Dra. Laura Maciel Rocha Penteado de Aguiar",
      label: "Dra. Laura Maciel Rocha Penteado de Aguiar",
    },
    { value: "Dra Larissa Pires Pereira", label: "Dra Larissa Pires Pereira" },
    {
      value: "Dr. Leonardo Liporone Baruki",
      label: "Dr. Leonardo Liporone Baruki",
    },
    {
      value: "Dr. Lucas Felipe Romano Olivotti",
      label: "Dr. Lucas Felipe Romano Olivotti",
    },
    {
      value: "Dr. Luiz Fernando Pereira Leite - Clinnique",
      label: "Dr. Luiz Fernando Pereira Leite - Clinnique",
    },
    { value: "Dr. Marcio Grynszpan", label: "Dr. Marcio Grynszpan" },
    {
      value: "Dra. Maria Fernanda De Lucca",
      label: "Dra. Maria Fernanda De Lucca",
    },
    {
      value: "Dr. Mauricy Chinaglia Bonaparte",
      label: "Dr. Mauricy Chinaglia Bonaparte",
    },
    { value: "Dr. Mauro Grynszpan", label: "Dr. Mauro Grynszpan" },
    { value: "Dra. Mei Stephanie Yau", label: "Dra. Mei Stephanie Yau" },
    {
      value: "Dr. Raimundo Maria Melo Nunes",
      label: "Dr. Raimundo Maria Melo Nunes",
    },
    { value: "Dr. Sandro Garcia Hilario", label: "Dr. Sandro Garcia Hilario" },
    {
      value: "Dra. Vanessa Cairolli Fusari",
      label: "Dra. Vanessa Cairolli Fusari",
    },
    { value: "Dr. Yau Wing Wah", label: "Dr. Yau Wing Wah" },
    {
      value: "Durante a internação na maternidade",
      label: "Durante a internação na maternidade",
    },
    { value: "Grupo Travelex Confidence", label: "Grupo Travelex Confidence" },
    {
      value: "Hospital A. C. Camargo Câncer Center",
      label: "Hospital A. C. Camargo Câncer Center",
    },
    {
      value: "Hospital Alemão Oswaldo Cruz – Programa Gerar",
      label: "Hospital Alemão Oswaldo Cruz – Programa Gerar",
    },
    { value: "Hospital Sírio Libanês", label: "Hospital Sírio Libanês" },
    {
      value: "Hospital Sírio Libanês - Colaboradoras",
      label: "Hospital Sírio Libanês - Colaboradoras",
    },
    {
      value: "Indicação do médico do pré-natal",
      label: "Indicação do médico do pré-natal",
    },
    {
      value: "Indicação médico cardiologista / pediatra",
      label: "Indicação médico cardiologista / pediatra",
    },
    { value: "Insper", label: "Insper" },
    { value: "Latam Airlines", label: "Latam Airlines" },
    { value: "Mídias Sociais", label: "Mídias Sociais" },
    {
      value: "Plano Maternidade - Hospital Pro Matre Paulista",
      label: "Plano Maternidade - Hospital Pro Matre Paulista",
    },
    {
      value: "Plano Maternidade - Hospital Santa Joana",
      label: "Plano Maternidade - Hospital Santa Joana",
    },
    {
      value: "Plano Maternidade - Hospital Santa Maria",
      label: "Plano Maternidade - Hospital Santa Maria",
    },
    {
      value: "Pollo Consultoria de Benefícios",
      label: "Pollo Consultoria de Benefícios",
    },
    { value: "Porto Seguro", label: "Porto Seguro" },
    {
      value: "Pronto Socorro Santa Joana",
      label: "Pronto Socorro Santa Joana",
    },
    {
      value: "Pronto Socorro Santa Maria",
      label: "Pronto Socorro Santa Maria",
    },
    { value: "Pronto Socorro Pro Matre", label: "Pronto Socorro Pro Matre" },
    {
      value: "Sabesp - Companhia de Saneamento Básico do Estado de São Paulo",
      label: "Sabesp - Companhia de Saneamento Básico do Estado de São Paulo",
    },
    { value: "Sesc", label: "Sesc" },
    { value: "Theia", label: "Theia" },
    { value: "Unimed Seguros", label: "Unimed Seguros" },
    {
      value: "Visita na Maternidade Pro Matre Paulista (online ou presencial)",
      label: "Visita na Maternidade Pro Matre Paulista (online ou presencial)",
    },
    {
      value: "Visita na Maternidade Santa Joana (online ou presencial)",
      label: "Visita na Maternidade Santa Joana (online ou presencial)",
    },
    {
      value: "Visita na Maternidade Santa Maria (online ou presencial)",
      label: "Visita na Maternidade Santa Maria (online ou presencial)",
    },
    { value: "Volkswagen", label: "Volkswagen" },
    { value: "Votorantim", label: "Votorantim" },
  ];

  const customSelectStyles = {
    control: (provided: object, state: { isFocused: boolean }) => ({
      ...provided,
      padding: "8px",
      borderRadius: "12px",
      border: state.isFocused ? "2px solid #1E3FA1" : "2px solid #e5e7eb",
      backgroundColor: state.isFocused ? "#ffffff" : "#f9fafb",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(30, 63, 161, 0.1)" : "none",
      "&:hover": {
        borderColor: "#1E3FA1",
      },
      fontSize: "16px",
      minHeight: "56px",
    }),
    placeholder: (provided: object) => ({
      ...provided,
      color: "#6b7280",
      fontSize: "16px",
    }),
    option: (
      provided: object,
      state: { isSelected: boolean; isFocused: boolean }
    ) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1E3FA1"
        : state.isFocused
        ? "#e0e7ff"
        : "white",
      color: state.isSelected ? "white" : "#374151",
      padding: "12px 16px",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: state.isSelected ? "#1E3FA1" : "#e0e7ff",
      },
    }),
    menu: (provided: object) => ({
      ...provided,
      borderRadius: "12px",
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      border: "1px solid #e5e7eb",
      zIndex: 50,
    }),
    menuList: (provided: object) => ({
      ...provided,
      maxHeight: "200px",
      borderRadius: "12px",
    }),
    singleValue: (provided: object) => ({
      ...provided,
      color: "#111827",
      fontSize: "16px",
    }),
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-purple-100">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-tight font-bold text-gray-700 mb-4">
            QUER PARTICIPAR? <br />
            RESPONDA O FORMULÁRIO ABAIXO.
          </h2>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-xl border border-white/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Primeiro nome *
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Digite seu primeiro nome"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Sobrenome *
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Digite seu sobrenome"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                CPF *
              </label>
              <input
                type="text"
                name="cpf"
                placeholder="000.000.000-00"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Telefone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+55 (11) 99999-9999"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                placeholder="seu.email@exemplo.com"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Qual o nome do(a) bebê?
              </label>
              <input
                type="text"
                name="babyName"
                placeholder="Nome escolhido para o bebê"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-4 text-sm uppercase tracking-wide">
                Possui convênio? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hasInsurance"
                    value="sim"
                    className="w-5 h-5 text-primary-700 border-2 border-gray-300 focus:ring-primary-700 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Sim</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hasInsurance"
                    value="nao"
                    className="w-5 h-5 text-primary-700 border-2 border-gray-300 focus:ring-primary-700 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Não</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Se a resposta foi sim, qual seu convênio e plano?
              </label>
              <input
                type="text"
                name="insurancePlan"
                placeholder="Nome do convênio"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Idade Gestacional *
              </label>
              <div className="flex gap-3 items-center">
                <input
                  type="text"
                  name="gestationalAge"
                  placeholder="0"
                  pattern="^([0-9]|[1-3][0-9]|4[0-2])$"
                  title="Digite um número entre 0 e 42 semanas"
                  className="w-16 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200 text-center"
                  maxLength={2}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    // Remove caracteres não numéricos
                    target.value = target.value.replace(/\D/g, "");
                    // Limita a 42
                    if (parseInt(target.value) > 42) {
                      target.value = "42";
                    }
                  }}
                />
                <span className="text-gray-700 font-medium">semanas</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Data provável do parto *
              </label>
              <input
                type="date"
                name="dueDate"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-4 text-sm uppercase tracking-wide">
                Sua gravidez é de alto risco? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isHighRisk"
                    value="sim"
                    className="w-5 h-5 text-primary-700 border-2 border-gray-300 focus:ring-primary-700 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Sim</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isHighRisk"
                    value="nao"
                    className="w-5 h-5 text-primary-700 border-2 border-gray-300 focus:ring-primary-700 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Não</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Se sim, qual o motivo?
              </label>
              <input
                type="text"
                name="riskReason"
                placeholder="Descreva brevemente o motivo"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Que hospital pretende ter bebê: *
              </label>
              <input
                type="text"
                name="hospital"
                placeholder="Nome do hospital onde pretende dar à luz"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Que empresa você trabalha?
              </label>
              <input
                type="text"
                name="company"
                placeholder="Nome da empresa onde trabalha"
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Há algo que gostaria de informar à madrinha?
              </label>
              <textarea
                name="messageMadrinha"
                rows={4}
                placeholder="Compartilhe informações importantes sobre sua gestação, medos, expectativas ou dúvidas..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Como você ficou sabendo do Projeto Madrinha? *
              </label>
              <Select
                options={howKnowOptions}
                styles={customSelectStyles}
                placeholder="Selecione aqui ou digite para buscar..."
                noOptionsMessage={() => "Nenhuma opção encontrada"}
                isSearchable
                isClearable
                name="howKnowProject"
                className="react-select"
                classNamePrefix="react-select"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Outros
              </label>
              <textarea
                name="others"
                rows={4}
                placeholder="Outros comentários ou informações adicionais..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200 resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className="w-5 h-5 mt-1 text-primary-700 border-2 border-gray-300 rounded focus:ring-primary-700 focus:ring-2 flex-shrink-0"
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  <a
                    href={POLICY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Eu, titular dos dados</strong>, autorizo o Grupo
                    Santa Joana a tratar meus dados pessoais e sensíveis para os
                    fins do Projeto Madrinha, de acordo com a Lei Geral de
                    Proteção de Dados Pessoais (LGPD).
                  </a>
                </span>
              </label>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              type="submit"
              className="bg-primary-700 cursor-pointer hover:bg-primary-800 transition-all duration-200 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg"
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
