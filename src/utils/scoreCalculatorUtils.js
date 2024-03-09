const cumulateScore = (scoresCalculateArray) => {
	for (let i = 1; i < scoresCalculateArray.length; i++) {
		scoresCalculateArray[i] = scoresCalculateArray[i - 1] + scoresCalculateArray[i];
	}
	return scoresCalculateArray;
}

export const scoresCalculation = (scores) => {
	let res = [];

	const scoresKeys = Object.keys(scores);
	for (let i = 0; i < scoresKeys.length; i++) {
		let scoreKey = scoresKeys[i];
		let scoreValue = Object.values(scores[scoreKey]);
		if (scoreValue.every((element) => typeof element === 'number')) {
			res.push(scoreValue.reduce((acc, element) => acc + element, 0));
		}
		else {
			let acc = 15;
			let j = 0;
			let bonus;
			if (scoreValue.includes("/"))
				bonus = 2;
			else if (scoreValue.includes("X"))
				bonus = 3;
			let nextScoreValue = Object.values(scores[scoresKeys[i + 1]]);
			while (bonus > 0) {
				acc += nextScoreValue[j];
				j++;
				bonus--;
			}
			res.push(acc);
		}
	}
	return cumulateScore(res);
}

export const SCORES_TEST = {
	1: { 1: 8, 2: 1, 3: 1 },
	2: { 1: 8, 2: "/", 3: null },
	3: { 1: 1, 2: 2, 3: 1 },
	4: { 1: "X", 2: null, 3: null },
	5: { 1: 1, 2: 2, 3: 1 },
};
