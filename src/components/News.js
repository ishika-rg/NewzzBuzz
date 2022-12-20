import React, { useState } from 'react'
import NewsItem from './NewsItem';
import { useEffect } from 'react';
import './NewsItem.css';
import Scroll from './Scroll';
import Carousel from './Carousel';
import Spinner from './Spinner';



import './Navbar.css';
   



const pageNum = 1;

export default function News(props) {

    //const [article, setArticle] = useState(articles)
      const {onSave, category}   = props
      const [error, setError] = useState(null);
      const [isLoaded, setIsLoaded] = useState(true);
      const [items, setItems] = useState([]);
      const [page, setPage] = useState(pageNum);

      const [theme, setTheme] = useState('light')


      // const [savedItem, setSaveItem] = useState([]);

      // const addToSavedItems = (items) => {
      //   console.log(items)
      // }
 

      // const [style, setStyle] = useState('btn1');
      // const [text, setText] = useState('Save')
    
      // const saveClickHandler = (items) => {
      //   console.log("add to bookmark");
      //   // setStyle('btn1Saved');
      //   // setText('Saved!')

      //   console.log(items)
      // }
     

      useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=75f46fbcfb05462995663801dd158d86&page=${page}&pageSize=30`)
       
        .then((res) =>
          res.json()
           
        )
        .then((data) => {
          setIsLoaded(false)
          setItems(data.articles)
          console.log(data);
          //console.log(items[0].title)
        },
         (error) => {
           //setIsLoaded(true)
           setError(error)
         })
      
        
      }, [page])
      const previousHandler = () => {
        console.log('previous button clicked')
      } 
      
      const NextHandler = () => {
        console.log('next button clicked');

        

      } 
      
      // const scrollToEnd = () => {
      //   setPage(page + 1);
      // }
      // window.onscroll = function(){
      //   //check if the page has scrolled to the bottom

      //   if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      //     //console.log('bottom of pafe reached')
      //     scrollToEnd();
      //   }
      // }



  
      if (error) {
        return <div className='errMsg mt-5'>
          <h4 className='pt-3'>Something seems wrong</h4>
          <h1 className='pt-3'>Try Again !!!!</h1>
          </div>;
      }else{

     

        return (
          <>

          <div className={`scroll ${theme}`}>
            <div className="view">
              <div className="tag">
                <div>BREAKING</div>
              </div>
              <div className="headlines">
                  <div className="tags">
                      {
                           Array.from(items).map((ele) => {
                          return( 
                            
                            <Scroll title = {ele.title} newsUrl = {ele.url} key = {ele.url}></Scroll>

                          
 
                          )
                        })
                      }
                  </div>
              </div>
            </div>
          </div>
          
            
            
            {/* <Carousel></Carousel> */}



          <div className='container my-3 '>
              <h2>NewzzBuzz - {`${category === 'general'?'Top-Headlines':category===""?"Top headlines":category.charAt(0).toUpperCase()+category.slice(1)}`}</h2>

            {/* //Adding spinner on loading data */}

              {isLoaded?<Spinner></Spinner>:""}

            
            
              <div className="row">
               
                 { Array.from(items).map((ele) => {
                   return(
                    <div className= "col-12 col-md-4" key = {ele.url}>
      
                    <NewsItem onSave = {onSave} title = {ele.title?ele.title.slice(0, 70):""} imgUrl = {ele.urlToImage}
                        newsUrl = {ele.url} author = {ele.author} date= {ele.publishedAt}
                        source = {ele.source} ele = {ele} ></NewsItem>
                                 
                   </div>
                   )
                 })}
                
              </div>

              {/* <div className="pagination p-5">
                 <button type="button" className="btn btn-dark previous" onClick={previousHandler} >
                   &#8592; Previous </button>
                 <button type="button" className="btn btn-dark next" onClick ={NextHandler}>
                   Next &#8594; </button>
              </div>
       */}
      
      
           </div>

           </>
        )
  
          }
}



 // { Array.from(items).map((ele) => {
              //      console.log(ele)
              //      return(
              //            <div className=" col-12 col-md-4" key = {ele.url}>
      
              //                 <NewsItem  title = {ele.title} imgUrl = {ele.urlToImage}
              //                  newsUrl = {ele.url}></NewsItem>
                               
              //            </div>
                    
              //      )
              //    })}
      
                