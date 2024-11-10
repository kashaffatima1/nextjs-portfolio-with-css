
import React from 'react';
import Herosection from "./Component/Herosection"
import Education from "./Component/Education";
import ContactForm from "./Component/Contact";
import Footer from "./Component/Footer";


export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <Herosection />
        <Education />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
