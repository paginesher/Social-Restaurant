import React from 'react';
import './compStyles/Home.css';


const Home = () => {
	return (
		<div id='mainPage'>
			<iframe src='https://www.google.com/maps/embed/v1/search?q=restaurants%20near%20me&key=AIzaSyBzuFhdFMV78zu8v6_dq6ohhNGwKuSs_KY'></iframe>
		</div>
	);
};

export default Home;
