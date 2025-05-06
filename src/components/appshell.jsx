import Footer from "./footer";
import Headers from "./headers";

export default function Appshell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      {children}
      <Footer />
    </div>
  );
}
