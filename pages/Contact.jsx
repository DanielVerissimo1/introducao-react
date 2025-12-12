import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  function handleSend() {
    alert("Mensagem enviada! Redirecionando...");
    navigate("/about");
  }

  function goToUser() {
    const userId = Math.floor(Math.random() * 1000);
    navigate(`/user/${userId}`);
  }

  function goBack() {
    navigate(-1); // Volta uma pagina no historico
  }

  return (
    <div className="p-5 bg-purple-50 rounded-lg">
      <h1>Contato</h1>
      <p>Exemplo de navegação programática com <code>useNavigate()</code></p>

      <div className="mt-5">
        <h3>Teste os botões:</h3>

        <button
          onClick={handleSend}
          className="px-4 py-2 m-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
           Enviar e ir para Sobre
        </button>

        <button
          onClick={goToUser}
          className="px-4 py-2 m-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
         Ir para usuário aleatório
        </button>

        <button
          onClick={goBack}
          className="px-4 py-2 m-1 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          ⬅️ Voltar
        </button>
      </div>

      <div className="mt-5 p-3 bg-gray-50 rounded">
        <h4> Métodos de navegação:</h4>
        <ul>
          <li><code>navigate("/about")</code> - Navega para uma rota específica</li>
          <li><code>navigate(-1)</code> - Volta uma página no histórico</li>
          <li><code>navigate(1)</code> - Avança uma página no histórico</li>
        </ul>
      </div>
    </div>
  );
}
