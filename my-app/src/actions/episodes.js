export const FETCH_EPISODES = 'FETCH_EPISODES';
export const fetchEpisodes = () => ({
  type: FETCH_EPISODES,
});

export const SAVE_EPISODES = 'SAVE_EPISODES';
export const saveEpisodes = (episodes) => ({
  type: SAVE_EPISODES,
  episodes,
});

export const SAVE_INFOS = 'SAVE_INFOS';
export const saveInfos = (infos) => ({
  type: SAVE_INFOS,
  infos,
});