import React from "react";
import './Nav.css';
import {motion} from 'framer-motion';

const Nav = () => {
	return (
		<nav>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "linear", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a href="https://www.google.com/">Home</a>
			</motion.div>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a href="https://www.google.com/">Second</a>
			</motion.div>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a href="https://www.google.com/">Third</a>
			</motion.div>
			<motion.div 
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
				className="indexy2">
				<a href="https://www.google.com/">Fourth</a>
			</motion.div>
		</nav>
	);
};

export default Nav;