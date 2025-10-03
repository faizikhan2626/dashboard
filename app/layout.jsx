import "./globals.css";
import Sidebar from "../components/sidebar.jsx";

export const metadata = {
  title: "Dashboard",
  description: "Worker management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="ml-68 w-screen p-6">{children}</main>
      </body>
    </html>
  );
}
