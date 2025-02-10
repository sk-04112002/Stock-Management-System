import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Appbar.jsx";
function ShowProduct() {
  const { id } = useParams();
  axios.defaults.withCredentials = true;
  const [productImage, setProductImage] = useState(null);
  const [productId, setProductId] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Electronics");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productMinQuantity, setProductMinQuantity] = useState("");
  const [productMaxQuantity, setProductMaxQuantity] = useState("");
  const [productColour, setProductColour] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productAdminId, setProductAdminId] = useState("");
  const [productDescription, setProductDescription] = useState("");
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
        console.log(result);
        setProductImage(result.data.productImage);
        setProductId(result.data._id);
        setProductBrand(result.data.productBrand);
        setProductName(result.data.productName);
        setProductCategory(result.data.productCategory);
        setProductSubCategory(result.data.productSubCategory);
        setProductQuantity(result.data.productQuantity);
        setProductMinQuantity(result.data.productMinQuantity);
        setProductMaxQuantity(result.data.productMaxQuantity);
        setProductColour(result.data.productColour);
        setProductSize(result.data.productSize);
        setProductPrice(result.data.productPrice);
        setProductAdminId(result.data.adminid);
        setProductDescription(result.data.productDescription);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/deleteproduct/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        navigate("/landing");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div className="container bg-dark text-light">
        <div className="text-center">
          <h3 style={{padding:"3rem 0"}}>Product Details</h3>
        </div>
        <div className="row align-items-center shadow">
          <div className="col-md-6">
            <img
              src={productImage}
              alt="productImage"
              style={{height:"100%", width:"100%", objectFit: "cover" }}
              
            />
          </div>
          <div className="col-md-6">
            <h4 style={{ fontWeight: "700" }} className="my-3">
              {productName} - {productId}
            </h4>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Brand : </h6>
              <p className="mx-2">{productBrand}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Name : </h6>
              <p className="mx-2">{productName}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Category : </h6>
              <p className="mx-2">{productCategory}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Sub Category : </h6>
              <p className="mx-2">{productSubCategory}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Quantity : </h6>
              <p className="mx-2">{productQuantity}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Minimum Quantity :</h6>
              <p className="mx-2">{productMinQuantity}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Maximum Quantity :</h6>
              <p className="mx-2">{productMaxQuantity}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Colour :</h6>
              <p className="mx-2">{productColour}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Size :</h6>
              <p className="mx-2">{productSize}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Price : </h6>
              <p className="mx-2">{productPrice}</p>
            </div>
            <div className="d-flex my-3">
              <h6 style={{ fontWeight: "700" }}>Admin ID : </h6>
              <p className="mx-2">{productAdminId}</p>
            </div>
            <div className="d-block my-3">
              <h6 style={{ fontWeight: "700" }}>Description : </h6>
              <p className="mx-2">{productDescription}</p>
            </div>
            <div className="d-flex my-3">
              <Link to={`/UpdateProducts/${productId}`}>
                <button type="button" className="btn btn-primary mr-3">
                  Update
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-danger mx-3"
                onClick={(e) => handleDelete(productId)}
              >
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
