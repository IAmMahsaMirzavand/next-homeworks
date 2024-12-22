import "./globals.css";
import Header from "../components/Header.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  style={{ backgroundColor: '#bbdefb' }}>
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
