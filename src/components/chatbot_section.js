import React,{useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import  {AddBoxRounded,Forward,Portrait} from "@material-ui/icons" ;
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyD_aaAu06Hc5LML2nnOLOO0bRDOgHWnkqs");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

function ChatbotSection(props){
    const [response,setResponse]=useState("Ask any query.....");
    const [query,setQuery]=useState("");
    const [yourquery,setyourquery]=useState("");
    const [showquery,setshowquery]=useState(false);
    function typingtextanimation(texttodisplay){
        return <TypeAnimation key={texttodisplay} sequence={[texttodisplay]} wrapper="span" speed={50} style={{ fontSize: '1em', display: 'inline-block' }} repeat={0}></TypeAnimation>
    }
    async function onSubmit(e){ 
        setResponse("Thinking....");
        const finalquery=query+" answer within 100 words without asterisk symbols";
        const result = await model.generateContent(finalquery);
        e.preventDefault();
        setshowquery(true);
        const x=result.response.text();
        setResponse(x);
        setyourquery(query);
        await axios.post("http://localhost:5000/addinteraction",{interaction:{query:query,response:x}});
        setQuery("");
        await props.getInteractions();
    }
    return <div >
        <h1 className="text-gray-800 text-2xl mb-1 text-center font-bold"><AddBoxRounded className="pb-1" fontSize="large"/>DOC-AI</h1>
        <div className="static">
            <div className="flex space-x-2 fixed bottom-2 right-17">
            <input value={query} onChange={(e)=>{setQuery(e.target.value);}} type="text" placeholder="Any query?" className="text-black w-72 p-1 m-1 bg-gray-100 rounded-lg border-black border-2"></input>
            <button className="bg-lime-500 rounded-2xl w-10 p-1 my-1 border-lime-500 border-2 text-white" onClick={onSubmit}><Forward /></button>
            </div>
            {showquery && <h1 className="text-blue-700 p-1 m-1 "><Portrait fontSize="medium" /> {yourquery}</h1>}
            <h1 className="text-green-700 p-1 m-1"><AddBoxRounded className="pb-1" fontSize="medium" /> {typingtextanimation(response)}</h1>
        </div>
    </div>
}
export default ChatbotSection;