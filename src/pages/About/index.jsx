import aboutUsHero from "../../assets/aboutUsHero.svg";
import visionAbout from "../../assets/visionAbout.svg";
import missionAbout from "../../assets/missionAbout.svg";
import personAbout from "../../assets/personAbout.svg";
import whyworkBg from "../../assets/whyworkBg.svg";
import certifyBg from "../../assets/certificateGramen.svg";

import partner1 from "../../assets/partner1.svg";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";
import partner4 from "../../assets/partner4.svg";
import partner5 from "../../assets/partner5.svg";
import partner6 from "../../assets/partner6.svg";
import Footer from "../../components/Footer";

import "../../styles/aboutStyles.css";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      {/* Hero Section with text */}
      <div
        className="aboutSection bg-cover bg-center "
        style={{ backgroundImage: `url(${aboutUsHero})`, height: "30vh" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="aboutText">
          <h2 className="font-extralight text-center pt-24 text-white font-semiBold uppercase text-4xl tracking-wide">
            About Us
          </h2>
        </div>
      </div>

      {/* who we are / Vision / Mission / Image */}
      <div className="missionContainer ml-10">
        <div className="missionWrapper flex  ">
          <div className="mission1  flex flex-col justify-center">
            {/* <span></span> */}
            <span
              style={{ color: "#D33333" }}
              className="font-bold text-base leading-6 tracking-wide uppercase "
            >
              Elevate Your Energy Ventures
            </span>
            {/* who we are */}
            <h2
              style={{ color: "#00051B" }}
              className="font-bold text-4xl leading-none my-2"
            >
              WHO WE ARE
            </h2>

            {/* span text */}
            <div
              style={{ color: "#3A3C45" }}
              className="missionContent text-base font-normal leading-7 tracking-wider"
            >
              <p className="">
                As the premier contractor for installation, maintenance, and
                repair projects in Nigeria, we redefine excellence in the oil
                and gas industry.{" "}
              </p>{" "}
              <br />
              <p>
                Our dedicated task delivery teams, composed of seasoned
                Engineers, Surveyors, Welders, and Fitters, guarantee swift and
                secure project turnarounds.
              </p>
            </div>
          </div>

          <div className="missionFlexTab">
            <div
              className="mission2 flex flex-col justify-center p-8"
              style={{ backgroundColor: "#F0F2F9" }}
            >
              <div className="missTop pt-8">
                {/* img text */}
                <div className="mobileVision flex items-center gap-6 pb-4">
                  <img src={visionAbout} alt="" className="w-8" />
                  <h3
                    style={{ color: "#00051B" }}
                    className=" font-bold text-2xl leading-none uppercase"
                  >
                    Vision
                  </h3>
                </div>
                {/* content */}
                <span
                  style={{
                    color: "#011359",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className=" leading-6 tracking-wide "
                >
                  To deliver integrated facility engineering & construction
                  services to the Nigerian Oil and Gas Industry that meets INTL.
                  acceptable standards using local resources
                </span>
              </div>
              <div className="missBottom pt-8">
                {/* img text */}
                <div className="mobileMission flex items-center gap-6 pb-4">
                  <img src={missionAbout} alt="" className="w-8" />
                  <h3
                    style={{ color: "#00051B" }}
                    className=" font-bold text-2xl leading-none uppercase"
                  >
                    Mission
                  </h3>
                </div>

                {/* content */}
                <span
                  style={{
                    color: "#011359",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className="leading-6 tracking-wide "
                >
                  To provide our clients with quality service delivered
                  consistently on time, embrace innovative ideas and develop to
                  be a service company of choice; without equal in the Nigerian
                  Oil & Gas sector
                </span>
              </div>
            </div>
            <div className="mission3">
              <img src={personAbout} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="clientWrapper" style={{ background: "#D5DEFF" }}>
        <div className="clientContainer ml-12 mr-12 ">
          <div className="aboutClient flex  ">
            <div
              className="clientText  font-gilroy font-semibold text-4xl uppercase"
              style={{ color: "#00051B" }}
            >
              Clients
            </div>
            <div className="clientImages mt-12">
              <div className="clientImgTop flexClient">
                <div className="img1 flex-itemImg">
                  <img src={partner1} alt="" style={{ width: "75%" }} />
                </div>
                <div className="img2 flex-itemImg">
                  <img src={partner2} alt="" style={{ width: "75%" }} />
                </div>
                <div className="img3 flex-itemImg">
                  <img src={partner3} alt="" style={{ width: "75%" }} />
                </div>
                <div className="img4 flex-itemImg">
                  <img src={partner4} alt="" style={{ width: "75%" }} />
                </div>
                <div className="img5 flex-itemImg">
                  <img src={partner5} alt="" style={{ width: "75%" }} />
                </div>
                <div className="img6 flex-itemImg">
                  <img src={partner6} alt="" style={{ width: "75%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why work with Us */}
      <div
        className="workWithContainer bg-cover bg-center "
        style={{
          backgroundImage: `url(${whyworkBg})`,
          // backgroundColor: "rgba(36, 72, 144, 0.5)",
        }}
      >
        <div
          className="workWithSection absolute inset-0  z-0"
          style={{
            backgroundColor: "rgba(1, 19, 89, 0.85)",
          }}
        ></div>
        {/* Mobile and web */}
        <div className="webWrapperFull workWrapper ml-12 mr-12 pb-12 pt-12 relative z-10">
          <div className="textWork">
            <h2
              className="font-extrabold text-4xl uppercase text-center pb-10"
              style={{ color: "#DFE6FF" }}
            >
              why work with us?
            </h2>
          </div>
          <div className="workWithTop flex justify-center align-center pb-12 gap-28 gridWebMode">
            <div className="workWithContent1  flex flex-col justify-center items-center">
              {/* 01 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                01
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "100px", color: "#ff9898" }}
              >
                Proven Expertise
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Benefit from our extensive experience and track record in
                delivering high-quality services to the Nigerian Oil and Gas
                Industry since 1993
              </div>
            </div>
            <div className="workWithContent2 flex flex-col justify-center items-center">
              {/* 02 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                02
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "160px", color: "#ff9898" }}
              >
                ISO 9001:2015 Certification
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Choose a partner committed to quality and international
                standards, as evidenced by our ISO 9001:2015 certification.
              </div>
            </div>
            <div className="workWithContent3 flex flex-col justify-center items-center">
              {/* 01 */}
              <h2 className="text-white  font-light text-5xl text-center p-4">
                03
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "100px", color: "#ff9898" }}
              >
                Safety Excellence
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Rely on our excellent Health, Safety, and Environment (HSE)
                performance, prioritizing the well-being of our teams and the
                environments we operate in.
              </div>
            </div>
            <div className="workWithContent4 flex flex-col justify-center items-center">
              {/* 04 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                04
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{ width: "225px", color: "#ff9898" }}
              >
                Timely & Consistent Delivery
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Count on us to consistently deliver quality services on time,
                reflecting our dedication to being a service company of choice
              </div>
            </div>
            <div className="workWithContent5 flex flex-col justify-center items-center">
              {/* 03 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                05
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{ width: "225px", color: "#ff9898" }}
              >
                Diverse Service Portfolio
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Access a comprehensive range of services, including structural
                construction, oil & gas consultancy, and facility upgrades.
              </div>
            </div>
            <div className="workWithContent6 flex flex-col justify-center items-center">
              {/* 03 */}
              <h2 className="text-white  font-light text-5xl text-center  pb-4">
                06
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{
                  width: "225px",
                  color: "#ff9898",
                  marginLeft: "2rem",
                }}
              >
                Client-Centric Approach
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Enjoy a client-centric approach where your specific needs are
                understood and addressed with tailored solutions
              </div>
            </div>
          </div>
        </div>
        {/* Tablet View */}
        <div className="tabletWrapperFull workWrapper ml-12 mr-12 pb-12 pt-12 relative z-10">
          <div className="textWork">
            <h2
              className="font-extrabold text-4xl uppercase text-center pb-10"
              style={{ color: "#DFE6FF" }}
            >
              why work with us?
            </h2>
          </div>
          {/* <div className="workWithTop flex justify-center pb-12 gap-28"> */}
          <div className="gridFlow">
            <div className="workWithContent1  flex flex-col justify-center items-center">
              {/* 01 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                01
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "100px", color: "#ff9898" }}
              >
                Proven Expertise
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Benefit from our extensive experience and track record in
                delivering high-quality services to the Nigerian Oil and Gas
                Industry since 1993
              </div>
            </div>
            <div className="workWithContent2 flex flex-col justify-center items-center">
              {/* 02 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                02
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "160px", color: "#ff9898" }}
              >
                ISO 9001:2015 Certification
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Choose a partner committed to quality and international
                standards, as evidenced by our ISO 9001:2015 certification.
              </div>
            </div>
            <div className="workWithContent3 flex flex-col justify-center items-center">
              {/* 01 */}
              <h2 className="text-white  font-light text-5xl text-center p-4">
                03
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg"
                style={{ width: "100px", color: "#ff9898" }}
              >
                Safety Excellence
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold  text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Rely on our excellent Health, Safety, and Environment (HSE)
                performance, prioritizing the well-being of our teams and the
                environments we operate in.
              </div>
            </div>
            {/* </div> */}
            {/* <div className="workWithBottom flex justify-center pb-12 gap-28 "> */}
            <div className="workWithContent4 flex flex-col justify-center items-center">
              {/* 04 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                04
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{ width: "225px", color: "#ff9898" }}
              >
                Timely & Consistent Delivery
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Count on us to consistently deliver quality services on time,
                reflecting our dedication to being a service company of choice
              </div>
            </div>
            <div className="workWithContent5 flex flex-col justify-center items-center">
              {/* 03 */}
              <h2 className="text-white  font-light text-5xl text-center pb-4">
                05
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{ width: "225px", color: "#ff9898" }}
              >
                Diverse Service Portfolio
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Access a comprehensive range of services, including structural
                construction, oil & gas consultancy, and facility upgrades.
              </div>
            </div>
            <div className="workWithContent6 flex flex-col justify-center items-center">
              {/* 03 */}
              <h2 className="text-white  font-light text-5xl text-center  pb-4">
                06
              </h2>
              {/* span */}
              <span
                className="flex justify-center p-4 font-extrabold text-lg text-center"
                style={{
                  width: "225px",
                  color: "#ff9898",
                  marginLeft: "2rem",
                }}
              >
                Client-Centric Approach
              </span>
              {/* spanText */}
              <div
                className="w-72 font-bold text-center p-4 text-base leading-7 tracking-wider"
                style={{ color: "#fefefe" }}
              >
                Enjoy a client-centric approach where your specific needs are
                understood and addressed with tailored solutions
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/*  ========= start Mobile Version Certification ======== */}
      <div className="certificationContainer  ml-12 mr-12">
        <div className="certTent">
          <span
            className="font-extrabold text-base leading-6 tracking-wide uppercase pt-9"
            style={{ color: "#D33333" }}
          >
            Exemplary Commitment to Quality
          </span>
          {/* Title */}
          <h2
            className="mobileCert font-extrabold text-5xl pt-3"
            style={{ color: "#00051B" }}
          >
            ISO 9001:2015 <br /> Certification
          </h2>
          <h2
            className="tabCert font-extrabold text-5xl pt-3"
            style={{ color: "#00051B" }}
          >
            ISO 9001:2015 Certification
          </h2>
        </div>
        <div className="certificateWrapper pt-12 pb-12 flex">
          <div className="certificateLeft pl-36 pt-14 " style={{ flex: "1" }}>
            {/* Text */}
            <p
              style={{ width: "450px", color: "#00051B" }}
              className="text-sm leading-7 tracking-wide"
            >
              At Gramen Petroserve, we take pride in our unwavering commitment
              to delivering services of the highest quality. Our dedication to
              excellence is underscored by our ISO 9001:2015 certification, a
              testament to our adherence to rigorous international standards.
              This certification reflects not only our commitment to quality but
              also our continual pursuit of operational efficiency, customer
              satisfaction, and the consistent delivery of top-tier solutions.
              When you choose Gramen Petroserve, you choose a partner that
              prioritizes quality at every stage, ensuring that your projects
              are executed with precision and excellence.
            </p>
          </div>
          <div className="certificateRight" style={{ flex: "1" }}>
            <img src={certifyBg} alt="" />
          </div>
        </div>
      </div>

      {/*  ========== End Mobile Version Certification ========= */}

      {/* ================================ */}

      {/* start Web / Tablet Version Certification */}
      <div className="certificationContainerWeb  ml-12 mr-12">
        <div className="certificateWrapper pt-12 pb-12 flex">
          <div className="certificateLeft pl-36 pt-14 " style={{ flex: "1" }}>
            <span
              className="font-extrabold text-base leading-6 tracking-wide uppercase pt-9"
              style={{ color: "#D33333" }}
            >
              Exemplary Commitment to Quality
            </span>
            {/* Title */}
            <h2
              className="font-extrabold text-5xl pt-3"
              style={{ color: "#00051B" }}
            >
              ISO 9001:2015 <br /> Certification
            </h2>
            {/* Text */}
            <p
              style={{ width: "450px", color: "#00051B" }}
              className="pt-9  text-sm leading-7 tracking-wide"
            >
              At Gramen Petroserve, we take pride in our unwavering commitment
              to delivering services of the highest quality. Our dedication to
              excellence is underscored by our ISO 9001:2015 certification, a
              testament to our adherence to rigorous international standards.
              This certification reflects not only our commitment to quality but
              also our continual pursuit of operational efficiency, customer
              satisfaction, and the consistent delivery of top-tier solutions.
              When you choose Gramen Petroserve, you choose a partner that
              prioritizes quality at every stage, ensuring that your projects
              are executed with precision and excellence.
            </p>
          </div>
          <div className="certificateRight" style={{ flex: "1" }}>
            <img src={certifyBg} alt="" />
          </div>
        </div>
      </div>

      {/* End Web / Tablet Version Certification */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
