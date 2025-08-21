import react from 'react';
import {useState,useEffect} from 'react';
import { getActiveTab } from './getPageData';


//droppign article detection.
export default function NewsLegit(){
    const [titleStat, setTitleStat] = useState("N/A");
    const [artStat, setArtStat] = useState("N/A");

    const [activeUrl, setActiveUrl] = useState("");
    const [activeName, setActiveName] = useState("");

    useEffect(() => {
    const fetchActiveTab = async () => {
      const url = await getActiveTab();
      setActiveUrl(url);
    };

    fetchActiveTab();
  }, []);

    useEffect(() =>{
        if(activeUrl){
            const nameStart = activeUrl.lastIndexOf('/') + 1;
            const shortName = activeUrl.substring(nameStart);
            setActiveName(shortName);
        }}
    );
    //this works
    console.log(activeName);
    //here make call to the backend api pass in the shortened url.

    return (
        <div>
            <p>Article Title Status:{titleStat}</p>
            <p>url:{activeName}</p>
        </div>
    );
}