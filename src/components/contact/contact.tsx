import { useState } from "react";
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const mailtoLink = `mailto:cacaobyte@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nombre: ${name}%0D%0ACorreo: ${email}%0D%0AMensaje:%0D%0A${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <form className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-6 sm:mt-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4">
        {/* Nombre */}
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

        {/* Correo Electrónico */}
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

        {/* Asunto */}
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

        {/* Mensaje */}
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

        {/* Botón de Envío */}
        <div className="text-center">
          <button type="submit" className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition">
            📩 Enviar Mensaje
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
