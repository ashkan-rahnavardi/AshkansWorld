'use client';

import React, { useContext, useEffect, useRef } from 'react';
import CustomCursorContext from './context/CustomCursorContext';
import './style.css';

const CustomCursor: React.FC = () => {
	const { type } = useContext(CustomCursorContext);
	const secondaryCursor = useRef<HTMLDivElement>(null);
	const mainCursor = useRef<HTMLDivElement>(null);
	const cursorWrapper = useRef<HTMLDivElement>(null);
	const positionRef = useRef({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	});

	useEffect(() => {
		const handleAnchorHover = () => {
			if (cursorWrapper.current) {
				cursorWrapper.current.classList.add('hovering');
			}
			if (mainCursor.current) {
				mainCursor.current.classList.add('hovering');
			}
			if (secondaryCursor.current) {
				secondaryCursor.current.classList.add('hovering');
			}
		};

		const handleAnchorLeave = () => {
			if (cursorWrapper.current) {
				cursorWrapper.current.classList.remove('hovering');
			}
			if (mainCursor.current) {
				mainCursor.current.classList.remove('hovering');
			}
			if (secondaryCursor.current) {
				secondaryCursor.current.classList.remove('hovering');
			}
		};

		const anchorElements = document.querySelectorAll('a');

		anchorElements.forEach((anchor) => {
			anchor.addEventListener('mouseenter', handleAnchorHover);
			anchor.addEventListener('mouseleave', handleAnchorLeave);
		});

		return () => {
			anchorElements.forEach((anchor) => {
				anchor.removeEventListener('mouseenter', handleAnchorHover);
				anchor.removeEventListener('mouseleave', handleAnchorLeave);
			});
		};
	}, [mainCursor, secondaryCursor]);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			const mouseX = clientX;
			const mouseY = clientY;

			positionRef.current.mouseX =
				mouseX - (secondaryCursor.current?.clientWidth || 0) / 2;
			positionRef.current.mouseY =
				mouseY - (secondaryCursor.current?.clientHeight || 0) / 2;

			if (mainCursor.current) {
				mainCursor.current.style.transform = `translate3d(${
					mouseX - (mainCursor.current?.clientWidth || 0) / 2
				}px, ${mouseY - (mainCursor.current?.clientHeight || 0) / 2}px, 0)`;
			}
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [mainCursor, secondaryCursor]);

	useEffect(() => {
		const followMouse = () => {
			positionRef.current.key = requestAnimationFrame(followMouse);
			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
			} = positionRef.current;

			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
				positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.1
				) {
					positionRef.current.destinationX = mouseX;
					positionRef.current.destinationY = mouseY;
				} else {
					positionRef.current.destinationX += distanceX;
					positionRef.current.destinationY += distanceY;
				}
			}

			if (secondaryCursor.current) {
				secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
			}
		};

		followMouse();

		return () => {
			cancelAnimationFrame(positionRef.current.key);
		};
	}, [secondaryCursor]);

	return (
		<div className={`cursor-wrapper ${type}`} ref={cursorWrapper}>
			<div className="main-cursor " ref={mainCursor}>
				<div className="main-cursor-background"></div>
			</div>
			<div className="secondary-cursor" ref={secondaryCursor}>
				<div className="cursor-background"></div>
			</div>
		</div>
	);
};

export default CustomCursor;
