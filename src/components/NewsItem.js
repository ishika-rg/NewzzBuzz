import React, { useState } from "react";
import "./NewsItem.css";

export default function NewsItem(props) {

  const {onSave} = props

  const [style, setStyle] = useState('btn1');
  const [text, setText] = useState('Save');


  // const [savedItem, setSavedItem] = useState([])


  const saveClickHandler = () => {
    console.log("add to bookmark");
    setStyle('btn1Saved');
    setText('Saved!');
    onSave()

    // console.log(props.title)


  }
  return (
    <>
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className= "badgeDiv">
        <span className="badge rounded-pill ">
          {props.source.name}
        </span>
        </div>

        <img
          className="card-img-top img-fluid"
          src={!props.imgUrl?"https://images.moneycontrol.com/static-mcnews/2021/06/RBI_shutterstock_1686527644-770x433.jpg": props.imgUrl}
          alt="img"
        />

        <div className="card-body">
          <h6 className="card-title mb-2">{props.title}...</h6>

          {/* <p className="card-text">{props.des}... </p> */}
          <p className=" author text-muted mb-1">
            By <strong>{!props.author ? "Anonymous" : props.author}</strong> on{" "}
            {new Date(props.date).toGMTString()}{" "}
          </p>

          <div className="buttons d-flex justify-content-between mt-2">

            <a href={props.newsUrl}
                target="_blank"
                className="btn1  ">
                Read More </a>
           

            <div className= {style} onClick={onSave} >{text}</div>

          </div>


        </div>
      </div>
    </>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"/></svg> */
}
