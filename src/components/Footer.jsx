import React from 'react';
import './compStyles/Footer.css';


export default function Footer() {
	return (
	  <footer>
		<section className="footer-wrapper">
		  <div className="logoname footer-col">
			<h1>Yummy Tummy</h1>
		  </div>
  
		  <ul className="footer-col footer-nav-list">
		
			<li>Restaurants</li>
			<li>Friends</li>
		  </ul>
  
		  <ul className="footer-col footer-socials-list">
			<li>
			  <a href="https://twitter.com">Twitter</a>
			</li>
			<li>
			  <a href="https://www.youtube.com">
				YouTube
			  </a>
			</li>
			<li>
			  <a href="https://www.instagram.com/">
				Instagram
			  </a>
			</li>
		  </ul>
		</section>
  
		<section className="footer-bottom">
		  <p className="copyright">&copy; Copyright 2022</p>
		</section>
	  </footer>
	);
  }