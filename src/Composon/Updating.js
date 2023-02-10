import React from "react";

class Updating extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    shouldComponentUpdate(props,state)
    {
        if(state.like >2)
        {
                
        }
    }
    render() { 
        console.log("from rende");
        return (  <h1>Updating</h1>);
    }
}
 
export default Updating;