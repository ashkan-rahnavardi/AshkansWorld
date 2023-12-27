'use client';

import { useEffect, useState } from 'react';
// import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
	const [position, setPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [laggingPosition, setLaggingPosition] = useState<{
		x: number;
		y: number;
	}>({ x: 0, y: 0 });

	useEffect(() => {
		const updateCursorPosition = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener('mousemove', updateCursorPosition);

		return () => {
			document.removeEventListener('mousemove', updateCursorPosition);
		};
	}, []);

	useEffect(() => {
		const laggingUpdate = () => {
			setLaggingPosition((prevPosition) => ({
				x: position.x - (position.x - prevPosition.x) * 0.1,
				y: position.y - (position.y - prevPosition.y) * 0.1,
			}));
		};

		const laggingInterval = setInterval(laggingUpdate, 1); // Adjust the interval as needed

		return () => {
			clearInterval(laggingInterval);
		};
	}, [position]);

	return (
		<>
			<div
				className="cursorDot"
				style={{ left: `${position.x}px`, top: `${position.y}px` }}
			/>

			<div
				className="cursorCircle"
				style={{
					left: `${laggingPosition.x}px`,
					top: `${laggingPosition.y}px`,
				}}
			/>
		</>
	);
};

export default CustomCursor;

// .cursorDot {
// 	position: absolute;
// 	width: 4px;
// 	height: 4px;
// 	background-color: #fff;
// 	border-radius: 50%;
// 	transform: translate(-50%, -50%);
// 	pointer-events: none;
// 	z-index: 9999;
// }

// .cursorCircle {
// 	z-index: 9999;
// 	position: absolute;
// 	width: 20px;
// 	height: 20px;
// 	border: 2px solid #fff;
// 	border-radius: 50%;
// 	background-color: transparent;
// 	transform: translate(-50%, -50%);
// 	pointer-events: none;
// }

// .customCursor {
// 	position: fixed;
// 	width: 20px;
// 	height: 20px;
// 	border: 2px solid #f9f9f9;
// 	border-radius: 50%;
// 	background-color: transparent;
// 	pointer-events: none;
// 	z-index: 9999;
// }
