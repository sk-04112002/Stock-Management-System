import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Appbar.jsx";

function ShowProduct() {
  const { id } = useParams();
  axios.defaults.withCredentials = true;
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/getproductsinfo/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/deleteproduct/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => navigate("/landing"))
      .catch((err) => console.log(err));
  };

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container text-center my-5">
          <h3>Loading product details...</h3>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container text-dark" style={{  marginBottom: "5rem"}}>
        <div className="row align-items-center">
          {product.productImage && (
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="p-2"
                src={product.productImage}
                alt="product"
                style={{ height: "100%", width: "100%", objectFit: "cover"}}
              />
            </div>
          )}
          <div className="col-md-6 mt-5" style={{backgroundColor:"#f5f5f5"}}>
            <div className="d-flex justify-content-between">
            <h3 className="mt-3" style={{ fontWeight: "400" }}>
              {product.productName} 
            </h3>
            {product.productPrice && (
  <h5 className="mt-3" style={{ fontWeight: "400" }}>
    MRP ₹{Number(product.productPrice).toLocaleString("en-IN")}
  </h5>
)}

            </div>
            {product.productBrand && <p> {product.productBrand}</p>}
            {product.productCategory && <p><strong>Category:</strong> {product.productCategory}</p>}
            {product.productSubCategory && <p><strong>Sub Category:</strong> {product.productSubCategory}</p>}
            {product.productQuantity && <p><strong>Quantity:</strong> {product.productQuantity}</p>}
            {product.productMinQuantity && <p><strong>Minimum Quantity:</strong> {product.productMinQuantity}</p>}
            {product.productMaxQuantity && <p><strong>Maximum Quantity:</strong> {product.productMaxQuantity}</p>}
            {product.productColour && <p><strong>Colour:</strong> {product.productColour}</p>}
            {product.productSize && <p><strong>Size:</strong> {product.productSize}</p>}
            
            {product.adminid && <p><strong>Admin ID:</strong> {product.adminid}</p>}
            {product.productDescription && <p><strong>Description:</strong> {product.productDescription}</p>}

            <div className="d-flex my-3">
              <Link to={`/UpdateProducts/${product._id}`}>
                <button type="button" className="btn btn-primary mr-3">Update</button>
              </Link>
              <button type="button" className="btn btn-danger mx-3" onClick={() => handleDelete(product._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
