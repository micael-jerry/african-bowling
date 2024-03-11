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
  let index = launchValueArray.includes("X")
    ? 0
    : launchValueArray.indexOf("/");
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
  else if (
    pinsNumber != "/" &&
    pinsNumber != "X" &&
    isNaN(parseInt(pinsNumber))
  )
    return "Invalid number of pins (possible value: / or X or 0 -> 14)";
  else if (parseInt(pinsNumber) < 0 || parseInt(pinsNumber) > 14)
    return "Invalid number of pins (possible value: / or X or 0 -> 14)";
  return null;
};
