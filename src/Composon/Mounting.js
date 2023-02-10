import { Component } from "react"
class Mounting extends Component {
    constructor(props) {
        super(props);
        console.log("from constructor");
    }
    state = {  }
    static getDerivedStateFromProps(props,state)
    {
        console.log(props);
        console.log("from getDerivedStateFromProps");
        return  null;
    }
    componentDidMount()
    {
        console.log("from componentDidMount");

    }
    render() { 
        console.log("from Render")
        return ( <h1>Mouting</h1>);
    }
}
 
export default Mounting;