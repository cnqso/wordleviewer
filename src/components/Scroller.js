import React, { useState, useRef, useEffect } from "react";
import { spring, Motion, presets } from "react-motion";
import "./Scroller.css";
import Scores from "../scores.json";

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

// Generate collection
const generate = (v) => Array.from(Array(v), (_, x) => x);

const Box = ({ root, scoreObj, propz, currentsel }) => {
	const [selected, setSelected] = useState(false);
	const [ref, entry] = useIntersect({ root, threshold: 0.5 });
	const inView = entry.intersectionRatio >= 0.5;
	const styles = {
		opacity: spring(inView ? 1 : 0, presets.stiff),
		scale: spring(inView ? 1 : 0.8, presets.wobbly),
	};

	const handleOnClick = (event) => {
		propz.onChange(scoreObj);
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
				<div className="box" ref={ref} style={{ opacity }}>
					<div
						className="box__inner"
						style={{ transform: `scale(${scale})` }}
						onClick={handleOnClick} 
					>
						<h2 style={{color: checkIfSelected()}} className="box__heading">{scoreObj.wordle}</h2>
					</div>
				</div>
			)}
		</Motion>
	);
};



const Scroller = (props) => {
	const newlist = generate(50);
	const ref = useRef(null);
	console.log(props);
	return (
			<div ref={ref} className="scroller">
				{Scores.map((k,i) => (
					<Box 
						key={k.wordle} 
						root={ref} 
						scoreObj={k} 
						propz={props}
						currentsel={props.selection}
					/>
				))}
			</div>
	);
};

export default Scroller;
