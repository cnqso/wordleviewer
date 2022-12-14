import React, { useState, useRef, useEffect } from "react";
import { spring, Motion, presets } from "react-motion";
import {motion} from 'framer-motion';
import "./Scroller.css";
import Scores from "../../wordleScores.json";

// Listen for when component scrolls ouside parent scope
// Reference: https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
	const [entry, updateEntry] = useState({});
	const [node, setNode] = useState(null);
	const observer = useRef(null);

	useEffect(() => {
		if (observer.current) observer.current.disconnect();

		observer.current = new window.IntersectionObserver(
			([entry]) => updateEntry(entry),
			{ root: root.current, rootMargin, threshold }
		);

		const { current: currentObserver } = observer;

		if (node) currentObserver.observe(node);

		return () => currentObserver.disconnect();
	}, [node, root, rootMargin, threshold]);

	return [setNode, entry];
};

const Selection = ({ root, scoreObj, funct, currentsel }) => {
	const [ref, entry] = useIntersect({ root, threshold: 0.5 });

	const inView = entry.intersectionRatio >= 0.5;
	const styles = {
		opacity: spring(inView ? 1 : 0, presets.stiff),
		scale: spring(inView ? 1 : 0.8, presets.wobbly),
	};

	const handleOnClick = (event) => {
		funct.onChange(scoreObj);
	}

	const checkIfSelected = () => {
		if (scoreObj.wordle === currentsel) {
			return "#6ada64";
		}
		else {
			return "white";
		}
	}

	return (
		<Motion defaultStyle={{ opacity: 0, scale: 0 }} style={styles}>
			{({ opacity, scale }) => (
				<motion.div whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }} className="box" ref={ref} style={{ opacity }}>
					<div
						className="box__inner"
						style={{ transform: `scale(${scale})` }}
						onClick={handleOnClick} 
					>
						<h2 style={{color: checkIfSelected()}} className="box__heading">{scoreObj.wordle}</h2>
					</div>
				</motion.div>
			)}
		</Motion>
	);
};

const Scroller = (props) => {
	const ref = useRef(null);
	return (
			<div ref={ref} className="scroller">
				{Scores.map((k) => (
					<Selection 
						key={k.wordle} 
						root={ref} 
						scoreObj={k} 
						funct={props}
						currentsel={props.selection}
					/>
				))}
			</div>
	);
};

export default Scroller;
