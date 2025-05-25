
import Header from "../Layout/Header";
import "./Home.css"; // Ensure this file exists for styling
import bloodImage from "../assets/2762023161833920.png"; // Uncomment if you have a local image
import { useNavigate } from "react-router-dom";


function Home() {
      const navigate = useNavigate(); // Initialize navigation
  return (
    <>
      <Header />
      <div className="home-container">

        <img src={bloodImage} alt="Blood Donation" className="hero-image" /> 
        {/* <img src="https://source.unsplash.com/600x400/?blood-donation" alt="Blood Donation" className="hero-image" />
        <img src="/2762023161833920.png" alt="Blood Donation" className="hero-image" /> */}

        <h2>Save Lives with Blood Donation</h2>
        <p>Every drop matters! Join the movement and help those in need by donating blood.</p>
        <div className="cta-buttons">
          <button className="donate-btn" onClick={() => navigate("/register")}>Register as Donor</button>
          <button className="learn-btn" onClick={() => alert("Redirecting to information page!")}>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Home;
