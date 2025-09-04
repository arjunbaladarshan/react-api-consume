import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Subjects() {
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(true);

  console.log("Subject component re-rendered");
  
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students";

  useEffect(()=>{
    fetch(apiUrl)
    .then(res=>res.json())
    .then(res=>setData(res));
  },[isUpdate]);
  

  const foramtedData = data.map((sub, index)=>{
    return (
      <>
        <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
          <div class="item">
            <Link to={"/student/"+sub.id}><img src={sub.StudentImage} alt="" /></Link>
            <h4><Link to={"/student/"+sub.id}>{sub.StudentName}</Link></h4>
            <ul>
              <li>StudentRollNo: <span>{sub.StudentRollNo}</span></li>
              <li>StudentSemester: <span>{sub.StudentSemester}</span></li>
              
            </ul>
          </div>
        </div>
      </>
    );
  });

  return (
    <div class="section properties">
    <div class="container">
      <ul class="properties-filter">
        <li>
          <a class="is_active" href="#!" data-filter="*">Show All</a>
        </li>
        <li>
          <a href="#!" data-filter=".adv">Apartment</a>
        </li>
        <li>
          <a href="#!" data-filter=".str">Villa House</a>
        </li>
        <li>
          <a href="#!" data-filter=".rac">Penthouse</a>
        </li>
      </ul>
      <div className='row'>
        <div className='col'>
          <button onClick={()=>{
            setIsUpdate(!isUpdate);
          }} className='btn btn-info'>Refresh</button>
        </div>
      </div>
      <div class="row properties-box">
        {foramtedData}
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="pagination">
            <li><a href="#">1</a></li>
            <li><a class="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">{">>"}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Subjects