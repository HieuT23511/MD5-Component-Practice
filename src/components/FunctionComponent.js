import {useState} from "react";

export default function FunctionComponent(props) {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [total, setTotal] = useState(null)
    return (
        <>
            <h1>{props.title}</h1>
            Number 1: <input type="number" onChange={(event) =>
            setInput1(event.target.value)}
        />
            <br/>
            Number 2: <input type="number" onChange={(event) =>
            setInput2(event.target.value)}
        />
            <br/>
            <button onClick={()=>{
                setTotal(Number(input1)+ Number(input2))
            }
            }>Total</button>
            <p>The result is: {total}</p>
        </>
    )
}
