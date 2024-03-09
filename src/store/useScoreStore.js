import { create } from 'zustand';


const useScoreStore = create((set) => ({
	scores: {},
	addScore: (score) =>
		set((state) => ({
			scores: {
				...state.scores,
				[Object.keys(state.scores).length + 1]: score,
			},
		})),
}));

export default useScoreStore;
