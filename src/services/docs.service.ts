// docs.service.ts
import { apiInstance } from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoints";

class DocsService {
    async getPdf(): Promise<Blob> {
        try {
            const response = await apiInstance.get(API_ENDPOINTS.DOCS.PDF, {
                responseType: 'blob',
                headers: {
                    'Accept': 'application/pdf',
                },
            });
            
            if (response.status === 200) {
                return response.data;
            }
            throw new Error('Failed to fetch PDF');
        } catch (error) {
            console.error('Error fetching PDF:', error);
            throw error;
        }
    }

    async downloadPdf(filename: string = 'document.pdf'): Promise<void> {
        try {
            const pdfBlob = await this.getPdf();
            const url = window.URL.createObjectURL(new Blob([pdfBlob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            
            // Limpieza
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            throw error;
        }
    }
}

export const docsService = new DocsService();