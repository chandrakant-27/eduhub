import React from "react";
import { ReactDOM } from "react";

import img1 from '../imgs/img1.jpeg'
import img2 from '../imgs/img2.jpeg'
import img3 from '../imgs/img3.jpg'
function Slider()
{
    return(
        <>
        <div className="container-slider">
       
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={img1}  class="d-block w-100" alt=".1.."/>
                </div>
                <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..2."/>
                </div>
                <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt=".3.."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </>
    )
}
export default Slider;