import './App.css';
import { useRoutes } from 'react-router-dom';
import {routers} from "./router/routers";


function App() {
  return useRoutes(routers);
}

export default App;
