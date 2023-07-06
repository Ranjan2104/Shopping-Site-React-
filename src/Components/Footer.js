import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div>
        <footer>
            <div className='leftFooter'>
                <h2>Ranjan's Shopping Site</h2>
                <p>
                    An online platform that allows individuals to browse, select, and 
                    purchase products or services from a wide range of categories. 
                    These sites serve as virtual marketplaces, providing a convenient and 
                    accessible way to shop from the comfort of one's own home.
                </p>
                <p>
                    Registered Office Address:
                </p>
                <span>
                    Ranjan's Private Limited,
                    <br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103,
                    <br />
                    Karnataka, India
                </span>
                <br />
                <br />
                <span>
                    Copyright @ 2023 Ranajan's
                </span>
            </div>
            <div className='rightFooter'>
                <span><FacebookIcon /></span>
                <span><InstagramIcon /></span>
                <span><WhatsAppIcon /></span>
                <span><TwitterIcon /></span>
                <span><YouTubeIcon /></span>
            </div>
        </footer>
    </div>
  )
}

export default Footer