;
import { Link, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="font-sans p-5">
      <h1 className="text-2xl font-bold mb-4"> React Router - Projeto de Estudos</h1>

      {/* Navegação básica */}
      <nav className="mb-5 p-3 bg-gray-100 rounded">
        <Link to="/" className="mr-3 text-blue-600 hover:underline">Home</Link> |{" "}
        <Link to="/about" className="mx-3 text-blue-600 hover:underline">Sobre</Link> |{" "}
        <Link to="/user/123" className="mx-3 text-blue-600 hover:underline">Usuário 123</Link> |{" "}
        <Link to="/contact" className="mx-3 text-blue-600 hover:underline">Contato</Link> |{" "}
        <Link to="/layout" className="ml-3 text-blue-600 hover:underline">Layout</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/layout/*" element={<Layout />} />
        </Routes>
      </main>
    </div>
  );
}
