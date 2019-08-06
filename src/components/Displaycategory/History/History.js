import React,{Component} from 'react';
import {connect} from 'react-redux';

import Messages from '../../Messages/Messages';
class History extends Component{
    render(){
        const messages=this.props.arr.map(message=>{
            
            if(message.category==='History'){
            return <Messages key={message.userId} message={message.message} category={message.category}/>
        }else{
            return null
        }
        });
        return(
            <div>{messages}</div>
        );
    }
}


const mapStateToProps = state =>{
    return{
        arr:state.fetchedData
    };
}

export default connect(mapStateToProps)(History);