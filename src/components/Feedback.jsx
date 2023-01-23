import axios from 'axios'
import React from 'react'
import '../style/Feedback.css'
import { useState,useEffect } from 'react';

export default function Feedback() {
    const [review, setReview] = useState([]);
    const [error, setError] = useState("");
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
        .then((data)=>{
            setReview(data.data.data);
            setIndex(Math.floor(Math.random()*(data.data.data.length-2)));
        })
        .catch((error)=>setError(error.message))
    },[]);
  return (<>
    <div className="feedback">
        <h1>What Our Customer Say</h1>
        <div className="feedback-section">
            {error!==""?<h2 style={{textAlign:'center',width:'100%'}}>{error}</h2>:
            review.slice(index,index+2).map((data)=>{
                return <div className="review" key={data.ID}>
                    <span>''</span>
                    <p>{data.Reviews}</p>
                    <h4>{data.Name}</h4>
                    <h6>Patient</h6>
                </div>
            })}
        </div>
    </div>
  </>
  )
}
