import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import api from './ApiUrls/ApiUrls';
// import JoditEditor from 'jodit-react';
import renderHTML from 'react-render-html';

const AllData = () => {
    const [editorDataa, setEditorDataa] = useState([]);

    useEffect(() => {
        axios.get(api.apiUrl + 'editor-data').then((res) => {
            console.log("asaad", res.data);
            setEditorDataa(res.data)

        })
    }, []);


    return (
        <>
  
                {editorDataa.map((a) => {
                    return <div className='...'>
                        {renderHTML(a.allhtml)}
                    </div>
                })}

        </>
    )
}

export default AllData