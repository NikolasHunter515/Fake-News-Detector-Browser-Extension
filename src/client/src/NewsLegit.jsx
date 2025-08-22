import react from 'react';
import {useState,useEffect} from 'react';
import { getActiveTab } from './getPageData';


//droppign article detection.
export default function NewsLegit(){
    const [titleStat, setTitleStat] = useState("N/A");
    const [artStat, setArtStat] = useState("N/A");

    const [activeUrl, setActiveUrl] = useState("");
    const [activeName, setActiveName] = useState("");

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchActiveTab = async () => {
        const url = await getActiveTab();
        setActiveUrl(url);
        };
        fetchActiveTab();
  }, []);


     useEffect(() => {
        if (activeUrl) {
        const nameStart = activeUrl.lastIndexOf('/') + 1;
        const shortName = activeUrl.substring(nameStart);
        setActiveName(shortName);
        setActiveName(shortName.replaceAll("-"," "))
        }
    }, [activeUrl]);

      useEffect(() => {
        if (!activeName) return;

        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: activeName })
            });
            const data = await response.json();
            setMessage(data.result || data.error || 'No result');
        } catch (err) {
            setMessage('Error contacting backend');
        }
        };

        if(localStorage.getItem('detectTogg')){
            fetchData();
        }
  }, [activeName]);
    //this works
    console.log(activeName);
    //here make call to the backend api pass in the shortened url.
    

    return (
        <div>
            <p>Article Title Status: {titleStat}</p>
            <p>Headline: {activeName}</p>
            <p>Analysis: {message}</p>
        </div>
    );
}