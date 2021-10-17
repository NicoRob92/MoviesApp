import React, { Component } from "react";
import { connect } from "react-redux";
import { removefav } from "../reduxComponents/action";


class Fav extends Component{
    constructor({props}){
    super(props);
    
}

render(){
    return (
        <div>
            {this.props.state.moviesFav.map(m => <li>{m.Title}
            <button onClick = {(e) => this.props.removefav(m.imdbID)}> Remove </button>
            </li>)}
        </div>
    )
}

}

const mapStateToProps = (state) => {
    return {
        state : state
    }
}

export default connect(mapStateToProps,{removefav}) (Fav)