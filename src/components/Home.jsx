import React from 'react';
import vg from '../assets/2.webp';
import {
	AiFillGoogleCircle, 
	AiFillAmazonCircle, 
	AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
        <>
          <div className='home' id="home">
			<main>
				<h1>Wired Wizards</h1>
				<p>Solutions to all your problems</p>
			</main>
          </div>

		  <div className="home2">
			<img src={vg} alt='Graphics'/>
			<div>
				<p>
					We are your one and only solution to the tech problems you face
					every day. We are leading tech company whose aim is to increase the
					problem solving ability in children.
				</p>
			</div>
		  </div>

		  <div className="home3" id='about'>
			<div>
				<h1>Who we are?</h1>
				<p>Possessing a strong foundation in Frontend Development. I am dedicated to delivering exceptional outcomes and exceeding organizational goals. With a keen eye for detail and a strategic mindset, I consistently demonstrate the ability to streamline processes, optimize efficiency, and drive growth. Strong interpersonal and communication skills allow me to effectively collaborate with cross-functional teams and build strong relationships with clients and stakeholders. A self-motivated and proactive individual, I am ready to leverage my expertise and contribute to the success of a forward-thinking organization.</p>
			</div>
		  </div>

		  <div className="home4" id='brands'>
			<div>
				<h1>Brands</h1>
				<article>
					<div style={
						{
							animationDelay: "0.3s",
						}
					}>
						<AiFillGoogleCircle/>
						<p>Google</p>
					</div>
					<div style={
						{
							animationDelay: "0.5s",
						}
					}>
						<AiFillAmazonCircle/>
						<p>Amazom</p>
					</div>
					<div style={
						{
							animationDelay: "0.7s",
						}
					}>
						<AiFillYoutube/>
						<p>Youtube</p>
					</div>
					<div style={
						{
							animationDelay: "1s",
						}
					}>
						<AiFillInstagram/>
						<p>Instagram</p>
					</div>
				</article>
			</div>
		  </div>
        </>
  )
}

export default Home