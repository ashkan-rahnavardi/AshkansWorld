'use client';

import React, { useEffect, useState } from 'react';
import { TextScrambleProps } from '../_utils/types';
import { nextItem, randomItem } from '../_utils/utils';

const symbols: string[] = '!<>-_\\/[]{}—=+*^?#'.split('');

const TextScramble: React.FC<TextScrambleProps> = ({
	texts,
	className,
	letterSpeed = 5,
	nextLetterSpeed = 100,
	paused = false,
	pauseTime = 3000,
}) => {
	const [currentText, setCurrentText] = useState<string>(texts[0]);

	const initSymbols: string[] = Array(currentText.length)
		.fill(0)
		.map(() => randomItem(symbols));

	const [displayedText, setDisplayedText] = useState<string[]>(initSymbols);

	const leftIndexes: number[] = [];

	const defaultLeftIndexes = (): void => {
		currentText.split('').forEach((_, i) => {
			leftIndexes.push(i);
		});
	};

	let bakeLetterInterval: any = 0;
	let bakeTextInterval: any = 0;

	const bakeLetter = () => {
		bakeLetterInterval = setInterval(() => {
			if (!paused) {
				const updatedText: string[] = [];

				currentText.split('').forEach((_, i) => {
					if (!leftIndexes.includes(i)) {
						updatedText[i] = currentText[i];
						return;
					}

					const randomSymbol = randomItem(symbols);
					updatedText[i] = randomSymbol;
				});

				setDisplayedText(updatedText);
			}
		}, letterSpeed);
	};

	const bakeText = () => {
		defaultLeftIndexes();
		bakeLetter();

		bakeTextInterval = setInterval(() => {
			if (!paused) {
				if (leftIndexes.length === 0) {
					clearInterval(bakeLetterInterval);
					clearInterval(bakeTextInterval);

					setTimeout(() => {
						setCurrentText(nextItem(texts, currentText));
						defaultLeftIndexes();
					}, pauseTime);
				}

				leftIndexes.shift();
			}
		}, nextLetterSpeed);
	};

	// ChatGPT suggested fix

	// const bakeText = () => {
	// 	let currentTextIndex = 0; // Track the index of the current text

	// 	const nextText = () => {
	// 		setCurrentText(nextItem(texts, currentText));
	// 		defaultLeftIndexes();
	// 		currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
	// 	};

	// 	defaultLeftIndexes();
	// 	bakeLetter();

	// 	bakeTextInterval = setInterval(() => {
	// 		if (!paused) {
	// 			if (leftIndexes.length === 0) {
	// 				clearInterval(bakeLetterInterval);

	// 				setTimeout(() => {
	// 					nextText(); // Move to the next text
	// 					bakeLetter();
	// 				}, pauseTime);
	// 			}

	// 			leftIndexes.shift();
	// 		}
	// 	}, nextLetterSpeed);
	// };

	useEffect(() => {
		if (!paused) bakeText();
	}, [currentText, paused]); // eslint-disable-line react-hooks/exhaustive-deps

	return <div className={className}>{displayedText}</div>;
};

export default TextScramble;
