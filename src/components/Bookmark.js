import React from 'react'

export default function Bookmark(props) {

  const {savedItems, onSave} = props
  return (
    <div>

     <h1>This is the bookmarked items</h1>

     <div>
      {props.savedItem.length === 0 && <h1> No items Bookamrked</h1>  }
     </div>

     {
      savedItems.map((ele) =>{
        <div key = {ele.url}>

          
        </div>
      })
     }

    </div>
  )
}
