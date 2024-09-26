import { useState } from "react";
import MyButton from "./MyButton";

export default function Numero() {
const [counter, setCounter] = useState(0);

const handleIncrement = () => {
    setCounter(counter + 1)
}
const handleDecrement = () => {
    setCounter(counter - 1)
}


    return (
        <div className="container">
            <MyButton 
            onClickDecrement={handleDecrement}
            text={counter}
            onClickIncrement={handleIncrement}
             />
        </div>
    )
}