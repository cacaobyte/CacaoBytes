import { useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/global.css";

const subjects = [
  "Cotización de SoftByte Commerce",
  "Cotización de Byte Recipes",
  "Cotización de Byte Events",
  "Consultas sobre Desarrollo Web",
  "Consultas sobre Software a la Medida",
  "Consultas sobre Seguridad Informática",
  "Consultas sobre Software como Servicio (SaaS)",
  "Consultas sobre Transformación Digital",
  "Consultas sobre Análisis de Negocios",
  "Otro"
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
      name: name, 
      email: email, 
      title: subject,
      message: message,
    };

    emailjs.send(
      "service_0bauhcw", // ID del servicio
      "template_wwpxgtl", // ID de la plantilla
      templateParams,
      "lnlmSqUb3K9Dd24F1" // Public Key
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setStatus("Mensaje enviado correctamente ✅");
    })
    .catch((err) => {
      console.error("FAILED...", err);
      setStatus("Error al enviar el mensaje ❌");
    });
  };

  return (
    <form className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-6 sm:mt-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-semibold text-gray-700">Asunto</label>
          <select
            id="subject"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {subjects.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition">
            📩 Enviar Mensaje
          </button>
        </div>

        {status && <p className="text-center text-green-600 mt-4">{status}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
