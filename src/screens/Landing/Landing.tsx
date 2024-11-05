import React from 'react';
import { Activity, Brain, Upload, Shield, ChevronRight } from 'lucide-react';
import { Feature, NavLink } from '../../types/global';
import { Link, useNavigate } from 'react-router-dom';


export const Landing: React.FC = () => {
  const navigate = useNavigate();
    // Navigation links data
  const navLinks: NavLink[] = [
    { text: 'Inicio', href: '/' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Objetivos', href: '/goals' },
    { text: 'Documentacion', href: '/docs' }
  ];

  // Features data
  const features: Feature[] = [
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: 'Precisión Superior',
      description: '99% de precisión en la detección de anomalías torácicas comunes.'
    },
    {
      icon: <Upload className="h-6 w-6 text-blue-600" />,
      title: 'Análisis Instantáneo',
      description: 'Resultados en segundos con informes detallados y recomendaciones.'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Seguridad Garantizada',
      description: 'Datos encriptados y cumplimiento con estándares médicos internacionales.'
    }
  ];

  const handleLogin = (): void => {
    navigate('/login');
  };

  const handleGetStarted = (): void => {
    navigate('/login');
  };


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Navigation */}
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">XR AI</span>
                </div>
                <div className="hidden md:flex space-x-8">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {link.text}
                    </Link >
                  ))}
                </div>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  onClick={handleLogin}
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Detección Inteligente de</span>
                <span className="block text-blue-600">Enfermedades Torácicas</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Tecnología de vanguardia en inteligencia artificial para el análisis preciso de radiografías de tórax.
                Detección temprana para mejores resultados.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <button 
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    onClick={handleGetStarted}
                  >
                    Comenzar
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
    
          {/* Features Section */}
          <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-gray-500">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
        </div>
      );
}