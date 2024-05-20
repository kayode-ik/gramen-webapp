import Footer from "../../components/Footer";

import contactBg from "../../assets/contactBg.svg";

import location from "../../assets/location.svg";
import phone from "../../assets/phoneContact.svg";
import mail from "../../assets/mailContact.svg";

import "../../styles/contactStyles.css";

const ContactPage = () => {
  return (
    <div className="contactContainer">
      <div
        className="contactSection bg-cover bg-center "
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="contactContent">
          <div className="contactTop  flex flex-col items-center justify-content">
            <span
              className=" text-center pt-24 font-extrabold uppercase text-sm tracking-wide"
              style={{ color: "#D33333" }}
            >
              Want to talk?
            </span>
            <h3 className="text-4xl text-black uppercase font-extrabold tracking-wide">
              Contact us
            </h3>
          </div>

          <div className="formCon pt-8 px-48">
            <div className="nameSec">
              <label
                htmlFor="name"
                className="pb-2 text-base tracking-wide font-light"
              >
                Name
              </label>{" "}
              <br />
              <input
                type="text"
                className="outline-none border-none w-full p-2 my-4"
              />
            </div>
            <div className="emailSec">
              <label
                htmlFor="email"
                className="pb-2 text-base tracking-wide font-light"
              >
                Email
              </label>{" "}
              <br />
              <input
                type="email"
                className="outline-none border-none w-full p-2 my-4"
              />
            </div>
            <div className="messageSec">
              <label
                htmlFor="message"
                className="pb-2 text-base tracking-wide font-light"
              >
                Message
              </label>{" "}
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="outline-none border-none w-full p-2 my-4 resize-none"
              ></textarea>
            </div>

            <div className="btn flex justify-center p-4 pb-24">
              <div
                className=" btn22 text-white p-2 rounded text-center w-48 font-bold tracking-wide"
                style={{ background: "#011359" }}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Content */}
      <div className="locationContainer  pb-36">
        <div className="locationContent1 mx-24 mt-24">
          <div className="locTop flex flex-col items-center">
            <img src={location} alt="" className="w-8" />
            <h3
              className="font-semibold text-base tracking-wide pt-8"
              style={{ color: "#00051B" }}
            >
              Head Office:
            </h3>
            <span className="font-Gilroy-regular -w-52 text-center text-sm font- tracking-wide">
              Gramen jetty Chevron Clinic Road, Off NPA Expressway, Edjeba
              Warri, Delta State, Nigeria.
            </span>
          </div>
          <br />
          <div className="locBottom flex flex-col items-center ">
            <h3
              className="font-semibold text-base tracking-wide"
              style={{ color: "#00051B" }}
            >
              Port Harcourt Office:
            </h3>
            <span className=" font-Gilroy-regular w-64 text-center text-sm font- tracking-wide">
              6, Mabisel Hotel Avenue, Off Peter Odili Road, Trans Amadi
              Industrial Layout, P. O. Box 14709. Port Harcourt, Rivers State,
              Nigeria.
            </span>
          </div>

          <div className="Contactline tabContactLine"></div>
        </div>
        {/* line Vertical */}
        {/* Phone Contact */}
        <div className="locationContent2 mx-24 mt-24 ">
          <div className="imgLocation">
            <img src={phone} alt="" className="w-12" />
            <div className="numbers mt-8 leading-10"></div>
            <p
              className="font-semibold text-base tracking-wide pb-2"
              style={{ color: "#00051B" }}
            >
              08037380078
            </p>
            <p
              className="font-semibold text-base tracking-wide pb-2"
              style={{ color: "#00051B" }}
            >
              09064230649
            </p>
            <p
              className="font-semibold text-base tracking-wide pb-2"
              style={{ color: "#00051B" }}
            >
              08078994450
            </p>
            <p
              className="font-semibold text-base tracking-wide pb-2"
              style={{ color: "#00051B" }}
            >
              08165558820
            </p>
          </div>

          <div className="Contactline tabContactLine"></div>
        </div>
        {/* line Vertical */}
        {/* MAil Contact */}
        <div className="locationContent3 mx-24 mt-24">
          <div className="mailLocation">
            <img src={mail} alt="" className="w-12" />

            <div className="mail pt-8">
              <p
                className="font-semibold text-base tracking-wide pb-2"
                style={{ color: "#00051B" }}
              >
                info@gramenpetroserve.com
              </p>
              <p
                className="font-semibold text-base tracking-wide pb-2"
                style={{ color: "#00051B" }}
              >
                gramenpetroserve@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;