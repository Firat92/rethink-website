import React from 'react';
import rethinkavatar from '../images/rethinkavatar.svg';
import rethinklogo from '../images/rethinklogo.svg';
import Button from './Button';

const Header = () => {
	return (
		<div className='header'>
			<div className='info-left'>
				<img src={rethinklogo} alt='rethinklogo' className='info-left-logo' />
				<div className='info-left-up'>
					<h1 className=''>Get Advanced AI + Expert Created </h1>
					<p className='border'>Logos</p>
				</div>
				<p className='info-left-content'>
					Boost your sales <strong className='mark'>10x faster</strong> with
					content customized by our unique partnership of{' '}
					<strong className='mark'>human creativity and AI optimization</strong>
				</p>
				<h4>Sign Up For The BETA!</h4>
				<div className='info-left-sign'>
					<input type='text' placeholder='Business Name' />
					<p>would like a beta invite sent to </p>
					<input type='email' placeholder='@email address' />
					<p>when it’s ready!</p>
				</div>
				<div className='btn'>
					<Button>Notify me</Button>
					<Button variant='ghost'>
						<a
							href='https://retink.io/fap/'
							target='_blank'
							rel='noreferrer'
							className='signbtn'
						>
							Sign up as a freelance partner
						</a>
					</Button>
				</div>
			</div>

			<div className='info-right'>
				<img src={rethinkavatar} alt='rethinkavatar' />
			</div>
		</div>
	);
};

export default Header;
