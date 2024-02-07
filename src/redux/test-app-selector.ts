interface AppState {
	darkMode: string;
}

const state: AppState = {
	darkMode: '',
};

type SelectorFunction = (s: AppState) => string;

export const testUseAppSelector = (f: SelectorFunction) => f(state);
