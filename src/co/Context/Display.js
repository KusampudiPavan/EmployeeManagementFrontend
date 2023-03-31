import React, { useContext } from 'react'
import { store } from './Context'

const Display = () => {
    // eslint-disable-next-line
    const [data,setdata] = useContext(store)
  return (
    <div>
        {data.map(d => <h5>{d.Brandname}</h5>)}
    </div>
  )
}

export default Display;