"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react"; // Íconos
import { Button } from "@/components/ui/button"; // Botón de ShadCN
import logo from '../assets/CacaoByte.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Función para manejar los submenús
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* 🔹 Logo */}
        <a href="/" className="text-xl font-bold flex items-center gap-2">
          CacaoByte S.A 
        </a>

        {/* 📌 Menú para pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600 transition">Inicio</a>
          <a href="/about/about" className="hover:text-blue-600 transition">Nosotros</a>
          <a href="/clients/clients" className="hover:text-blue-600 transition">Clientes</a>

          {/* 🔹 Dropdown Productos */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("productos")}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Productos <ChevronDown className="w-4 h-4 transition" />
            </button>
            {openDropdown === "productos" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50"
            >
              {/* 🔹 SaaS Principal */}
              <a 
                href="/productos/softbyte-commerce" 
                className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
              >
                🏪 SoftByte Commerce (POS SaaS)
              </a>
              <a 
                href="/productos/byte-recipes" 
                className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
              >
                📑 Byte Recipes (Cotización de Materia Prima)
              </a>

              {/* 🔹 Byte Events - Ecosistema */}
              <div className="px-4 py-2 text-gray-600 font-semibold">
                🎫 Byte Events (Gestión de Eventos)
              </div>
              <a 
                href="/productos/byte-events/gestor" 
                className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
              >
                🎟️ Gestor de Eventos
              </a>
              <a 
                href="/productos/byte-events/validadores" 
                className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
              >
                ✅ Validadores de Entradas
              </a>
              <a 
                href="/productos/byte-events/admin" 
                className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
              >
                🛠️ Panel de Administración
              </a>
            </motion.div>
          )}

          </div>

        {/* 🔹 Dropdown Servicios */}
        {/* 🔹 Dropdown Servicios */}
        <div className="relative group">
          <button
            onClick={() => toggleDropdown("servicios")}
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            Servicios <ChevronDown className="w-4 h-4 transition" />
          </button>
          {openDropdown === "servicios" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50"
            >
              <a 
                href="/servicios/desarrollo-web" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
               <span className="text-gray-800">Desarrollo Web</span>
              </a>
              <a 
                href="/servicios/software-medida" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
              <span className="text-gray-800">Software a la Medida</span>
              </a>
              <a 
                href="/servicios/seguridad-informatica" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
             <span className="text-gray-800">Seguridad Informática</span>
              </a>
              <a 
                href="/servicios/saas" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
              <span className="text-gray-800">Software como Servicio (SaaS)</span>
              </a>
              <a 
                href="/servicios/transformacion-digital" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
             <span className="text-gray-800">Transformación Digital</span>
              </a>
              <a 
                href="/servicios/inteligencia-negocios" 
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 transition"
              >
              <span className="text-gray-800">Análisis de Negocios</span>
              </a>
            </motion.div>
          )}
        </div>



          <a href="/contact" className="hover:text-blue-600 transition">Contacto</a>
        </nav>

        {/* 📌 Botón de menú móvil */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* 📌 Menú Móvil Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="/" className="block p-2 hover:bg-gray-100">Inicio</a>
              <a href="/about/about" className="block p-2 hover:bg-gray-100">Nosotros</a>
              <a href="/clients/clients" className="block p-2 hover:bg-gray-100">Clientes</a>

              {/* 📌 Dropdown Productos */}
              <button
                onClick={() => toggleDropdown("productos")}
                className="flex justify-between p-2 hover:bg-gray-100"
              >
                Productos <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "productos" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50"
              >
                {/* 🔹 SaaS Principal */}
                <a 
                  href="/productos/softbyte-commerce" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🏪 SoftByte Commerce (POS SaaS)
                </a>
                <a 
                  href="/productos/byte-recipes" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  📑 Byte Recipes (Cotización de Materia Prima)
                </a>

                {/* 🔹 Byte Events - Ecosistema */}
                <div className="px-4 py-2 text-gray-600 font-semibold">
                  🎫 Byte Events (Gestión de Eventos)
                </div>
                <a 
                  href="/productos/byte-events/gestor" 
                  className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🎟️ Gestor de Eventos
                </a>
                <a 
                  href="/productos/byte-events/validadores" 
                  className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  ✅ Validadores de Entradas
                </a>
                <a 
                  href="/productos/byte-events/admin" 
                  className="block px-6 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🛠️ Panel de Administración
                </a>
              </motion.div>
            )}




              {/* 📌 Dropdown Servicios */}
              <button
                onClick={() => toggleDropdown("servicios")}
                className="flex justify-between p-2 hover:bg-gray-100"
              >
                Servicios <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "servicios" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 border border-gray-200 z-50"
              >
                <a 
                  href="/servicios/desarrollo-web" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🌐 Desarrollo Web
                </a>
                <a 
                  href="/servicios/software-medida" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  ⚙️ Software a la Medida
                </a>
                <a 
                  href="/servicios/seguridad-informatica" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🔒 Seguridad Informática
                </a>
                <a 
                  href="/servicios/saas" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  ☁️ Software como Servicio (SaaS)
                </a>
                <a 
                  href="/servicios/transformacion-digital" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  🚀 Transformación Digital
                </a>
                <a 
                  href="/servicios/inteligencia-negocios" 
                  className="block px-4 py-2 hover:bg-gray-200 flex items-center gap-2 transition"
                >
                  📊 Análisis de Negocios
                </a>
              </motion.div>
            )}



              <a href="/contact" className="block p-2 hover:bg-gray-100">Contacto</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
