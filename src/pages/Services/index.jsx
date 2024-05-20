import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

// import service1 from "../../assets/service1.svg";
// import service1 from "../../assets/service1.svg";
// import service2 from "../../assets/service2.svg";
// import service3 from "../../assets/service3.svg";
// import service4 from "../../assets/service4.svg";
// import service5 from "../../assets/service5.svg";
// import service6 from "../../assets/service6.svg";

import "../../styles/serviceStyles.css";

import serviceData from "../../utils/services.js";
import ServiceList from "../../components/ServiceList";

const ServicesPage = () => {
  const [serveData, setServeData] = useState([]);

  useEffect(() => {
    setServeData(serviceData);
  }, [serviceData]);

  // console.log(serveData, "serveData");

  return (
    <div
      className="servicesContainer"
      // style={{ background: "darkblue", opacity: "75%"}}
    >
      <div className="servicesWrapperr">
        {/* hero Section */}
        <div className="serveText">
          <h2 className="pt-24 text-center text-white font-light tracking-wider uppercase">
            Our Services
          </h2>
        </div>

        {/* bottom Services */}
        <div className="bottomServices py-24 ">
          {serveData.items?.map((item, index) => (
            <ServiceList
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
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

// <div
//             className="borderDiv flex-itemImg topServe1 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service1} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-Gilroy-bold font-extrabold text-xl uppercase py-5">
//               Structural & Pipeline <br /> Construction
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Expertise in constructing Pump Stations, <br /> Flow Stations, Gas
//               Plants, and Manifolds.
//             </p>
//           </div>
//           <div
//             className=" borderDiv flex-itemImg  topServe2 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service2} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
//               Engineering, Operation <br /> & Maintenance
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Comprehensive solutions in Mechanical, <br /> Civil & Electrical
//               Services
//             </p>
//           </div>
//           <div
//             className=" borderDiv flex-itemImg topServe3 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service3} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
//               Offshore Platforms <br /> Construction
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Building and maintaining offshore <br /> platforms to the highest
//               standards.
//             </p>
//           </div>
//           <div
//             className=" borderDiv flex-itemImg topServe4 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service4} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
//               Pipeline Installation <br /> & Repair Projects
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Material Take-off, Pipeline Row survey, <br /> Engineering,
//               Laying, Welding, NDT, <br /> Coating, & Emergency Repairs.
//             </p>
//           </div>
//           <div
//             className=" borderDiv flex-itemImg  topServe5 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service5} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
//               Oil & Gas <br />
//               Consultancy Services
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Strategic consultancy to enhance <br /> project efficiency and
//               success
//             </p>{" "}
//             <br />
//           </div>
//           <div
//             className=" borderDiv flex-itemImg  topServe6 text-center flex flex-col items-center"
//             style={{ width: "300px" }}
//           >
//             {/* images */}
//             <img src={service6} alt="img1" style={{ width: "7rem" }} />
//             {/* service text */}
//             <h2 className="text-gray-200 font-extrabold text-xl uppercase py-5">
//               Facility Upgrade <br />
//               Projects
//             </h2>
//             {/* services span */}
//             <p className="text-white  text-sm leading-7 tracking-wider">
//               Facility upgrades, including the Pump <br /> and Turbine
//               Installations, and Gas Processing Facilities.
//             </p>
//           </div>
