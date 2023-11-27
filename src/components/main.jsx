import { useState } from "react";
import "./main.css"

const Main = () => {
    let [count, setCount] = useState(0);
    const [vorname, setVorname] = useState(""); 
    const [nachname, setNachname] = useState(""); 
    const [email, setEmail] = useState(""); 

    const plusEins = () => {
        setCount(count + 1)
    }

    const minusEins = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(count = 0)
    }

    return ( 
        <main>
            <button onClick={plusEins}>+</button>
            <p>{count}</p>
            <button onClick={minusEins}>-</button>
            <button onClick={reset}>Reset</button>
            <form>
                <input 
                type="text" 
                placeholder="Vorname"
                onChange={(event) => setVorname(event.target.value)}
                value={vorname}
                />
                <input 
                type="text" 
                placeholder="Nachname"
                onChange={(event) => setNachname(event.target.value)}
                value={nachname}
                />
                <input 
                type="text" 
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                />
                <p>Vorname: {vorname}</p>
                <p>Nachname: {nachname}</p>
                <p>Email: {email}</p>
            </form>
        </main>
     );
}
 
export default Main;