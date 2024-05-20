import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../utils/projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import singleImgPost from "../../assets/singleProjectImg11.svg";

import "./SingleProjectPage.css";
import proImg1 from "../../assets/proImg1.svg";
import proImg2 from "../../assets/proImg2.svg";
import proImg3 from "../../assets/proImg3.svg";
import proImg4 from "../../assets/proImg4.svg";
import Footer from "../../components/Footer";
import client from "../../client";

const SingleProjectPage = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setProjectDetails(projectData?.items);
  // }, [projectDetails]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projectsPage"] {
          projects[] {
            id,
            "imageUrl": companyImage.asset->url,
            "logoUrl": companyLogo.asset->url,
            company,
            title,
            subtitle,
            "singleSliderUrl1": singleSliderImg1.asset->url,
            "singleSliderUrl2": singleSliderImg2.asset->url,
            "singleSliderUrl3": singleSliderImg3.asset->url,
            "singleSliderUrl4": singleSliderImg4.asset->url,
            singleProDesc,
            singleProDescList1,
            singleProDescList2,
            singleProDescList3,
            singleProDescList4,
            singleProDescList5,
            singleProDescList6,
            singleProDescList7,
          }
      }`
      )
      .then((data) => {
        setProjectDetails(data[0]?.projects);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  useEffect(() => {
    // Initialize the Swiper instance when the component mounts
    if (projectDetails.length > 0) {
      const swiper = new SwiperCore(".swiper-container", {
        loop: true,
        autoplay: {
          delay: 4000, // Autoplay delay in milliseconds
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // Allow clicking on pagination bullets
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          // When window width is <= 640px (mobile screens)
          640: {
            slidesPerView: 1,
          },
          // When window width is <= 768px (tablet screens)
          768: {
            slidesPerView: 2,
          },
          // Default for larger screens
          1024: {
            slidesPerView: 3,
          },
        },
        spaceBetween: 30, // Add space between slides
      });

      // Destroy the Swiper instance when the component unmounts
      return () => {
        swiper.destroy();
      };
    }
  }, [projectDetails]);

  const { slug } = useParams();

  // console.log(slug, "slug");

  // Find the selected service item using the slug
  const selectedItem = projectDetails?.find((item) => item.id === slug);

  if (!selectedItem) {
    return <div>Project not found</div>;
  }

  return (
    <div className="singleProjectContainer">
      {loading ? ( // Render the loader if loading is true
        <div className="flex justify-center items-center h-full">
          <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12"></div>
        </div>
      ) : (
        <div className="prowrapper">
          <div className="topProjectCont">
            <div className="leftProjectCont">
              <h2>{selectedItem?.title}</h2>
              <h2>{selectedItem?.subtitle}</h2>
            </div>
            <div className="rightProjectCont">
              <img src={selectedItem?.logoUrl} alt="" />
              <div className="rightSemiPro">
                <h3>{selectedItem?.company}</h3>
                {/* <span>21/06/2021</span> */}
              </div>
            </div>
          </div>

          <div className="swiper-container">
            <div className="swiper-wrapper">
              {selectedItem?.singleSliderUrl1 && (
                <div className="swiper-slide swiperSlideProject">
                  <img src={selectedItem?.singleSliderUrl1} alt="project1" />
                </div>
              )}
              {selectedItem?.singleSliderUrl2 && (
                <div className="swiper-slide swiperSlideProject">
                  <img src={selectedItem?.singleSliderUrl2} alt="project2" />
                </div>
              )}

              {selectedItem?.singleSliderUrl3 && (
                <div className="swiper-slide swiperSlideProject">
                  <img src={selectedItem?.singleSliderUrl3} alt="project3" />
                </div>
              )}

              {selectedItem?.singleSliderUrl4 && (
                <div className="swiper-slide swiperSlideProject">
                  <img src={selectedItem?.singleSliderUrl4} alt="project4" />
                </div>
              )}
            </div>

            <div className="swiper-pagination"></div>
          </div>
          <div className="swiper-button-prev">
            <div className="arrow"></div>
          </div>
          <div className="swiper-button-next">
            <div className="arrow"></div>
          </div>
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}

          {/* Project Description */}
          <div className="projectDescription">
            <h2>Description</h2>

            {/* <span>{selectedItem?.singleProDesc}</span> */}
            <div>
              {selectedItem?.singleProDesc.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </div>

            <div className="projectDescList">
              <ol>
                {selectedItem?.singleProDescList1 && (
                  <li> {selectedItem?.singleProDescList1}</li>
                )}
                {selectedItem?.singleProDescList2 && (
                  <li> {selectedItem?.singleProDescList2}</li>
                )}
                {selectedItem?.singleProDescList3 && (
                  <li> {selectedItem?.singleProDescList3}</li>
                )}
                {selectedItem?.singleProDescList4 && (
                  <li> {selectedItem?.singleProDescList4}</li>
                )}
                {selectedItem?.singleProDescList5 && (
                  <li> {selectedItem?.singleProDescList5}</li>
                )}
                {selectedItem?.singleProDescList6 && (
                  <li> {selectedItem?.singleProDescList6}</li>
                )}
                {selectedItem?.singleProDescList7 && (
                  <li> {selectedItem?.singleProDescList7}</li>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SingleProjectPage;
