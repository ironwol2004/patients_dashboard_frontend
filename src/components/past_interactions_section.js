import React from "react";
import PastInteraction from "./past_interaction";
import {History} from "@material-ui/icons";
function PastInteractionsSection(props){
    return <div>
        <h1 className="text-gray-800 text-2xl font-bold p-3 m-3">Past Interactions <History fontSize="large"></History></h1>
        <div className="flex-col gap-3  mx-3">
        {props.interactions.map((i)=>{return <PastInteraction query={i.query} response={i.response}></PastInteraction>})}
    </div></div>
}
export default PastInteractionsSection;