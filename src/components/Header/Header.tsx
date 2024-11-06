import { NavLink } from "../../types/global";
import { Link,useNavigate  } from 'react-router-dom';
import {Brain} from 'lucide-react';


export const Header = () => {
  const navigate = useNavigate();
    const navLinks: NavLink[] = [
        { text: 'Inicio', href: '/' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Objetivos', href: '/goals' },
        { text: 'Documentacion', href: '/docs' }
      ];
    const handleLogin = (): void => {
        navigate('/login');
      };
    return (
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
    );
}