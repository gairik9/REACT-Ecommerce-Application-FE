import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>CATEGORIES</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>Shoes</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>LINKS</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stories</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>ABOUT</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="item">
          <h1>CONTACT</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">TOPCLOTHE. Made With <span>&#9829;</span> By Team Karimganj</span>
          <span className="copyright">© Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
