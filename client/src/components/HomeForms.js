import React, { useRef, useState } from 'react'
import axios from 'axios';
import api from './ApiUrls/ApiUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
const HomeForms = () => {
  // const editor = useRef(null)

  const [srNo, setSrNo] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [numberOfProduct, setNumberOfProduct] = useState('');
  const [lastPaymentDate, setLastPaymentDate] = useState('');
  const [mobile, setMobile] = useState('');
  const [paidAmount, setPaidAmount] = useState();
  const [customerName, setCustomerName] = useState();
  const [remainingAmount, setRemainingAmount] = useState();

  const productSubmit = (e) => {
    console.log("new Date()", new Date());
    e.preventDefault()
    if(price || productName || paidAmount){

    const data = {
      srNo: srNo,
      productName: productName,
      customerName: customerName,
      price: price,
      numberOfProduct: numberOfProduct,
      lastPaymentDate: lastPaymentDate,
      mobile: mobile,
      totalPrice: price * numberOfProduct,
      createdDate: new Date(),
      paidAmount: paidAmount,
      remainingAmount: numberOfProduct * price - paidAmount,
    }

    console.log(data);
    axios.post(api.apiUrl + 'add-product', data, `Bearer ${localStorage.getItem("token")}`).then((res) => {
      console.log("asaad", res);
      toast.success("Product Added Succesfully");
    }).catch((err) => {
      if (err) {
        console.log(err);
        toast.error(err);
      }
    })
  }else{
    toast.error("Required Amount and Price");
  }
}

  return (
    <>
      <main id="main" className="main">

        <div className="pagetitle">
          <h1>Hariom Traders</h1>

        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Products</h5>

                  <ToastContainer />
                  <form onSubmit={productSubmit}>
                    <div className="row">
                      <div className='col-md-6 mb-3'>
                        <label htmlFor="inputText" className="col-form-label">Sr. No. </label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" placeholder='Eneter Serial Number' value={srNo} onChange={(e) => setSrNo(e.target.value)} />
                        </div>
                      </div>


                      <div className='col-md-6 mb-3'>
                        <label htmlFor="inputText" className="col-form-label">Customer Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" value={customerName} placeholder='Eneter Customer Number' onChange={(e) => setCustomerName(e.target.value)} />
                        </div>
                      </div>


                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputPassword" className="col-form-label">Product Name </label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" placeholder='Eneter Product Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputNumber" className="col-form-label">Price of One Product </label>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" placeholder='Eneter Price' id="formFile" value={price} onChange={(e) => {
                            if (/^\d{0,}?$/.test(e.target.value)) {
                              if (Number(e.target.value) > 10000000) {
                                return setPrice(10000000)
                              }
                              setPrice(e.target.value);
                            } else if (/^\d{0,}?$/.test(e.target.value) && e.target.value < 0) {
                              setPrice(e.target.value);

                            }

                          }} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputNumber" className="col-form-label">Number of Product </label>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" placeholder='Eneter Product Name' id="formFile" value={numberOfProduct} onChange={(e) => {
                            if (/^\d{0,}?$/.test(e.target.value)) {
                              if (Number(e.target.value) > 1000) {
                                return setNumberOfProduct(1000)
                              }
                              setNumberOfProduct(e.target.value);
                            } else if (/^\d{0,}?$/.test(e.target.value) && e.target.value < 0) {
                              setNumberOfProduct(e.target.value);

                            }

                          }} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputNumber" className="col-form-label">Paid Amount</label>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" placeholder='Eneter Paid Amount' id="formFile" value={paidAmount} onChange={(e) => {
                            if (/^\d{0,}?$/.test(e.target.value)) {
                              setPaidAmount(e.target.value)
                            }

                          }} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputNumber" className="col-form-label">Mobile</label>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" id="formFile" placeholder='Eneter Mobile Number' value={mobile} onChange={(e) => {
                            if (/^\d{0,}?$/.test(e.target.value)) {
                              setMobile(e.target.value);
                            }

                          }} />
                        </div>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="inputNumber" className=" col-form-label">Last Payment Date  </label>
                        <div className="col-sm-10">
                          <input className="form-control" type="date" id="formFile" value={lastPaymentDate} onChange={(e) => setLastPaymentDate(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className='row justify-content-start'>
                          <div className="col-md-6">
                            <div style={{ background: "#174743", color: "white", padding: "10px", borderRadius: "5px" }}>
                              <p>Total Amount :-</p>
                              <h5>रु {numberOfProduct * price}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className='row justify-content-start'>
                          <div className="col-md-6">
                            <div style={{ background: "#174743", color: "white", padding: "10px", borderRadius: "5px" }}>
                              <p>Remaining Amount:-</p>
                              <h5>रु {paidAmount ? numberOfProduct * price - Number(paidAmount):0 }</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <JoditEditor
                      ref={editor}
                      value={content}

                      onChange={newContent => setContent(newContent)}
                    /> */}

                      <div className="row mb-3">
                        <div className="col-sm-10">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <Link to="/all-data">editor Data</Link> */}

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