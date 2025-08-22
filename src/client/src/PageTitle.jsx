import react from 'react';
import {useState} from 'react';


export default function PageTitle(){
    //should consider something like welcome user or the name of the user.
    const [userName, setUserName] = useState("User");
    const [appName, setAppName] = useState("Fake News Detector");



    return(
        <div>
            <h2>{appName}</h2>
            <br />
            <h3>Welcome {userName},</h3>
        </div>
    );
}