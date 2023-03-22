import React from "react";
import "./LandingPage.css";
import { Grid } from "@mui/material";
import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import "./LandingPage1.js";

const Cat = ({ selectedCategory, setSelectedCategory, setSelectedCat }) => {
  const navigate = useNavigate()

  const setCat = (cat) => {
    setSelectedCat(cat)
    navigate("/fa")
  }
{/* <div className="cc"> */}
  return (
    <div>
      <div className="maincon">
        <Grid>
          <div className="typescripter">
            <h1 >
              <span>Interested&nbsp; in&nbsp;</span>
              <a style={{ color: "white", }} href="" class="typewrite" data-period="2000" data-type={'["Coding ?", "ReactJS ?", "NextJS ?" , "Music ?", "Education ?", "Podcast ?", "Movie ?", "Gaming ?", "Live ?", "Sport ?", "Fashion ?", "Beauty ?" , "Beauty ?", "Beauty ?", "Beauty ?"]'}>
                <span class="wrap"></span>
              </a>
            </h1>
          </div>


          <div className="aline">
            {categories.map((category) => (
              <button type="button"
                className="category-btn"
                onClick={() => setCat(category.name)}
                style={{
                  background: category.name === selectedCategory && "#FC1503",
                  color: "white",
                }}
                key={category.name}
              >
                <div className="item">
                  <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                    {category.icon}
                  </span>
                  <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Grid>
      </div>
    </div>
  )
  // </div>
}

export default Cat
