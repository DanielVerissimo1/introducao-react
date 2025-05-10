export default function Welcome({nome}) {
    const dia  = new Date().toLocaleDateString('pt-BR',{weekday:'long'}) ;
    return(
        <div>
            <h2>Bem vindo, {nome}!</h2>
            <p>Hoje é {dia}</p>
        </div>
        
    )
}