import React from 'react';
import Button from './Button';

const SignUp = () => {
	return (
		<div className='signUp'>
			<h2>Sign Up For The BETA to see more</h2>
			<div className='signup-btn'>
				<div className='signup-btn-up'>
					<Button variant='ghost' className='ghost'>
						Business Name
					</Button>
					<Button variant='ghost' className='ghost'>
						Email
					</Button>
				</div>
				<Button className='notifybtn'>Notify me</Button>
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
	);
};

export default SignUp;
