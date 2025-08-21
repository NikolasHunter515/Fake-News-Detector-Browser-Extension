import react from 'react';
import {useState} from 'react';
import { getActiveTab } from './getPageData';

export default function NewsLegit(){
    const [titleStat, setTitleStat] = useState("N/A");
    const [artStat, setArtStat] = useState("N/A");

    return (
        <div>
            <p>Article Title Status:{titleStat}</p>
            <p>Article Status:{artStat}</p>
        </div>
    );
}