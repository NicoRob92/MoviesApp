import React from "react";
import { connect } from "react-redux";
import { addfav } from "../reduxComponents/action";

export function Home({state,addfav}){
    
    return(
        <div>
        <ul>
            {state.moviesLoad.map(m => <li>{m.Title}
            <img src= {m.Poster} alt="img Not found" width="30px" height="30px"/> 
            <button onClick = {(e) => addfav(m)}> Fav </button>
            </li>)}
        </ul>  
        </div>
        )
}

const mapStateToProps = (state) => {
    return {
        state: state
      
    }
}
export default connect(mapStateToProps,{addfav})(Home)