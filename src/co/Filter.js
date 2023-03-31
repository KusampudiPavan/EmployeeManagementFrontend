import { useState } from 'react'
import datas from './citydata.json'
//Search Filter
const Filter = () => {
  const [data,setdata] =useState('')
  const filterHandler = fh =>{
    setdata(fh.target.value)
  }

  return (
    <div>
      <center><br/>
        <input type='text' placeholder='Enter city' value={data} onChange={filterHandler}  autoFocus />
        {datas.filter(city => city.name.toLowerCase().includes(data.toLowerCase())).map(city => {
                                                                      return <div key={city.id}>
                                                                      {city.name}
                                                                      </div>
                                                                    }
        )}
      </center>
    </div>
  )
}

export default Filter;
