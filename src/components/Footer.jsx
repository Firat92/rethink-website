import React from 'react';
import rethinklogo from '../images/rethinklogo.svg';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import linkedIn from '../images/linkedIn.svg';
import youtube from '../images/youtube.svg';
import pinterest from '../images/pinterest.svg';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-up'>
				<div className='footer-up-left'>
					<img src={rethinklogo} alt='rethinklogo' />
					<div className='footer-up-left-content'>
						<p>Product by Retink Media UG</p>
						<p>Get Early Acess</p>
						<p>Bonn, Germany</p>
						<p>Provide Feedback</p>
					</div>
				</div>
				<div className='footer-up-right'>
					<p>Connect with Us</p>
					<div className='footer-up-right-imgs'>
						<img src={facebook} alt='facebook' />
						<img src={twitter} alt='twitter' />
						<img src={instagram} alt='instagram' />
						<img src={linkedIn} alt='linkedIn' />
						<img src={youtube} alt='youtube' />
						<img src={pinterest} alt='pinterest' />
					</div>
				</div>
			</div>
			<div className='footer-sub'>
				<span>Copyright © 2021 Retink</span>
				<div className='footer-sub-heads'>
					<span>Privacy Policy</span>
					<span>Terms of Service</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
