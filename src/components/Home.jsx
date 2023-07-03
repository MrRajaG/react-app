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
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores atque sequi quaerat cumque et deleniti illo tempore. Natus quaerat voluptas tenetur voluptate a iste quam accusantium culpa? Obcaecati corporis optio in magni consectetur, quo cum debitis. Perferendis, illo. Animi, placeat sit, reiciendis quod beatae et recusandae temporibus porro laboriosam, ipsam voluptatibus maiores? Nam vero doloribus minima est vitae corporis ex suscipit, commodi enim omnis ratione, assumenda repellat accusantium necessitatibus voluptatum perferendis. Aliquid numquam porro, facere delectus aspernatur quod corporis? Sapiente nobis corporis, praesentium illum voluptatum maiores quisquam animi architecto, quidem facilis asperiores.</p>
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