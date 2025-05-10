import "../style.css"

export default function JsxExample({nome}) {
    const name = "React"
    const user = {
        fistname: 'Maria',
        lastName: 'Silva',

    }
    return(
        <div className="divJsx">
            <h2>Exemplo JSX</h2>
            <p>Olá, {nome} </p>
            <p>
                usuario: {user.fistname} {user.lastName}
            </p>
            <p>2 + 2 = {2+2}</p>
        </div>
    )
}
