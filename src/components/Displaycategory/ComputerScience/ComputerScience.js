import React,{Component} from 'react';
import { connect } from 'react-redux';
import Editdata from '../Editdata';

class ComputerScience extends Component{
   
    

    render(){
         const messages=this.props.arr.map(message=>{
            
             if(message.category==='Computer Science'){
             return <Editdata 
             changed={this.changeCategoryHandler}
             key={message.userId} message={message.message} category={message.category} 
             />
         }else{
             return null
         }
        });
        return(
            <div>
                {messages}
              </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        arr:state.fetchedData
    };
}

export default connect(mapStateToProps)(ComputerScience);