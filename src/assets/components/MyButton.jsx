import Botoes from "../css/Botoes.css"
export default function MyButton({onClickDecrement, onClickIncrement, text}){
    return(
        <div className="MyButton">
        <button onClick={onClickDecrement}>-</button>
        <h1>{text}</h1>
        <button onClick={onClickIncrement}>+</button>
        </div>
    )
}