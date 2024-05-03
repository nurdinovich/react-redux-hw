import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Corel, Items, Main, Skech } from "./pages"
import { Posts, PostsDetails } from "./componens"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route >
          <Route  path="/" element={<Main/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/corel" element={<Corel/>}/>
          <Route path="/skech" element={<Skech/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostsDetails/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App