import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'first_name':
                return value.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
            case 'last_name':
                return value.length < 2 ? 'El apellido debe tener al menos 2 caracteres' : '';
            case 'username':
                return !/^[a-zA-Z0-9_]{4,20}$/.test(value) 
                    ? 'El usuario debe tener entre 4 y 20 caracteres alfanuméricos' : '';
            case 'email':
                return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? 'Ingrese un correo electrónico válido' : '';
            case 'password':
                return !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)
                    ? 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número' : '';
            case 'confirmPassword':
                return value !== formData.password ? 'Las contraseñas no coinciden' : '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        setErrors(prev => ({
            ...prev,
            [name]: validateField(name, value),
            ...(name === 'password' ? {
                confirmPassword: validateField('confirmPassword', formData.confirmPassword)
            } : {})
        }));
    };

    const isFormValid = () => {
        return Object.values(errors).every(error => error === '') &&
               Object.values(formData).every(value => value !== '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) return;
        
        setIsLoading(true);
        
        try {
            const payload = {
                username: formData.username,
                email: formData.email,
                first_name: formData.first_name,
                last_name: formData.last_name,
                password: formData.password,
                role: 'free'
            };

            console.log('Registration payload:', payload);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderInput = (
        id: string,
        label: string,
        type: string,
        placeholder: string,
        Icon: React.ElementType
    ) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange}
                    className={`pl-10 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors[id as keyof typeof errors] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={placeholder}
                />
            </div>
            {errors[id as keyof typeof errors] && (
                <p className="mt-1 text-sm text-red-500">{errors[id as keyof typeof errors]}</p>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-md mx-auto px-4 py-16">
                <div className="bg-white shadow-xl rounded-lg p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Crear Cuenta
                        </h1>
                        <p className="mt-2 text-gray-600">
                            Únete a XR AI
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {renderInput('first_name', 'Nombres', 'text', 'Juan', User)}
                        {renderInput('last_name', 'Apellidos', 'text', 'Pérez', User)}
                        {renderInput('username', 'Nombre de usuario', 'text', 'juanperez', User)}
                        {renderInput('email', 'Correo Electrónico', 'email', 'usuario@ejemplo.com', Mail)}
                        {renderInput('password', 'Contraseña', 'password', '••••••••', Lock)}
                        {renderInput('confirmPassword', 'Confirmar Contraseña', 'password', '••••••••', Lock)}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading || !isFormValid()}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creando cuenta...
                                    </span>
                                ) : (
                                    'Crear Cuenta'
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
