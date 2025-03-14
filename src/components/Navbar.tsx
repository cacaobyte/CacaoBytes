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
          <a href="/clients" className="hover:text-blue-600 transition">Clientes</a>

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
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
              >
                <a href="/productos/web" className="block px-4 py-2 hover:bg-gray-100">
                  Desarrollo Web
                </a>
                <a href="/productos/tiendas" className="block px-4 py-2 hover:bg-gray-100">
                  Tiendas Online
                </a>
              </motion.div>
            )}
          </div>

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
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
              >
                <a href="/servicios/seo" className="block px-4 py-2 hover:bg-gray-100">
                  SEO & Marketing
                </a>
                <a href="/servicios/branding" className="block px-4 py-2 hover:bg-gray-100">
                  Branding
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
              <a href="/about" className="block p-2 hover:bg-gray-100">Nosotros</a>
              <a href="/clients" className="block p-2 hover:bg-gray-100">Clientes</a>

              {/* 📌 Dropdown Productos */}
              <button
                onClick={() => toggleDropdown("productos")}
                className="flex justify-between p-2 hover:bg-gray-100"
              >
                Productos <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "productos" && (
                <motion.div className="ml-4 space-y-2">
                  <a href="/productos/web" className="block p-2 hover:bg-gray-100">Desarrollo Web</a>
                  <a href="/productos/tiendas" className="block p-2 hover:bg-gray-100">Tiendas Online</a>
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
                <motion.div className="ml-4 space-y-2">
                  <a href="/servicios/seo" className="block p-2 hover:bg-gray-100">SEO & Marketing</a>
                  <a href="/servicios/branding" className="block p-2 hover:bg-gray-100">Branding</a>
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
