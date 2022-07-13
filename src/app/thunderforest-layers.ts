/**
 * This info find in https://www.thunderforest.com/
 * Need register and obtain API key to use in our maps
 */
const API_KEY = '?apikey=47455e4b0807408c87ead5d6f7a8d1c8';
const MAIN_URL = 'https://tile.thunderforest.com/';
const IMAGE_FILE = '/{z}/{x}/{y}.png';
const IMAGE_FILE_API_KEY = `${IMAGE_FILE}${API_KEY}`;
export const THUNDERFOREST_LAYERS = {
  OpenCycleMap: `${MAIN_URL}cycle${IMAGE_FILE_API_KEY}`,
  Transport: `${MAIN_URL}transport${IMAGE_FILE_API_KEY}`,
  Landscape: `${MAIN_URL}landscape${IMAGE_FILE_API_KEY}`,
  Outdoors: `${MAIN_URL}outdoors${IMAGE_FILE_API_KEY}`,
  TransportDark: `${MAIN_URL}transport-dark${IMAGE_FILE_API_KEY}`,
  SpinalMap: `${MAIN_URL}spinal-map${IMAGE_FILE_API_KEY}`,
  Pioneer: `${MAIN_URL}pioneer${IMAGE_FILE_API_KEY}`,
  MobileAtlas: `${MAIN_URL}mobile-atlas${IMAGE_FILE_API_KEY}`,
  Neighbourhood: `${MAIN_URL}neighbourhood${IMAGE_FILE_API_KEY}`,
  Atlas: `${MAIN_URL}atlas${IMAGE_FILE_API_KEY}`,
};
