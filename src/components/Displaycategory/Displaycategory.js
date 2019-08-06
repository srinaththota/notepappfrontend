import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

import ComputerScience from '../Displaycategory/ComputerScience/ComputerScience';
import Maths from '../Displaycategory/Maths/Maths';
import History from '../Displaycategory/History/History';
class DisplayCategory extends Component{
    render(){
        return(
            
            <div>
                <ul>
                    <li><Link to="/cs">Computer Science</Link></li>
                    <li><Link to="/maths">Maths</Link></li>
                    <li><Link to="/his">History</Link></li>
                </ul>
                <div>
             <Route path="/cs"  exact component={ComputerScience}/>
             <Route path="/maths"  exact component={Maths}/>
             <Route path="/his"  exact component={History}/>
             </div>
                        </div>
            
        );
    }
}
export default DisplayCategory;