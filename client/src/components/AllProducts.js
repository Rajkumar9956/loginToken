import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiUrls from './ApiUrls/ApiUrls';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { consumers } from 'stream';


const AllProducts = () => {
    const [data, setData] = useState();
    const [srNo, setSrNo] = useState('');
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [numberOfProduct, setNumberOfProduct] = useState('');
    const [lastPaymentDate, setLastPaymentDate] = useState('');
    const [mobile, setMobile] = useState('');
    const [remainingAmount, setRemainingAmount] = useState();
    const [customerName, setCustomerName] = useState();
    const [paidAmount, setPaidAmount] = useState();
    const [id, setId] = useState();
    useEffect(() => {
        axios.get(ApiUrls.apiUrl + 'get-product').then((res) => {
            console.log("res.data",res.data.data);
            setData(res.data.data)
        })
    }, [data]);
  

    const deleteData = (id) => {
        if (window.confirm('Are you sure you want to Delete this item?')) {
            axios.post(ApiUrls.apiUrl + 'delete-product', { id }).then((res) => {
                console.log("delete-product",res.data);
                setData(res.data.data)
            })
        }
    }

    const editProduct= (_id,srNo,customerName,productName,price,numberOfProduct,mobile,lastPaymentDate,remainingAmount,paidAmount) => {
       console.log("raj",srNo,customerName,productName,price,numberOfProduct,mobile,lastPaymentDate);
            setId(_id)
             setSrNo(srNo)
            setProductName(productName)
            setCustomerName(customerName)
            setPrice(price)
            setNumberOfProduct(numberOfProduct)
            setMobile(mobile)
            setLastPaymentDate(lastPaymentDate)
            setRemainingAmount(remainingAmount)
            setPaidAmount(paidAmount)
         
    }


    const productSubmit = (e) => {
        e.preventDefault()
        const data = {
            srNo: srNo,
            id: id,
            productName: productName,
            customerName: customerName,
            price: price,
            numberOfProduct: numberOfProduct,
            lastPaymentDate: lastPaymentDate,
            mobile: mobile,
            totalPrice: price * numberOfProduct,
            createdDate:new Date(),
            paidAmount:price * numberOfProduct - paidAmount
          }
        console.log("data",data);
        axios.post(ApiUrls.apiUrl + 'update-product', data).then((res) => {
            console.log("asaad", res.data.data);
            setData(res.data.data)
        }).catch((err) => {
            // if (err) {
            //      toast.error("Something is Else !");
            // }
        })
    }
    return (

        <>
          <main id="main" className="main">
          <div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>  <Link to="/add-product" ><span>Add Product</span>
        </Link>
            <section className="section">
                <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Default Table</h5>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Sr No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Remaining Amount</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Payment Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((da, idx) => {
                                            return <tr>
                                                <th scope="row">{idx + 1}</th>
                                                <td>{da.srNo}</td>
                                                <td>{da.customerName}</td>
                                                <td>{da.productName}</td>
                                                <td>{da.price}</td>
                                                <td>{da.remainingAmount}</td>
                                                <td>{da.mobile}</td>
                                                {/* <td>{da.dremainingAmount}</td> */}
                                                <td>{da.lastPaymentDate}</td>
                                                {/* {Productdata()} */}
                                                {/* <td>{da.createdAt}</td> */}
{/*                                             
                                                // <td><img src={`assets/uploads/${da.sliderImage}`} alt="Girl in a jacket" width="100" height="100"/></td> */}
                                                <td><button type="button" onClick={(e) => deleteData(da._id)} class="btn btn-danger">Delete</button>     <button type="button" onClick={(e) => editProduct(da._id,da.srNo,da.customerName,da.productName,da.price,da.numberOfProduct,da.mobile,da.lastPaymentDate,da.remainingAmount,da.paidAmount)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit</button> </td>
                                                {/* <td onClick={(e) => activateStatus(da.status, da._id)}>{da.status == 0 ? <button type="button" class="btn btn-success">Activate</button> : null}{da.status == 1 ? <button type="button" class="btn btn-danger">DeActivate</button> : null}</td> */}
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                                Example
                                <Link to="/home-form">Back to Home Form</Link>

                            </div>

                        </div>

                    </div>
            </section>
            </main>
           


            <section>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Product Data</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={productSubmit}>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Sr No:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={srNo} onChange={(e) => setSrNo(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="message-text" className="col-form-label">Product Name:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={productName} onChange={(e) => setProductName(e.target.value)} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Customer Name:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={customerName} onChange={(e) => setCustomerName(e.target.value)} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Mobile:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={mobile} onChange={(e) => setMobile(e.target.value)} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Price:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={price} onChange={(e) => setPrice(e.target.value)} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Number of Product:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={numberOfProduct} onChange={(e) => setNumberOfProduct(e.target.value)} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlfor="recipient-name" className="col-form-label">Last Payment Date:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={lastPaymentDate} onChange={(e) => setLastPaymentDate(e.target.value)} />

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AllProducts