import React, { useEffect, useState } from 'react';
import CodingBar2 from './CodingBar2';
import axios from 'axios';

const Coding2: React.FC = () => {
    // const codeList = [
    //         {
    //             "title":"HTML",
    //             "percent": 70
    //         },
    //         {
    //             "title":"CSS",
    //             "percent": 90
    //         },
    //         {
    //             "title":"JavaScript",
    //             "percent": 90
    //         },
    //         {
    //             "title":"TypeScript",
    //             "percent": 80
    //         },
    //         {
    //             "title":"React",
    //             "percent": 98
    //         },
    //         {
    //             "title":"NodeJS",
    //             "percent": 60
    //         },
    //     ];
    
    const [codeList, setCodeList] = useState([]);
    useEffect(() =>{
        axios
            .get('data/coding.json')
            .then(res =>
                setCodeList(res.data)
            )
            .catch(err => console.log(err));
    },[]);

        return (
            <article className="sklls__coding">
                <h3 className="skill__title">Coding Skills</h3>
                <ul>
                    {codeList && codeList.map((code) =>
                        <li className="bar">
                            <CodingBar2 code={code} />
                        </li>                
                    )}
                    
                </ul>
            </article>
        );
}

export default Coding2;