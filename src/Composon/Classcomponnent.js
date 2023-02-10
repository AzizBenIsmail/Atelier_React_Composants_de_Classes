import { Component } from "react"
class Classcomponent extends Component {
    //1 on peut pas utulise this . pros dans constructeur si on lutilise dans le super
    //props on peut pas le modifier
    //state on peut le modifier uniquement en utilisant setStat
    constructor(props) {
        super(props)
        console.log(this.state)
        //this.state = { 'likes':0, 'state1':this.props.title, 'state2': 'azaza' };
        //bind : il faut pour chaque methode utilise this
        this.addLikes=this.addLikes.bind(this)
    }
    state = { 'likes':0, 'state1':this.props.title, 'state2': 'azaza' };
    //methode attachee
    addLikes(){
        this.setState((oldState)=>({...oldState,likes:oldState.likes + 1 }))
    }
    sayHello()
    {
console.log("hello")
    }
    render() {
        return (<><p>{this.props.title}</p>
        <p>{this.state.state1}</p>
        <p>{this.state.state2}</p>
        <p>{this.state.likes}</p>
        <button onClick={this.addLikes}>add</button>
        <button onClick={this.sayHello}>sayHello</button>

        </>
        )
    }
}
export default Classcomponent;