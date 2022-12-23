import React from 'react';
import "./Contact.scss";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';  
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
            <span>Stay In Touch</span>
            <div className='mail'>
                <input type={"text"} placeholder={"Enter Your Email Id"} />
                <button>Join Us</button>
            </div>
            <div className='icons'>
                <InstagramIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
                <FacebookOutlinedIcon/>
                <TwitterIcon/>
            </div>
      </div>
    </div>
  )
}

export default Contact;
