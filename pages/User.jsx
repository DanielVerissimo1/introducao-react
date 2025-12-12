import { useParams } from "react-router";

export default function User() {
  const { id } = useParams();

  return (
    <div className="p-5 bg-orange-50 rounded-lg">
      <h1>Usuário: {id}</h1>
      <p>Esta é uma rota dinâmica que recebe parâmetros!</p>

      <div className="mt-5 p-3 bg-gray-50 rounded">
        <h3>Como funciona:</h3>
        <ul>
          <li>Rota definida como: <code>/user/:id</code></li>
          <li>Hook <code>useParams()</code> extrai o parâmetro</li>
          <li>ID atual: <strong>{id}</strong></li>
        </ul>
      </div>

      <p className="mt-4">
        <strong>Teste:</strong> Mude o número na URL para ver a mudança!<br/>
        Exemplo: /user/456, /user/daniel, /user/react
      </p>
    </div>
  );
}
