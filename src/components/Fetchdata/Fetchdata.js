import React,{Component} from 'react';
import axios from 'axios';
import {connect } from 'react-redux';
import classes from '../Fetchdata/Fetchdata.css';
import Messages from '../Messages/Messages';

class Fetchdata extends Component{
   state={
       messageDetails:[{category: "History", userId: 3, message: "Geography"}],
       messageDetailsFromStore:[{category: "History2", userId: 3, message: "Geography"}]
   }
    componentDidMount(){

        axios.get("http://localhost:8080/messages").then(response=>{
            this.setState({
                ...this.state.messageDetails,
                messageDetails:response.data
            });
            console.log(response);
        });
        
    }
    updateHandler=()=>{
     //   this.props.deleteMessageFromStore(index)
        this.setState({
            ...this.state.messageDetailsFromStore,
            messageDetailsFromStore:this.props.arr
            
        });

        this.componentDidMount();
       // console.log("alert");
    }
    deleteHandler=(index)=>{
        const messages=[...this.state.messageDetailsFromStore];
        messages.splice(index,1);
        this.setState({
            ...this.state.messageDetailsFromStore,
            messageDetailsFromStore:messages
            
        });
     // this.props.deleteMessageFromStore(this.state.messageDetailsFromStore);
    }
    
    
    render(){
       
       
    //    const messages=this.props.arr.map((message,index)=>{
        
    //     return <Messages key={message.userId} message={message.message} category={message.category} onClick={this.deleteHandler(index)} />
    // // });
    // const messages=this.state.messageDetailsFromStore.map((message)=>{
    //     return <Messages key={message.userId} message={message.message} category={message.category} />
    // });
        return(
            <div>
                
                <button className={classes.design} onClick={()=>
                        this.props.sendDataToStore(this.state.messageDetails) }
                        >Send Messages to store</button>
                <button className={classes.design} onClick=
                    {this.updateHandler}
                >UpdateState</button>
             
            
               <div>
                        {this.state.messageDetailsFromStore.map((message,index)=>{
                                return( <Messages key={message.userId} message={message.message} category={message.category} clicked={this.deleteHandler}/>);
                        })}
               </div>
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        arr:state.fetchedData
    };
}
const DispatchToProps = dispatch=>{
    return{
    sendDataToStore:(messageDetails)=>dispatch({type:'FETCH', messageDetails:messageDetails}),
    //deleteMessageFromStore:(messageDetails)=>dispatch({type:'UPDATE', userId:messageDetails})
   
}
}

export default connect(mapStateToProps,DispatchToProps)(Fetchdata);