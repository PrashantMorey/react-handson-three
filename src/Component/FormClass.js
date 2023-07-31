import React from "react";
import { Component } from "react";
import DisplayClass from "./DisplayClass";
import './Display.css';

class FormClass extends Component{
    constructor(){
        super();
        this.state ={
            Name : '',
            Department : '',
            Rating : '',
            clicked : true, 
            EmpData : []
        }
    }
    handelChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    toggleFuncction=()=>{
        this.setState({clicked : !this.state.clicked})
    }
    handelClick=()=>{
        const empObj={
            name : this.state.Name,
            department : this.state.Department,
            rating : this.state.Rating
        }
        this.state.EmpData.push(empObj);
        this.setState({
            EmpData : this.state.EmpData,
            Name : '',
            Department : '',
            Rating : '',
            clicked : false
        })
    }
    render(){
        return(
            
    <div className="App">
      <h1>EMPLOYEE FEEDBACK FORM </h1>
      {this.state.clicked
      ?
      <form>
        <label htmlFor="name">
          Name :
          <input type="text" id="name" placeholder="Enter Name" name='Name' onChange={this.handelChange} value={this.state.Name}/>
        </label>
        <label htmlFor="department">
          Department :
          <input type="text" id="department" placeholder="Enter Department" name='Department' onChange={this.handelChange} value={this.state.Department}/>
        </label>
        <label htmlFor="rating">
          Rating :
          <input type="number" id="rating" placeholder="Enter Rating" name='Rating' onChange={this.handelChange} value={this.state.Rating}/>
        </label>   
        <button type='button' onClick={this.handelClick} >Submit</button>            
        </form>
        :
        <DisplayClass value={this.state.EmpData} toggleFunc={this.toggleFuncction} />
      }
      
    </div>
        )
    }
}
export default FormClass;