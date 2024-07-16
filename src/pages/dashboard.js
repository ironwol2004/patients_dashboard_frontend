import React,{useState,useEffect} from "react";
import PatientInfoSection from "../components/patient_info_section";
import PastInteractionsSection from "../components/past_interactions_section";
import ChatbotSection from "../components/chatbot_section";
import axios from "axios";

function Dashboard(){
const [interactions,setInteractions]=useState([]);
async function getInteractions(){
    const r=await axios.get("http://localhost:5000/getinteractions");
      setInteractions(r.data);
}
useEffect(()=>{
    getInteractions();
},[]);
    return <div>
    <h1 className="text-black text-5xl font-bold text-center mt-3 mb-0">Patient's Dashboard</h1>
    <div className="flex gap-3 mb-3 p-3 text-white">
                <div className="flex-col gap-3 m-3 w-8/12 mx-10">
                    <div className="h-44 bg-blue-100 bg-opacity-80 mb-7 rounded-lg p-3">    
                        <PatientInfoSection></PatientInfoSection>
                    </div>
                    <div className=" bg-blue-100 bg-opacity-80 rounded-lg p-3">
                        <PastInteractionsSection interactions={interactions}></PastInteractionsSection>
                    </div>
                </div>
                    <div  className="bg-blue-100 h-screen w-3/12 m-3 p-3 rounded-lg fixed right-10 bg-opacity-80">
                        <ChatbotSection getInteractions={getInteractions}></ChatbotSection>
                    </div>
            </div>
</div>
}
export default Dashboard;