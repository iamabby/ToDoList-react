import React,{Component,Fragment} from "react";
import "./ToDoList.scss";
import ToDoItem from "../ToDoItem";


class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            list:["learn xxx","learn bbb"],
            inputValue:""
        }
    }
    inputChange=(e)=>{
      this.setState({
          inputValue:e.target.value
      })
    }
    add=()=>{
       const inputValue=this.state.inputValue;
       if(!inputValue){
           console.log("inputValue can not be empty!");
           return false;
       }else{
        this.setState({
            list:[...this.state.list,inputValue]
         })
       } 
    }
    delete=(index)=>{
       const list=this.state.list;
       list.splice(index,1);
       this.setState({
           list:list
       })
    }

    getToDoItem(){
     return   this.state.list.map((item,index)=>{
            return(
             //    <li key={index} onClick={()=>{this.delete(index)}}>{item}</li>
             <ToDoItem 
                 content={item} key={index}
                 index={index} 
                 delete={()=>{this.delete(index)}}
               />
            )
        })
    }
    render(){
        return(
            <Fragment>
               <h2 className="title">ToDoList </h2>
               <div className="enter-bar">
                   <input type="text" 
                        placeholder="please enter the keyword"
                        className="input" 
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />
                   <input 
                        type="button" 
                        className="btn"
                        value="add" 
                        onClick={this.add}
                   />
               </div>
               <ul className="todolist-item">
                   {this.getToDoItem()}
               </ul>
            </Fragment>
        )
    }
}

export default ToDoList;