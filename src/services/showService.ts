import HttpClient from './httpClient';
// import { ShowDetailsRequest, Show } from './types';

const readerApiPrefix = '/reader';
const showApiPrefix = '/show';
const episodeApiPrefix = '/episode';
const panelApiPrefix = '/panel';

export const getShowByIdReq = async (showId: string, includeMetaData: string[]): Promise<any> => {
  try {
    // Create the body object according to what the API expects
    // e.g. if it accepts an array of strings under a metadata property
    const body = {
      metadata: includeMetaData,
    };

    const path = `/api/v2${readerApiPrefix}${showApiPrefix}/${showId}`;
    // If the response is an array, and you expect to get the first show
    // adjust as per the actual response structure
    // Assuming that the response returns a single Show object
    return await HttpClient.post(path, body);
  } catch (error) {
    console.error(`Unable to get show by id: ${showId}`, error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

export const getEpisodesList = async (showId : string) =>{
  try{
    const path = `/api/v2${readerApiPrefix}${episodeApiPrefix}/show/${showId}`;
    return await HttpClient.get(path);

  } catch (error) {
    console.error(`Unable to get show by id: ${showId}`, error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}

export const getPanelsByEpisodeId = async (episodeId : string) =>{
  try{
    const path = `/api/v2${readerApiPrefix}${panelApiPrefix}/episode/${episodeId}`;
    return await HttpClient.get(path);

  } catch (error) {
    console.error(`Unable to get panels by episodeid: ${episodeId}`, error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}
