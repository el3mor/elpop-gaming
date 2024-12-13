import axiosClient from "./axiosClient";

const apiKey = "983e0ec11b5b4724af2ce0a3fc2920b5";

const getGameById = (id: string) => axiosClient.get(`/games/${id}?key=${apiKey}`);
const getGameByPlateform = (plateform: string) => axiosClient.get(`/games?platforms=${plateform}&page_size=8&page=1&ordering=-metacritic&key=${apiKey}`);
const getLatestGames = () => axiosClient.get(`/games?dates=2024-09-01,2026-09-30&ordering=-added&key=${apiKey}`);
const getGameBySearch = (search: string) => axiosClient.get(`/games?search=${search}&page_size=8&page=1&key=${apiKey}`);
const getAllCategories = () => axiosClient.get(`/genres?key=${apiKey}`);
const getGameByCategory = ( page:number,filterKey?: string,filterName?: string ) => axiosClient.get(`/games?page_size=20&page=${page}&${filterKey ? `${filterKey}=${filterName}&` : null }key=${apiKey}`);
const getAllGames = (page: number) => axiosClient.get(`/games?page_size=20&page=${page}&key=${apiKey}`);
const getGameScreenshots = (id: string) => axiosClient.get(`/games/${id}/screenshots?key=${apiKey}`);
export default {
  getGameById,
  getGameByPlateform,
  getLatestGames,
  getGameBySearch,
  getAllCategories,
  getGameByCategory,
  getAllGames,
  getGameScreenshots
}
