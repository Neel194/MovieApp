export { removemovie } from "../reducers/movieSlice";
import axios from "../../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movies/${id}`);
    const externalId = await axios.get(`/movies/${id}/external_ids`);
    const recommendations = await axios.get(`/movies/${id}/recommendations`);
    const similar = await axios.get(`/movies/${id}/similar`);
    const videos = await axios.get(`/movies/${id}/videos`);
    const watchProviders = await axios.get(`/movies/${id}/watchProviders`);

    let theultimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    dispatch(loadmovie(theultimateDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};
