import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function StudentDetail() {
  const { id } = useParams();
  const [data,setData] = useState({});

  useEffect(()=>{
    fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/"+id)
    .then(res=>res.json())
    .then(res=>setData(res));
  },[]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <img src={data.StudentImage} />
        </div>
        <div className='col'>
          <h1>{data.StudentName}</h1>
          <h3>Mobile: {data.StudentMobileNumber}</h3>
          <h4>StudentState: {data.StudentState}</h4>
          <Link to="/students" className='btn btn-primary'>Back</Link>
        </div>
      </div>
    </div>
  )
}

export default StudentDetail