import React , {useState} from "react";
import { connect } from "react-redux";
import { addmovie } from "../reduxComponents/action";

export function Nav({addmovie}){

const [title, settitle] = useState('')
    return (
        <>
        <input value= {title} onChange={(e => settitle(e.target.value))}></input>
        <button onClick = {(e) => (addmovie(title),settitle(''))}>Buscar</button>
      </>
    )
}



export default connect(null,{addmovie})(Nav)