import React from 'react';
import './Scroll.css';

function Scroll(props) {
  

  return(
    <> 
      {/* <div className="clss"> */}
      
      <a href={props.newsUrl} target = '_blank' className="detail">{props.title}</a>

      
      {/* </div> */}

        
    </>

  )
}

export default Scroll;