import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './index.css'
import 'aos/dist/aos.css'
import FacepalmApp from './projects/facepalm/FacepalmApp'


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/projects/facepalm' element={<FacepalmApp />} />
        </Routes>
    </BrowserRouter>,
    document.querySelector("#root")

)