import React, { useState } from 'react';
import { Brain, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { docsService } from '../../api';

export const Docs: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);


    const handleDownloadPdf = async () => {
        try {
            setIsLoading(true);
            const result = await docsService.downloadPdf('mi-documento.pdf');
            if (!result.success) {
              console.error(result.error);
            }
        } catch (error) {
            console.error('Error al descargar PDF:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

            {/* Documentation Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extra</div>bold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Documentación</span>
                        <span className="block text-blue-600">XR AI</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Accede a toda la documentación técnica y guías de usuario de nuestra plataforma
                    </p>
                    <div className="mt-10">
                        <button
                            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
                            onClick={handleDownloadPdf}
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Descargar Documentación
                        </button>
                    </div>
                    <div className="mt-10">
                        <Link to="/docs" >
                        <button
                            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
                            onClick={handleDownloadPdf}
                        >
                            Ver documentacion en linea
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer with additional info */}
            <div className="bg-gray-50 mt-16">
                <div className="max-w-7xl mx-auto py-12 px-4 text-center">
                    <p className="text-gray-500">
                        Versión actual de la documentación: 1.0.0
                    </p>
                    <p className="text-gray-500 mt-2">
                        Última actualización: Octubre 2024
                    </p>
                </div>
            </div>
        </div>
    );
};