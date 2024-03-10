import {
  FRAME_MAX_VALUE,
  LAUNCH_NUMBER_IN_FRAME,
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

const getNextLaunchValueArray = (actualFrameNumber, scores) => {
  let nextLaunchValueArray = [];
  let launchValueArray = Object.values(scores[actualFrameNumber]);
  let index =
    launchValueArray.indexOf("/") > 0 ? launchValueArray.indexOf("/") : 0;
  for (let i = index + 1; i < launchValueArray.length; i++) {
    if (launchValueArray[i] != null)
      nextLaunchValueArray.push(launchValueArray[i]);
  }
  const frameNumberArray = Object.keys(scores);
  for (
    let i = frameNumberArray.indexOf(actualFrameNumber) + 1;
    i < frameNumberArray.length;
    i++
  ) {
    const frameNumber = frameNumberArray[i];
    Object.values(scores[frameNumber]).forEach((launchValue) => {
      if (launchValue != null) nextLaunchValueArray.push(launchValue);
    });
  }
  return nextLaunchValueArray;
};

export const scoresCalculation = (scores) => {
  let res = [];

  const frameNumberArray = Object.keys(scores);
  for (let i = 0; i < FRAME_MAX_VALUE; i++) {
    let frameNumber = frameNumberArray[i];
    let launchValueArray = Object.values(scores[frameNumber]);
    if (launchValueArray.every((element) => typeof element === "number")) {
      res.push(launchValueArray.reduce((acc, element) => acc + element, 0));
    } else {
      let acc = SPARE_AND_STRIKE_COUNT_BASE;
      let j = 0;
      let bonus;
      if (launchValueArray.includes("/")) bonus = SPARE_BONUS_NUMBER;
      else if (launchValueArray.includes("X")) bonus = STRIKE_BONUS_NUMBER;
      let nextLaunchValueArray = getNextLaunchValueArray(frameNumber, scores);
      while (bonus > 0) {
        acc += !isNaN(nextLaunchValueArray[j]) ? nextLaunchValueArray[j] : 15;
        j++;
        bonus--;
      }
      res.push(acc);
    }
  }
  return cumulateScore(res);
};

export const getErrorAddScore = (frameNumber, launchNumber, pinsNumber) => {
  frameNumber = parseInt(frameNumber);
  launchNumber = parseInt(launchNumber);
  if (frameNumber < 1 || frameNumber > 6) return "Invalid frame number";
  else if (launchNumber < 1 || launchNumber > LAUNCH_NUMBER_IN_FRAME)
    return "Invalid launch number";
  else if (frameNumber === 6 && launchNumber != 1)
    return "The launch number should be 1";
  else if (pinsNumber != "/" && pinsNumber != "X" && isNaN(parseInt(pinsNumber)))
    return "Invalid number of pins";
  else if (parseInt(pinsNumber) < 0 || parseInt(pinsNumber) > 14)
    return "Ivalid number of pins";
  return null;
};

export const SCORES_TEST_1 = {
  1: { 1: 8, 2: 1, 3: 1 },
  2: { 1: 8, 2: "/", 3: null },
  3: { 1: 1, 2: 2, 3: 1 },
  4: { 1: "X", 2: null, 3: null },
  5: { 1: 1, 2: 2, 3: 1 },
};

export const SCORES_TEST_2 = {
  1: { 1: "X", 2: null, 3: null },
  2: { 1: 8, 2: 1, 3: 2 },
  3: { 1: 1, 2: 2, 3: "/" },
  4: { 1: 6, 2: 4, 3: 1 },
  5: { 1: "X", 2: 8, 3: 2 },
  6: { 1: 3 },
};
