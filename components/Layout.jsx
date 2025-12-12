import { Outlet, Link } from "react-router";

export default function Layout() {
  return (
    <div className="border border-gray-200 rounded-lg p-5">
      <h2>Layout Component</h2>
      <p>Este é um layout que envolve outras páginas!</p>

      <nav className="p-2 bg-gray-100 rounded mb-5">
        <strong>Navegação do Layout:</strong><br/>
        <Link to="/layout" className="mr-3 text-blue-600 hover:underline">Início do Layout</Link> |{" "}
        <Link to="/layout/sobre" className="ml-3 text-blue-600 hover:underline">Sobre no Layout</Link>
      </nav>

      <hr className="my-5" />

      {/* Aqui é onde as rotas filhas aparecem */}
      <div className="p-4 bg-gray-50 rounded min-h-[100px]">
        <h3>Conteúdo da rota filha:</h3>
        <Outlet />
      </div>

      <div className="mt-4 text-sm text-gray-600">
         <strong>Como funciona:</strong> O componente <code>&lt;Outlet /&gt;</code> é onde as rotas filhas são renderizadas!
      </div>
    </div>
  );
}
