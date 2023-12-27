import { useEffect, useState } from 'react';

function randomItem<T>(array: Readonly<T[]>): T {
	return array[Math.floor(Math.random() * array.length)];
}

function nextItem<T>(array: Readonly<T[]>, currentItem: T): T {
	const currentIndex = array.indexOf(currentItem);
	const bound = array.length;
	const nextIndex = (currentIndex + 1) % bound;
	return array[nextIndex];
}

const symbols = '!<>-_/[]{}—=+*^?#'.split('');

interface TextScrambleOptions {
	letterSpeed?: number;
	nextLetterSpeed?: number;
	paused?: boolean;
	pauseTime?: number;
}

const useTextScramble = (
	texts: Readonly<string[]>,
	{
		letterSpeed = 5,
		nextLetterSpeed = 100,
		paused = false,
		pauseTime = 3000,
	}: TextScrambleOptions = {}
) => {
	const [currentText, setCurrentText] = useState<string>(texts[0]);
	const [scrambledText, setScrambledText] = useState<string[]>(
		Array(currentText.length).fill('')
	);

	useEffect(() => {
		let symbolUpdateInterval: NodeJS.Timeout;
		let textUpdateInterval: NodeJS.Timeout;
		let remainingIndexes: number[] = Array.from(
			Array(currentText.length).keys()
		);

		const updateSymbols = () => {
			setScrambledText((scrambledText) =>
				scrambledText.map((char, index) =>
					// remainingIndexes.includes(index) ? randomItem(symbols) || '_' : char
					remainingIndexes.includes(index) ? randomItem(symbols) : char
				)
			);
		};

		const updateText = () => {
			if (remainingIndexes.length === 0) {
				clearInterval(symbolUpdateInterval);
				clearInterval(textUpdateInterval);

				setTimeout(() => {
					const nextText = nextItem(texts, currentText);
					setCurrentText(nextText);
					setScrambledText(Array(nextText.length).fill(''));
					remainingIndexes = Array.from(Array(nextText.length).keys());
					if (!paused) {
						symbolUpdateInterval = setInterval(updateSymbols, letterSpeed);
						textUpdateInterval = setInterval(updateText, nextLetterSpeed);
					}
				}, pauseTime);

				return;
			}

			const indexToUpdate = remainingIndexes.shift();
			if (indexToUpdate !== undefined) {
				setScrambledText((scrambledText) =>
					scrambledText.map((char, index) =>
						index === indexToUpdate ? currentText[index] : char
					)
				);
			}
		};

		if (!paused) {
			symbolUpdateInterval = setInterval(updateSymbols, letterSpeed);
			textUpdateInterval = setInterval(updateText, nextLetterSpeed);
		}

		return () => {
			clearInterval(symbolUpdateInterval);
			clearInterval(textUpdateInterval);
		};
	}, [currentText, paused, texts, letterSpeed, nextLetterSpeed, pauseTime]);

	return scrambledText.join('');
};

export default useTextScramble;
