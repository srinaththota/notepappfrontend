import React from 'react';
const Messages=(props)=>{
    return(
       <div>
    
    <p onClick={props.clicked}>{props.message} falls in category {props.category} </p></div>
    )
}
export default Messages;