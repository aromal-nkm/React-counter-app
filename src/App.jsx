import { useState } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Counter from './Component/Counter'

function App() {
  // const [count, setcount] = useState(2);     //hooks in react(useState is the hook here)- to hold or support the variables  setCount-setmanagers

  return (
    <>
    

        <Provider store={store}>
        <Counter/>
        </Provider>
    </>
  )
}

export default App