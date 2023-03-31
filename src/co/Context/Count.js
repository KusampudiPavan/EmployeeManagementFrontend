import React, { useContext } from 'react'
import { store } from './Context'

const Count = () => {
    // eslint-disable-next-line
    const [data,setdata] = useContext(store)
  return (
    <div>
        {data.length}
    </div>
  )
}

export default Count;