import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";
// import add_product_icon from '../../assets/Product_cart.svg'
// import list_product_icon from '../../assets/Product_list_icon.svg'
const Sidebar=()=>{
    return (
        <div className="sidebar">
            <Link to ={'/users'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    {/* <img src={add_product_icon} alt="" /> */}
                    <p>Users</p>
                </div>
            </Link>
            <Link to ={'/insights'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    {/* <img src={list_product_icon} alt="" /> */}
                    <p>Insights</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar