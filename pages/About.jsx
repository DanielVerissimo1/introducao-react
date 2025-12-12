import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    console.log('About.jsx: componente montado');
  }, []);



  return (
    <div className="p-5 bg-blue-50 rounded-lg">
      <h1>Página Sobre</h1>
      <p>Aqui você pode aprender sobre React Router!</p>
      <h3>Conceitos importantes:</h3>
      <ul>
        <li><strong>BrowserRouter:</strong> Componente que habilita o roteamento</li>
        <li><strong>Routes:</strong> Container para todas as rotas</li>
        <li><strong>Route:</strong> Define uma rota específica</li>
        <li><strong>Link:</strong> Navegação sem recarregar a página</li>
      </ul>
    </div>
  );
}
