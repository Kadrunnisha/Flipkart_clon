import  ReactDOM  from "react-dom";
import "./index.css";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    // <h1>hi</h1>,
    <BrowserRouter>
<     App></App>
    </BrowserRouter>,
    
    document.getElementById('root')
)