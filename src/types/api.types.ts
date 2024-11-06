export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface RegisterRequest {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    role: 'free' | 'premium' | 'admin';
}

export interface RegisterResponse {
    id: string;
    username: string;
    email: string;
}

export interface PDFResponse {
    success: boolean;
    error?: string;
    blob?: Blob;
  }
  