import React,{useState} from "react";
function PastInteraction(props){
    const [moreorless,setmoreorless]=useState("more");
    function changeresponselength(){
        if(moreorless==="more"){setmoreorless("less");}
        else{setmoreorless("more");}
    }
    return <div className="bg-blue-200 rounded-lg p-3 m-3 text-gray-700">
        <h1>Query &nbsp;&nbsp;&nbsp;: {props.query}</h1>
        <h1>Response : {moreorless==="more"?props.response.substring(0,50):props.response} <span className="text-blue-500" onClick={changeresponselength}>{moreorless}</span></h1>
    </div>
}
export default PastInteraction;