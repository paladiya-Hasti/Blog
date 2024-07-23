import React, { useState } from "react";
import './App.css'

const Blog = () => {
  let [title, settitle] = useState("");
  let [imga, setimga] = useState("");
  let [content, setcontent] = useState("");
  let [date, setdate] = useState("");
  let[list,setlist]=useState([])

  const handledata=(e)=>{
    e.preventDefault()
    let data={
        title:title,
        imga:imga,
        content:content,
        date:date,
    }
    setlist([...list,data])
    console.log(list);
  }

  return (
    <div>
      <h2>Blog</h2>
      <form onSubmit={handledata} className="box">
      
        <label>title : </label>
        <input type="text" onChange={(e)=>settitle(e.target.value)} />
        <br></br>
        <br></br>
        <label>img : </label>
        <input type="text" onChange={(e)=>setimga(e.target.value)} />
        <br></br>
        <br></br>
        <label>content : </label>
        <input type="text" onChange={(e)=>setcontent(e.target.value)} />
        <br></br>
        <br></br>
        <label>date : </label>
        <input type="date" onChange={(e)=>setdate(e.target.value)} />
        <br></br>
        <br></br>
        <button>submit</button>
       <div className="box3">
       {
            list.map((ele)=>(
                <div className="box1">
                    <p>Title : {ele.title}</p>
                    <img src={ele.imga}  className="pic" />
                    <p>Content : {ele.content}</p>
                    <p>Date : {ele.date}</p>
                    <button className="btn">DELETE</button>
                </div>
            ))
        }
       </div>
      </form>
    </div>
  );
};

export default Blog;
