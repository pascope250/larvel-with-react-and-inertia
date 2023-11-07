import React, { useState } from 'react'
import { ScaleLoader } from 'react-spinners';
const crud = () => {
    const [selectedid, setselected] = useState();
const selectChild = async(e) => {

    const myselected = e.target.value;
    setselected(myselected);
    const response = await fetch('/chirps/crud/select');
    const data = await response.json();
    console.log(data);
}
  return (
    <div>
      <select name="" id="" onChange={selectChild} value={selectedid}>
        <option value="1">electronics</option>
        <option value="2">clothing</option>
      </select>
    </div>
  )
}

export default crud
