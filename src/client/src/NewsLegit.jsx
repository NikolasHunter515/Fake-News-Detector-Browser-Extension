import react from 'react';
import {useState,useEffect} from 'react';
import { getActiveTab } from './getPageData';
import './NewsLegit.css';

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

  //is working
     useEffect(() => {
        if (activeUrl) {
            try {
                const urlObj = new URL(activeUrl);
                const pathname = urlObj.pathname;

                // Get the last slug from the path
                const slug = pathname.split('/').filter(Boolean).pop();

                if (slug) {
                    const words = slug
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1));

                    console.log(words.join(' '));
                    setActiveName(words.join(' '));
                }
            } catch (e) {
            console.error("Invalid URL:", e);
            }
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
            if(data.result.match('real') || data.result.match('Real')){
                setTitleStat("Real Headline");
            }
            else if(data.result.match('fake') || data.result.match('Fake')){
                setTitleStat("Fake Headline");
            }
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
        <div className='centered-container'>
            <p>Article Title Status: {titleStat}</p>
            <p>Headline: {activeName}</p>
            <p>Analysis: {message}</p>
        </div>
    );
}