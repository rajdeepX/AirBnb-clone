import { useState } from "react";
import Navbar from "../components/Navbar";
import "./RoomPage.css";
const RoomPage = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // console.log(checkIn);
  // console.log(checkOut);

  const checkInDate = new Date(checkIn);
  console.log(checkInDate);

  const checkOutDate = new Date(checkOut);
  console.log(checkOutDate);

  const dateDiff = checkOutDate.getDate() - checkInDate.getDate();
  console.log(dateDiff);

  return (
    <div>
      <Navbar />
      <div className="room-detail-container">
        <div className="header">
          <h2>Double room in lovely apartment</h2>
          <div className="brief">
            <div className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                4.5 <hr className="dot" /> <a>5 reviews</a>{" "}
                <hr className="dot" /> <a>Milano, Lombardia, Italy</a>
              </p>
            </div>
            <div className="social-tab">
              <div className="share">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <a>Share</a>
              </div>
              <div className="save">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <a>Save</a>
              </div>
            </div>
          </div>
        </div>

        <div className="img-ctn">
          <img
            className="lg-col-2 lg-row-2"
            src="../../images/room-1.png"
            alt="room"
          />
          <img className="img2" src="../../images/room-2.webp" alt="room" />
          <img className="img3" src="../../images/room-3.webp" alt="room" />
          <img className="img4" src="../../images/room-4.webp" alt="room" />
          <img className="img5" src="../../images/room-5.webp" alt="room" />
        </div>

        <div className="room-info">
          <div className="about-room">
            <h3>About this place</h3>
            <p>
              Enjoy an elegant private room of 20 m2 in a renovated apartment of
              160 m2 in the heart of the city center of Nantes in the Graslin
              district. <br /> The charm of the old renovated: ceiling height of
              3.60 m, period parquet, black marble fireplace, comfortable
              bathroom.
            </p>
            <hr />
            <h3>What this place offers</h3>
            <div className="features">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 feature-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Lock on bedroom door
              </p>
            </div>
          </div>
          <div className="room-price">
            <div className="price-rating">
              <p className="price">Rs. 7890 night</p>
              <div className="rating-review">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 rating-star"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="room-rating">
                  4.95 <hr className="price-dot" /> 22 reviews
                </p>
              </div>
            </div>
            <div className="book-room">
              <div className="date">
                <div className="check-in">
                  <input
                    type="date"
                    name="checkInDate"
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="check-out">
                  <input
                    type="date"
                    name="checkOutDate"
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <div className="guests">
                <p>No. of guests</p>
                <input type="number" max="2" min="1" defaultValue="1" />
              </div>
              <button>Reserve</button>
              <div className="per-night">
                <p>Rs. 7890 x {dateDiff} night</p>
                <p>Rs. {7890 * dateDiff}</p>
              </div>
              <div className="service-fee">
                <p>BookInn service fee</p>
                <p>Rs. 900</p>
              </div>
              <hr />
              <div className="total">
                <p>Total before taxes</p>
                <p>Rs. {7890 * dateDiff + 900}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1></h1>
    </div>
  );
};

export default RoomPage;
