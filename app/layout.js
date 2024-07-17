import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "Olamilekan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <div>
          <Navbar />
        </div>
      </body>
    </html>
    
  );
}
