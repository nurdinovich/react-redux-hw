import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Corel, Header, Items, Main, Skech } from "./pages"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route >
          <Route  path="/" element={<Main/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/corel" element={<Corel/>}/>
          <Route path="/skech" element={<Skech/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App