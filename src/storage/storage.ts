const GAME_COUNT_KEY = "chess_game_count";
const GAME_LIMIT_KEY = "chess_game_limit";

type Limits = {
  [GAME_COUNT_KEY]: number;
  [GAME_LIMIT_KEY]?: number;
};

const defaultLimits: Limits = {
  [GAME_COUNT_KEY]: 0,
};

const localStorage = chrome.storage.local;

const getGameCount = async (): Promise<number> => {
  const count = await localStorage.get(GAME_COUNT_KEY);
  return count[GAME_COUNT_KEY];
};

const setGameCount = async (count: number): Promise<boolean> => {
  await localStorage.set({ [GAME_COUNT_KEY]: count });
  return true;
};

export { getGameCount, setGameCount };
