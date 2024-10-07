import React, { useState } from 'react'
import { DecrementAction, IncrementAction } from '../action'
import {connect} from "react-redux"

const Counter = ({value,IncrementAction,DecrementAction}) => {
    // const [count, setcount] = useState(2); not needed because we have managed the state centrally usin redux
  return (
    <>
    <h1>Counter App</h1>
    <h3>Number : {value}</h3>
     <button onClick={IncrementAction}>
      Increment by 1
      </button><br />
      <button onClick={DecrementAction}>
      Decrement by 1
      </button><br />
    </>
  )
}
// mapping function for state

const mapStateToprops=(state)=>({value:state})

// mapping function for actions

const mapDispatchToProps={
  IncrementAction,
  DecrementAction
}


export default connect(mapStateToprops,mapDispatchToProps)(Counter)