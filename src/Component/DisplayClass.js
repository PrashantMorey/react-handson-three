import React, { Component } from "react";
import './Display.css';


class DisplayClass extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>

            <div className="mainEle"> 
            {this.props.value.map((item,index) =>{
                return(
                    
                   
                    <div className='returnEle' key={index}>
                    Name: {item.name} | 
                    Department: {item.department} | 
                    Rating: {item.rating}
                    </div>
                    
                    
                )
            })}
            </div>
            <button onClick={this.props.toggleFunc}>Go Back</button>
            </>
        )
    }
}
export default DisplayClass;