import { apiInstance } from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoints";

interface PDFResponse {
  success: boolean;
  error?: string;
  blob?: Blob;
}

class DocsService {
  private readonly defaultFilename = 'document.pdf';
  
  async getPdf(): Promise<PDFResponse> {
    try {
      const response = await apiInstance.get(API_ENDPOINTS.DOCS.PDF, {
        responseType: 'blob',
        headers: {
          'Accept': '*/*',  // Aceptar cualquier tipo de contenido
          'Content-Type': 'application/pdf',
        },
      });
      
      // Verificar si la respuesta es un blob
      if (response.data instanceof Blob) {
        return {
          success: true,
          blob: response.data
        };
      }
      
      return {
        success: false,
        error: 'Invalid response format'
      };
      
    } catch (error) {
      console.error('Error fetching PDF:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async downloadPdf(filename: string = this.defaultFilename): Promise<PDFResponse> {
    try {
      const result = await this.getPdf();
      
      if (!result.success || !result.blob) {
        throw new Error(result.error || 'Failed to get PDF');
      }

      // Crear el blob URL
      const url = window.URL.createObjectURL(
        new Blob([result.blob], { type: 'application/pdf' })
      );
      
      // Crear y configurar el elemento de enlace
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      
      // Añadir al DOM, hacer clic y limpiar
      document.body.appendChild(link);
      link.click();
      
      // Limpieza después de un pequeño delay
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);

      return { success: true };
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to download PDF'
      };
    }
  }
}

export const docsService = new DocsService();