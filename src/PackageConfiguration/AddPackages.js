import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./package.css";
import { addSchema } from "../utils/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addDefaultData } from "../utils/schema";
import Loader from "../Component/Loader/Loader";
import { addPackages, updatePackages } from "../restAPI/PackagesAPI";
import AppRoute from "../utils/router";
import { useLocation, useNavigate } from "react-router-dom";

function AddPackages() {
  const [loading, setLoading] = useState(false);
  const [imagesArray, setImagesArray] = useState([]);
  const navigation = useNavigate();
  const { state } = useLocation();
  const editData = state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: addDefaultData(editData),
    resolver: yupResolver(addSchema),
  });


  // *****************   Formatting Images ********************

  const handleFileChosen = (file) => {
      const reader = new FileReader();
        reader.onload = () =>{
          setImagesArray((prevState) => ([...prevState,reader.result]))
        }
        reader.readAsDataURL(file)
  }
   
  const imageHandler = (e) =>{
      return [...e.target.files].forEach((file) => handleFileChosen(file));
  }


  const formSubmit = (data) => {
    setLoading(true);  

    const {images,...restProps} = data;
    const formData = {...restProps,images: imagesArray};

    if(editData){
      updatePackages(editData._id,formData)
      .then(()=>{
        alert("Package Updated");
        navigation(AppRoute.COLLECTION);
      })
      .catch((error)=>{
        console.error(error);
        alert("Some error occured while updating package");
      })
      .finally(()=>{
        setLoading(false);
        setImagesArray([])
      })
    }
    else{
      addPackages(formData)
      .then(()=>{
        alert("Package Added");
        navigation(AppRoute.COLLECTION);
      })
      .catch((error)=>{
        console.error(error);
        alert("Some error occured while adding package");
      })
      .finally(()=>{
        setLoading(false);
        setImagesArray([])
      })
    }
  };

  if(loading){
    return <Loader/>
  }
  return (
    <div className="form-container">
      <div className="container">
        <h1>{editData ? "Edit" : "Add"} Packages</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="row">
            <div className="form-group  col-md-6">
              <label htmlFor="name">Tour Name</label>
              <input type="text" {...register("name")} autoComplete="off" />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="price">Price (In $)</label>
              <input type="number" {...register("price")} autoComplete="off" />
              {errors.price && <p className="error">{errors.price.message}</p>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="miniDescription">Mini Description</label>
              <textarea
                {...register("miniDescription")}
                cols="30"
                rows="5"
                autoComplete="off"
              ></textarea>
              {errors.miniDescription && (
                <p className="error">{errors.miniDescription.message}</p>
              )}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="highlight">highlight</label>
              <textarea
                {...register("highlight")}
                cols="30"
                rows="5"
                autoComplete="off"
              ></textarea>
              {errors.highlight && (
                <p className="error">{errors.highlight.message}</p>
              )}
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="description">description</label>
              <textarea
                {...register("description")}
                cols="30"
                rows="10"
                autoComplete="off"
              ></textarea>
              {errors.description && (
                <p className="error">{errors.description.message}</p>
              )}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="review">Review</label>
              <input type="text" {...register("review")} autoComplete="off" />
              {errors.review && (
                <p className="error">{errors.review.message}</p>
              )}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="altmobile">Location</label>
              <input
                type="text"
                {...register("location")}
                autoComplete="off"
              />
              {errors.location && (
                <p className="error">{errors.location.message}</p>
              )}
            </div>

            <div className="form-group custom-checkbox col-md-4">
              <label htmlFor="category">Category</label>
              <select id="category" {...register("category")}>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
              </select>
              {errors.category && (
                <p className="error">{errors.category.message}</p>
              )}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="altmobile">Youtube Link</label>
              <input
                type="text"
                {...register("youtubeLink")}
                autoComplete="off"
              />
              {errors.youtubeLink && (
                <p className="error">{errors.youtubeLink.message}</p>
              )}
            </div>

            <div className="form-group custom-checkbox col-md-4">
              <label htmlFor="offer">Offer</label>
              <select id="offer" {...register("offer")}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              {errors.offer && (
                <p className="error">{errors.offer.message}</p>
              )}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="altmobile">Image (Only 3 are accepted)</label>
              <input
                type="file"
                multiple="multiple"
                accept="image/png, image/jpeg, image/jpg"
                {...register("images")}
                autoComplete="off"
                onChange={imageHandler}
              />
              {errors.images && (
                <p className="error">{errors.images.message}</p>
              )}
            </div>
            
          </div>

          <div className="form-group group-button">
            <button className="form-button" type="submit">
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              {editData ? "Update" : "Add"} Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPackages;
