import React, { useState } from 'react';
import { 
    Target, 
    Search, 
    Clock, 
    TrendingUp, 
    ShieldCheck, 
    Microscope,
    ChevronDown,
    Brain,
    HeartPulse,
    Stethoscope,
    Activity
  } from 'lucide-react';
import { Disease, Objective } from '../../types/global';

export const Goals: React.FC = () => {
    const [openObjective, setOpenObjective] = useState<number | null>(null);
  
    const mainObjectives: Objective[] = [
      {
        icon: <Search className="w-6 h-6" />,
        title: "Detección Temprana",
        description: "Identificación precoz de anomalías y patologías",
        details: [
          "Análisis instantáneo de radiografías de tórax",
          "Detección de patrones sutiles que podrían pasar desapercibidos",
          "Alertas tempranas para intervención oportuna",
          "Seguimiento de cambios en el tiempo"
        ],
        accuracy: "98%"
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Eficiencia Mejorada",
        description: "Optimización del tiempo de diagnóstico",
        details: [
          "Resultados en menos de 60 segundos",
          "Priorización automática de casos urgentes",
          "Reducción de la carga de trabajo manual",
          "Procesamiento simultáneo de múltiples imágenes"
        ]
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Precisión Diagnóstica",
        description: "Alta precisión respaldada por IA avanzada",
        details: [
          "Algoritmos entrenados con millones de imágenes",
          "Validación por expertos médicos",
          "Actualización continua del modelo",
          "Reducción de falsos positivos y negativos"
        ],
        accuracy: "99%"
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Seguridad y Cumplimiento",
        description: "Protección de datos y estándares médicos",
        details: [
          "Cumplimiento con HIPAA y GDPR",
          "Encriptación de extremo a extremo",
          "Auditorías de seguridad regulares",
          "Respaldo seguro de datos"
        ]
      },
      {
        icon: <Microscope className="w-6 h-6" />,
        title: "Análisis Avanzado",
        description: "Capacidades analíticas superiores",
        details: [
          "Mediciones precisas de anomalías",
          "Comparación con casos históricos",
          "Análisis de tendencias temporales",
          "Generación de informes detallados"
        ],
        accuracy: "97%"
      }
    ];
  
    const diseases: Disease[] = [
      {
        name: "Neumonía",
        description: "Detección temprana de infiltrados y consolidaciones pulmonares",
        accuracy: "97%",
        icon: <Activity className="w-6 h-6" />
      },
      {
        name: "Tuberculosis",
        description: "Identificación de patrones característicos de TB",
        accuracy: "96%",
        icon: <Stethoscope className="w-6 h-6" />
      },
      {
        name: "COVID-19",
        description: "Reconocimiento de patrones típicos de COVID-19",
        accuracy: "95%",
        icon: <HeartPulse className="w-6 h-6" />
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <Target className="w-12 h-12 text-blue-600 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Objetivos y Capacidades
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Nuestra inteligencia artificial está diseñada para revolucionar el diagnóstico médico
            a través de tecnología de vanguardia en análisis de imágenes.
          </p>
        </div>
  
        {/* Main Objectives Grid */}
        <div className="mt-16 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mainObjectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setOpenObjective(openObjective === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {objective.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {objective.title}
                    </h3>
                    {objective.accuracy && (
                      <span className="text-sm text-green-600 font-medium">
                        Precisión: {objective.accuracy}
                      </span>
                    )}
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openObjective === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="mt-2 text-gray-600">{objective.description}</p>
                
                {/* Expandable details */}
                <div className={`mt-4 space-y-2 ${openObjective === index ? 'block' : 'hidden'}`}>
                  {objective.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <p className="text-sm text-gray-600">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Diseases Detection Section */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Enfermedades Detectables
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {diseases.map((disease, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {disease.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{disease.name}</h3>
                </div>
                <p className="text-gray-600 mb-3">{disease.description}</p>
                <div className="text-sm font-medium text-green-600">
                  Precisión: {disease.accuracy}
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-20 text-center bg-blue-600 rounded-xl max-w-4xl mx-auto p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para mejorar sus diagnósticos?
          </h2>
          <p className="mb-6">
            Únase a los miles de profesionales que ya confían en nuestra tecnología
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Comenzar Ahora
          </button>
        </div>
      </div>
    );
  };