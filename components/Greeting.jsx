export default function Greeting(props) {// quando for objeto nao precisa colocar {}
    return (
        <p>Olá, {props.name}! Sua idade é {props.age}</p>
    )
    
}