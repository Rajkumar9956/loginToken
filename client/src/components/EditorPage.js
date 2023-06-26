import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import api from './ApiUrls/ApiUrls';
import JoditEditor from 'jodit-react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom'; 

const EditorPage = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [editorData, setEditorData] = useState([]);

    useEffect(() => {
        axios.get(api.apiUrl + 'editor-data').then((res) => {
            console.log("asaad", res.data);
            setEditorData(res.data)

        })
    }, []);

    const sliderSubmit = (e) => {
        e.preventDefault()

        // const formData = new FormData()
        const data = {
            allhtml: content
        }
        axios.post(api.apiUrl + 'editor', data).then((res) => {
            console.log("asaraaaaaaad", res.data);
            console.log("rajkumar", res.data.data);
            setEditorData(res.data.data)
             setContent('');
            //  setDescription('');
            //  document.getElementById("formFile").value = "";

        }).catch((err) => {
            if (err) {
                //  toast.error("Something is Else !");
            }
        })
    }
    return (
        <>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Form Elements</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item">Forms</li>
                            <li className="breadcrumb-item active">Elements</li>
                        </ol>
                    </nav>
                </div>

                <section className="section">
                    <div className="row">
                        <div className="col-lg-11">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">General Form Elements</h5>


                                    <form onSubmit={sliderSubmit}>

                                        <JoditEditor
                                            ref={editor}
                                            value={content}

                                            onChange={newContent => setContent(newContent)}
                                        />
                                      


                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label"></label>
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>

                                    </form>
                                    <Link to="/all-data">Editor Data</Link>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>
                { editorData.map((a) => {
                                       return <div className='...'>
                                            {renderHTML(a.allhtml)}
                                        </div>
                                        })} 

            </main>
        </>
    )
}

export default EditorPage