import React from 'react';
import artificialintelligence from '../images/artificialintelligence.svg';
import idenity from '../images/idenity.svg';
import attention from '../images/attention.svg';
import customer from '../images/customer.svg';
import publish from '../images/publish.svg';

import logos from '../images/logos.jpg';
import blogwriting from '../images/blogwriting.png';
import animatedvideos from '../images/animatedvideos.jpg';
import copywriting from '../images/copywriting.png';
import socialmedia from '../images/socialmedia.png';
import productdemo from '../images/productdemo.jpg';

const Group = () => {
	return (
		<div className='group'>
			<div className='cards'>
				<div className='card'>
					<img src={artificialintelligence} alt='artificialintelligence' />
					<h4>MakeAI-assisted Content Choices</h4>
					<p>
						Access and Order from an extensive catalogue in any language and on
						your budget’s terms. If unsure, our AI guides you to the best.
					</p>
				</div>
				<div className='card'>
					<img src={idenity} alt='idenity' />
					<h4>Upload and Maintain your Brand Identity</h4>
					<p>
						Add your preferences and brand assets to ensure the contents is
						consistent with your brand identity. No brand asset? We can make for
						you!
					</p>
				</div>
				<div className='card'>
					<img src={attention} alt='attention' />
					<h4>Be informed as we create</h4>
					<p>
						Your details are translated and sent to the AI, FP, or both (per
						your choice) as you relax and receive continuous updates.
					</p>
				</div>
				<div className='card'>
					<img src={customer} alt='customer' />
					<h4>Receive and Review</h4>
					<p>
						The finished content is delivered and you can make corrections that
						we will effect to satisfy your requirements.
					</p>
				</div>
				<div className='card'>
					<img src={publish} alt='publish' />
					<h4>Publish and Monitor your contents’ progresss</h4>
					<p>
						The finished content is delivered and you can make corrections that
						we will effect to satisfy your requirements.
					</p>
				</div>
			</div>

			{/*  */}
			<div className='group-contents'>
				<div>
					<h2>Transform your Creation Process</h2>
					<p>
						With a new approach toordering content, you can now stop juggling
						multiple documents and meetings and start publishing content faster
						and on demand
					</p>
				</div>
				<div>
					<h2>Activate your business growth with RetinkContent. </h2>
					<p>
						Save time and maintain your brand identity within your budget range
						or sign up for affordable plans and still access multiple content
						services like:
					</p>
				</div>
			</div>
			<div className='pictures'>
				<div className='pic'>
					<img src={logos} alt='logos' />
					<p className='pic-head'>Logos</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Have a unique & creative logo designed to express and represent your
						brand identity.
					</p>
				</div>
				<div className='pic'>
					<img src={blogwriting} alt='blogwriting' />
					<p className='pic-head'>Blog Writing</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Write SEO enriched blog posts as long or short articles on any topic
						of your choice .
					</p>
				</div>
				<div className='pic'>
					<img src={animatedvideos} alt='animatedvideos' />
					<p className='pic-head'>Animated Videos</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Bring animated characters to life to keep your viewers engaged and
						entertained.
					</p>
				</div>
				<div className='pic'>
					<img src={productdemo} alt='productdemo' />
					<p className='pic-head'>Product Demo</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Introduce your product to potential customers in a clear and
						creative video.
					</p>
				</div>
				<div className='pic'>
					<img src={copywriting} alt='copywriting' />
					<p className='pic-head'>Copywriting</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Have creative and compelling copies written to boost your product,
						brand, service or company.
					</p>
				</div>

				<div className='pic'>
					<img src={socialmedia} alt='socialmedia' />
					<p className='pic-head'>Social Media Ads</p>
					<p className='pic-bor'></p>
					<p className='pic-content'>
						Boost sales and awareness with tailor made ads from experts.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Group;
