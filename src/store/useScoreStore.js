import { create } from "zustand";

const useScoreStore = create((set) => ({
  scores: {},
  addOrUpdateScore: (frameNumber, updatedScore) =>
    set((state) => ({
      scores: {
        ...state.scores,
        [frameNumber]: updatedScore,
      },
    })),
}));

export default useScoreStore;
