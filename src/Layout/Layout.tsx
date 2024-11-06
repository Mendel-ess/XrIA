import { Header } from "../components/Header/Header";
import { LayoutProps } from "../types/components";



export const Layout = ({ children }: LayoutProps) => {
    return(
        <div className="min-h-screen">
            <Header />
            {children}
        </div>
    );
}