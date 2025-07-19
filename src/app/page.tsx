"use client";

import {
  Banner,
  Consent,
  Contact,
  Copyright,
  Forms,
  Header,
  Welcome,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Welcome />
      <Forms />
      <Contact />
      <Copyright />
      <Consent />
    </div>
  );
}
