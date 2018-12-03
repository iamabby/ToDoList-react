import React ,{Component,Fragment} from "react";




class ToDoItem extends Component{
 delete=()=>{
     this.props.delete(this.props.index)
 }
 render(){
    return(
        <li onClick={this.delete}>
            {this.props.content}
        </li>
    )
 }
}
export default ToDoItem;