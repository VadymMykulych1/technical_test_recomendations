import { Sidebar } from "@/components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
              {children}
            </div>
          </div>
        </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </>
    )
}