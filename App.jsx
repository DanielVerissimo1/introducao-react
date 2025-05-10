// quando for criar um componente sempre a primeira letra e maiuscula
// import {Hello} from "./components/Hello.jsx" 
import Greeting from "./components/Greeting.jsx"
import Hello from "./components/Hello.jsx" 
import JsxExample from "./components/JsxExample.jsx"
import Welcome from "./components/Welcome.jsx"


export function App() {

    return (
    <div className="App">
        <h1>olá, mundo!</h1>
        <Hello nome={"Daniel"}/>
        <JsxExample/>
        <Welcome nome={"Daniel"}/>
        <Greeting name="tin" age={81}/>

    </div>
    )
}