import React, { useState } from "react";
import './Nav.css';
import {motion} from 'framer-motion';

const Nav = (props) => {
	

	function handleLinkClick(link) {
	  props.setActiveLink(link);
	}
  
	return (
	  <nav>
		<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a onClick={() => handleLinkClick('gallery')}>Gallery</a>
			</motion.div>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a onClick={() => handleLinkClick('stats')}>Stats</a>
			</motion.div>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a onClick={() => handleLinkClick('about')}>About</a>
			</motion.div>
	  </nav>
	);
  };

export default Nav;






			



					{/* <ul>
		  <li onClick={() => handleLinkClick('home')}>Home</li>
		  <li onClick={() => handleLinkClick('about')}>About</li>
		  <li onClick={() => handleLinkClick('contact')}>Contact</li>
		</ul> */}