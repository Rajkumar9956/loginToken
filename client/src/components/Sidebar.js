import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
{/* <div className="row">
        <div className="col-md-3"> */}
        <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item nav-link ">
  <Link to="/">
    {/* <a className="nav-link " href="index.html"> */}
      <i className="bi bi-grid"></i>
      
      <span>Dashboard</span>
      </Link>
    {/* </a> */}
  </li>

  <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
    <Link to="/all-products">
      <i className="bi bi-menu-button-wide"></i><span>Home</span><i className="bi bi-chevron-down ms-auto"></i>
       </Link>
    </a>
    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <Link to="/all-products">
          <i className="bi bi-circle"></i><span>All Products</span>
        </Link>
      </li>
      <li>
      <Link to="/add-product">
          <i className="bi bi-circle"></i><span>Add Product</span>
        </Link>
      </li>
    
      
   
    
    </ul>
  </li>



  {/* <li className="nav-item">
    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
    </a>
    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
      <li>
        <a href="charts-chartjs.html">
          <i className="bi bi-circle"></i><span>Chart.js</span>
        </a>
      </li>
      <li>
        <a href="charts-apexcharts.html">
          <i className="bi bi-circle"></i><span>ApexCharts</span>
        </a>
      </li>
      <li>
        <a href="charts-echarts.html">
          <i className="bi bi-circle"></i><span>ECharts</span>
        </a>
      </li>
    </ul>
  </li> */}

 

</ul>

</aside>
        {/* </div>
        </div> */}
      </>
  )
}

export default Sidebar