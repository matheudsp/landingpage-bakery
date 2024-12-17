import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-64 bg-yellow-400 p-6">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-black" />
        </button>
        <nav className="flex flex-col space-y-4 mt-12">
          <a href="#products" onClick={onClose} className="text-black hover:text-yellow-700 transition">
            Produtos
          </a>
          <a href="#kits" onClick={onClose} className="text-black hover:text-yellow-700 transition">
            Kits
          </a>
          <a href="#about" onClick={onClose} className="text-black hover:text-yellow-700 transition">
            Sobre
          </a>
          <a href="#contact" onClick={onClose} className="text-black hover:text-yellow-700 transition">
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
};