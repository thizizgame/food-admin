import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex bg-secondary gap-4">
            <Sidebar />
            <div>
                <Header />
                {children}
            </div>

        </div>
    )
}
