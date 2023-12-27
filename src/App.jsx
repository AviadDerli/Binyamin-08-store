import { useState } from 'react';
import './App.css'
import Effect from './Effect'
import Layout from './Layout'

function App() {
  const [cntA, setCntA] = useState(49);

return (
  <div>
    <Layout/>
    {/* <Effect cntA={cntA} setCntA={setCntA}/> */}
  </div>
  )
}

export default App
