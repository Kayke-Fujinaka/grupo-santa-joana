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
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-secondary-700/25 via-blue-700/25 to-primary-700/25">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-xl border border-white/30">
        <div className="text-center mb-12">
          <h2 className="text-2xl leading-tight font-bold text-gray-700 mb-4">
            QUER PARTICIPAR? <br className="block lg:hidden" />
            RESPONDA O FORMULÁRIO ABAIXO.
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Primeiro nome *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Digite seu primeiro nome"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Sobrenome *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Digite seu sobrenome"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                CPF *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="cpf"
                  placeholder="000.000.000-00"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Telefone *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+55 (11) 99999-9999"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                E-mail *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Qual o nome do(a) bebê?
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="babyName"
                  placeholder="Nome escolhido para o bebê"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
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
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="insurancePlan"
                  placeholder="Nome do convênio"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
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
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="hospital"
                  placeholder="Nome do hospital onde pretende dar à luz"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Que empresa você trabalha?
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V6a2 2 0 00-2-2H8a2 2 0 00-2 2v8M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Nome da empresa onde trabalha"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                Há algo que gostaria de informar à madrinha?
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 pt-4 pl-4 flex items-start pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <textarea
                  name="messageMadrinha"
                  rows={4}
                  placeholder="Compartilhe informações importantes sobre sua gestação, medos, expectativas ou dúvidas..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200 resize-none"
                ></textarea>
              </div>
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
              <div className="relative">
                <div className="absolute top-0 left-0 pt-5 pl-4 flex items-start pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <textarea
                  name="others"
                  rows={4}
                  placeholder="Outros comentários ou informações adicionais..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary-700 focus:border-primary-700 focus:bg-white transition-all duration-200 resize-none"
                ></textarea>
              </div>
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
