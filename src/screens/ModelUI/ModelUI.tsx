import React, { useState, useCallback } from 'react';
import { Upload, AlertCircle, Check, Loader2, ImageIcon } from 'lucide-react';
import { AnalysisResult } from '../../types/global';

export const ModelUI = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
    }, []);
  
    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);
  
    const handleDrop = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      setError(null);
  
      const file = e.dataTransfer.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          setError('Por favor, sube únicamente archivos de imagen.');
          return;
        }
        handleImageUpload(file);
      }
    }, []);
  
    const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      const file = e.target.files?.[0];
      if (file) {
        handleImageUpload(file);
      }
    }, []);
  
    const handleImageUpload = (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
  
      // Simulación de envío al backend
      setIsLoading(true);
      // Aquí iría la llamada real al backend
      setTimeout(() => {
        setResult({
          disease: 'Neumonía',
          confidence: 95.8,
          description: 'Se detectan opacidades en el lóbulo inferior derecho consistentes con neumonía bacteriana.'
        });
        setIsLoading(false);
      }, 2000);
    };
  
    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Área de carga de imagen */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Cargar Radiografía</h2>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            } transition-colors duration-200`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {selectedImage ? (
              <div className="space-y-4">
                <img
                  src={selectedImage}
                  alt="Radiografía cargada"
                  className="max-w-full h-auto mx-auto"
                />
                <p className="text-sm text-gray-500">
                  Arrastra una nueva imagen para cambiarla
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="w-12 h-12 mx-auto text-gray-400" />
                <p className="text-lg font-medium">
                  Arrastra y suelta tu radiografía aquí
                </p>
                <p className="text-sm text-gray-500">
                  o
                </p>
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileInput}
                  />
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 inline-flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Seleccionar archivo
                  </span>
                </label>
              </div>
            )}
          </div>
  
          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <p>{error}</p>
            </div>
          )}
        </div>
  
        {/* Área de resultados */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Resultados del Análisis</h2>
          <div className="h-full">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-64 space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                <p className="text-gray-500">Analizando radiografía...</p>
              </div>
            ) : !selectedImage ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <AlertCircle className="w-12 h-12 mb-4" />
                <p>Carga una radiografía para ver los resultados</p>
              </div>
            ) : result ? (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-green-600">
                  <Check className="w-6 h-6" />
                  <span className="text-lg font-medium">Análisis completado</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Diagnóstico:</h3>
                    <p className="text-xl font-bold text-blue-600">{result.disease}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">Confianza:</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${result.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{result.confidence}%</span>
                    </div>
                  </div>
  
                  <div>
                    <h3 className="text-lg font-medium">Descripción:</h3>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  