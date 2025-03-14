import React from "react";
import ContactForm from "../../components/contact/contact";
import "../../styles/global.css"

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">Contáctanos</h1>
        <p className="text-base sm:text-lg mt-4 text-gray-600 text-center">
          Envíanos tu consulta y nos pondremos en contacto contigo lo antes posible.
        </p>
        <div className="mt-6 sm:mt-8">
          <ContactForm  />
        </div>
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default ContactPage;
