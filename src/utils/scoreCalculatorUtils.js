import {
  FRAME_MAX_VALUE,
  SPARE_AND_STRIKE_COUNT_BASE,
  SPARE_BONUS_NUMBER,
  STRIKE_BONUS_NUMBER,
} from "./scoreCalculatorConst";

const cumulateScore = (scoresCalculateArray) => {
  for (let i = 1; i < scoresCalculateArray.length; i++) {
    scoresCalculateArray[i] =
      scoresCalculateArray[i - 1] + scoresCalculateArray[i];
  }
  return scoresCalculateArray;
};

export const scoresCalculation = (scores) => {
  let res = [];

  const scoresKeys = Object.keys(scores);
  for (let i = 0; i < FRAME_MAX_VALUE; i++) {
    let scoreKey = scoresKeys[i];
    let scoreValue = Object.values(scores[scoreKey]);
    if (scoreValue.every((element) => typeof element === "number")) {
      res.push(scoreValue.reduce((acc, element) => acc + element, 0));
    } else {
      let acc = SPARE_AND_STRIKE_COUNT_BASE;
      let j = 0;
      let bonus;
      if (scoreValue.includes("/")) bonus = SPARE_BONUS_NUMBER;
      else if (scoreValue.includes("X")) bonus = STRIKE_BONUS_NUMBER;
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
};

export const SCORES_TEST_1 = {
  1: { 1: 8, 2: 1, 3: 1 },
  2: { 1: 8, 2: "/", 3: null },
  3: { 1: 1, 2: 2, 3: 1 },
  4: { 1: "X", 2: null, 3: null },
  5: { 1: 1, 2: 2, 3: 1 },
};

// TODO: Calculate last score
export const SCORES_TEST_2 = {
  1: { 1: "X", 2: null, 3: null },
  2: { 1: 8, 2: 1, 3: 2 },
  3: { 1: 1, 2: 2, 3: "/" },
  4: { 1: 6, 2: 4, 3: 1 },
  5: { 1: "X", 2: 8, 3: 2 },
  6: { 1: 3 },
};
