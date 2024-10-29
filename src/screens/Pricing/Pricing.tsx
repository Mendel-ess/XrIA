import React, { useState } from "react";
import { PricingFeature, PricingPlan } from "../../types/global";
import { Check, X, Brain, AlertCircle } from 'lucide-react';

export const Pricing: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
    const pricingPlans: PricingPlan[] = [
      {
        name: 'Free',
        price: '0',
        description: 'Para profesionales individuales que quieren probar el sistema',
        buttonText: 'Comenzar Gratis',
        dailyQuota: 2
      },
      {
        name: 'Premium',
        price: billingPeriod === 'monthly' ? '49.99' : '479.99',
        description: 'Para clínicas y hospitales que necesitan análisis frecuentes',
        buttonText: 'Comenzar Premium',
        highlighted: true,
        dailyQuota: 20
      }
    ];
  
    const features: PricingFeature[] = [
      { name: 'Detección de anomalías en radiografías', free: true, premium: true },
      { name: 'Reportes básicos', free: true, premium: true },
      { 
        name: `Consultas diarias`, 
        free: true, 
        premium: true,
        tooltip: 'Free: 2 consultas/día, Premium: 20 consultas/día'
      },
      { name: 'Reportes detallados con áreas marcadas', free: false, premium: true },
      { name: 'Histórico de análisis', free: false, premium: true },
      { name: 'API Access', free: false, premium: true },
      { name: 'Soporte prioritario 24/7', free: false, premium: true },
      { name: 'Integración con sistemas hospitalarios', free: false, premium: true }
    ];
  
    const handleSubscribe = (planName: string): void => {
      console.log(`Subscribed to ${planName} plan`);
      // Implement subscription logic here
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">MediScan AI</h1>
          </div>
          <p className="mt-4 text-xl text-gray-600">
            Elija el plan perfecto para sus necesidades
          </p>
        </div>
  
        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md ${
                billingPeriod === 'monthly' 
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-gray-600'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 rounded-md ${
                billingPeriod === 'annual' 
                  ? 'bg-white shadow-sm text-blue-600' 
                  : 'text-gray-600'
              }`}
            >
              Anual
              <span className="ml-1 text-sm text-green-500">-20%</span>
            </button>
          </div>
        </div>
  
        {/* Pricing Cards */}
        <div className="mt-12 max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.highlighted 
                  ? 'border-2 border-blue-600 shadow-xl' 
                  : 'border border-gray-200 shadow'
              } p-8`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-sm font-semibold text-white">
                  Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/{billingPeriod === 'monthly' ? 'mes' : 'año'}</span>
              </div>
              <ul className="mb-6 space-y-4">
                {features.map((feature, index) => {
                  const included = plan.name === 'Free' ? feature.free : feature.premium;
                  return (
                    <li key={index} className="flex items-center gap-2">
                      {included ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300" />
                      )}
                      <span className="text-gray-600 flex items-center gap-2">
                        {feature.name}
                        {feature.tooltip && (
                          <div className="group relative">
                            <AlertCircle className="h-4 w-4 text-gray-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center">
                              {feature.tooltip}
                            </div>
                          </div>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div>
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full rounded-lg px-4 py-2 font-medium ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* FAQs or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            ¿Necesita un plan personalizado para su organización?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Contáctenos
            </a>
          </p>
        </div>
      </div>
    );
  };