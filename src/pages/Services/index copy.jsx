import Footer from "../../components/Footer";

import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import service4 from "../../assets/service4.svg";
import service5 from "../../assets/service5.svg";
import service6 from "../../assets/service6.svg";

import "../../styles/serviceStyles.css";

const ServicesPage = () => {
  return (
    <div
      className="servicesContainer"
      // style={{ background: "darkblue", opacity: "75%"}}
    >
      <div className="servicesWrapper">
        {/* hero Section */}
        <section>
          <h2 className="pt-24 text-center text-white font-light text-4xl tracking-wider uppercase">
            Our Services
          </h2>
        </section>

        {/* Top Services flex */}
        <div className="topServices  flex justify-center py-24 gap-24">
          <div
            className="topServe1 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service1} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-Gilroy-bold font-extrabold text-xl uppercase py-5">
              Structural & Pipeline <br /> Construction
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Expertise in constructing Pump Stations, <br /> Flow Stations, Gas
              Plants, and Manifolds.
            </p>
          </div>
          <div
            className="topServe2 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service2} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Engineering, Operation <br /> & Maintenance
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Comprehensive solutions in Mechanical, <br /> Civil & Electrical
              Services
            </p>
          </div>
          <div
            className="topServe3 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service3} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Offshore Platforms <br /> Construction
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Building and maintaining offshore <br /> platforms to the highest
              standards.
            </p>
          </div>
        </div>

        {/* Line Horizontal */}
        <div className="lineThrough">
          <hr
            className="mx-20 border"
            style={{ border: "0.5px solid grey;" }}
          />
        </div>

        {/* bottom Services */}
        <div className="bottomServices flex justify-center py-24 gap-24 ">
          <div
            className="bottomServe1 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service4} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Pipeline Installation <br /> & Repair Projects
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Material Take-off, Pipeline Row survey, <br /> Engineering,
              Laying, Welding, NDT, <br /> Coating, & Emergency Repairs.
            </p>
          </div>
          <div
            className="bottomServe2 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service5} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Oil & Gas <br />
              Consultancy Services
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Strategic consultancy to enhance <br /> project efficiency and
              success
            </p>
          </div>
          <div
            className="bottomServe3 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service6} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Facility Upgrade <br />
              Projects
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Facility upgrades, including the Pump <br /> and Turbine
              Installations, and Gas Processing Facilities.
            </p>
          </div>
          <div
            className="bottomServe1 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service4} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Pipeline Installation <br /> & Repair Projects
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Material Take-off, Pipeline Row survey, <br /> Engineering,
              Laying, Welding, NDT, <br /> Coating, & Emergency Repairs.
            </p>
          </div>
          <div
            className="bottomServe2 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service5} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Oil & Gas <br />
              Consultancy Services
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Strategic consultancy to enhance <br /> project efficiency and
              success
            </p>
          </div>
          <div
            className="bottomServe3 text-center flex flex-col items-center"
            style={{ width: "300px" }}
          >
            {/* images */}
            <img src={service6} alt="img1" style={{ width: "7rem" }} />
            {/* service text */}
            <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
              Facility Upgrade <br />
              Projects
            </h2>
            {/* services span */}
            <p className="text-white  text-sm leading-7 tracking-wider">
              Facility upgrades, including the Pump <br /> and Turbine
              Installations, and Gas Processing Facilities.
            </p>
          </div>
        </div>

        {/* footer */}
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
