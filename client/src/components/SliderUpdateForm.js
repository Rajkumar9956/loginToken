import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ApiUrls from './ApiUrls/ApiUrls';
import { Link } from 'react-router-dom';

const HomeForms = () => {
  const [mainTitle, setMainTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sliderImage, setSliderImage] = useState('');
  const [data, setData] = useState('');
  const [id, setId] = useState('');



  useEffect(() => {
    const id = window.location.href.split("/")[4];
    setId(id)
    axios.post(ApiUrls.apiUrl + 'update-slider-id', { id }).then((res) => {
      setData(res.data)
      console.log("res.data", res.data);
    })
  }, []);

  const sliderSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('mainTitle', mainTitle)
    formData.append('description', description)
    formData.append('sliderImage', sliderImage)
    formData.append('_id', id)
    // const data ={
    //   mainTitle:mainTitle,
    //   description:description,
    //   sliderImage:sliderImage,
    //  }
    console.log("formData", formData);

    axios.post(ApiUrls.apiUrl + 'home-slider-update', formData).then((res) => {
      console.log("asaad", res);

      //  setMainTitle('');
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
          <Link to="/slider-data" class="btn btn-primary">Back</Link>
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
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">Main Tittle :-</label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" defaultValue={data.mainTitle} onChange={(e) => setMainTitle(e.target.value)} />
                      </div>
                    </div>
                    {/* <div className="row mb-3">
                  <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control"/>
                  </div>
                </div> */}
                    <div className="row mb-3">
                      <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description :-</label>
                      <div className="col-sm-10">
                        <textarea className="form-control" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload :-</label>
                      <div className="col-sm-10">
                        <input className="form-control" type="file" id="formFile" name="sliderImage" onChange={(e) => setSliderImage(e.target.files[0])} />
                      </div>
                    </div>



                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label"></label>
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>

            </div>


          </div>
        </section>

      </main>
    </>
  )
}

export default HomeForms