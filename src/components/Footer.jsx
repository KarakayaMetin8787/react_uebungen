import { useEffect, useState } from "react";
import "./Footer.css"

const Footer = () => {
const [darkmode, setDarkmode] = useState(false);

useEffect(() => {
    document.body.classList.toggle("dark", darkmode), document.body.querySelector("main").classList.toggle("dark", darkmode)
}, [darkmode]);

const text = (darkmode ? "Night" : "Day")
const text2 = (darkmode ? "change to Day" : "change to Night")

    return ( 
        <footer>
            <h1>{text}</h1>
            <button onClick={() => setDarkmode((darkmode) => !darkmode)}>{text2}</button>
        </footer>
     );
}
 
export default Footer;