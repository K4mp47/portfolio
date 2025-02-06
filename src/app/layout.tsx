import Footer from "./components/Footer/footer";
import MouseComponent from "./components/Mouse/mouse";
import NavBar from "./components/NavBar/navbar";
import ScrollToTop from "./components/ScrollController/scrollcontroller";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
      id="cv"
      className="bg-slate-950 text-slate-100" 
      >
        <ScrollToTop />
        <NavBar />
        <MouseComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
