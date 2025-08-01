import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        <li>Media Centre</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <div className="copyright">
        <p>&#169; 1997-2023 Netflix.Inc</p>
      </div>
    </div>
  );
}

export default Footer;
