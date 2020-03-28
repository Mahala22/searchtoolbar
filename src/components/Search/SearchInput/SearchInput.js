import React from 'react'


const searchinput = (props) => {

    return <div>
        <input placeholder= "search" onChange={props.searchval}></input>
        <button onClick={props.searchbutton}>SEARCH</button>
    </div> 
}

export default searchinput