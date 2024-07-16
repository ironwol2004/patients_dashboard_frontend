import React from "react";
import {ContactMail} from "@material-ui/icons";
function PatientInfoSection(){
    return <div className="px-5">
        <h1 className="text-gray-800 text-2xl font-bold">Patient's Information <ContactMail fontSize="large"></ContactMail> </h1>
        <div className="flex space-x-72 py-5">
        <h1 className="text-gray-700 text-xl font-bold">Ashish Shrivastav</h1><div className="flex-col gap-1 justify-center">
        <h1 className="text-gray-700 text-lg font-semibold">Linked Doctor :&nbsp;Dr. Ashutosh Dixit</h1>
        <h1 className="text-gray-700 text-lg font-semibold">Specialization&nbsp;:&nbsp;General Practitioner</h1>
        <h1 className="text-gray-700 text-lg font-semibold">Experience &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;11+ years</h1>    
    </div>
    </div>
    </div>
}
export default PatientInfoSection;