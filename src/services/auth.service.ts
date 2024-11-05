import { apiInstance } from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoints";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../types/api.types";

class AuthService {
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        const response = await apiInstance.post<LoginResponse>(
            API_ENDPOINTS.AUTH.LOGIN, 
            credentials
        );
        return response.data;
    }

    async register(userData: RegisterRequest): Promise<RegisterResponse> {
        const response = await apiInstance.post<RegisterResponse>(
            API_ENDPOINTS.AUTH.REGISTER,
            userData
        );
        return response.data;
    }
}

export const authService = new AuthService();