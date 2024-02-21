import HttpClient from './httpClient';
import {ShowCategory, ShowMetaDataType} from "../types/Show";
// import { ShowDetailsRequest, Show } from './types';

const readerApiPrefix = '/reader';
const showApiPrefix = '/show';
const episodeApiPrefix = '/episode';
const panelApiPrefix = '/panel';
const studioApiPrefix = '/studio'


export const getShowByIdReq = async (showId: string, includeMetaData: string[]): Promise<any> => {
  try {
    const body = {
      metadata: includeMetaData,
    };

    const path = `/api/v2${readerApiPrefix}${showApiPrefix}/${showId}`;

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

export const getMyShows = async (
    userId: string,
    offset: number = 0,
    count: number = 1,
    includeEpisodes: boolean = true,
    includeMetadata: ShowMetaDataType[] = [ShowMetaDataType.BANNER_THUMBNAIL_V2, ShowMetaDataType.STYLE_NAME],
) => {
  try {
    const metadataString = includeMetadata.join(',');
    const path = `${studioApiPrefix}${showApiPrefix}/myShows?offset=${offset}&count=${count}&includeEpisodes=${includeEpisodes}&includeMetadata=${metadataString}`;

    return await HttpClient.get(path, {
      'x-tenant': 'studio',
    });

  } catch (error) {
    console.error(`Unable to get shows for user id: ${userId}`, error);
    throw error;
  }
};

export const getPanelsByEpisodeId = async (episodeId : string) =>{
  try{
    const path = `/api/v2${readerApiPrefix}${panelApiPrefix}/episode/${episodeId}`;
    return await HttpClient.get(path);

  } catch (error) {
    console.error(`Unable to get panels by episodeid: ${episodeId}`, error);
    throw error;
  }
}

export const getPopularShows = async (count: number) => {
  const showCategory= ShowCategory.PUGC;
  try {
    return await HttpClient.get(
        `/api/studio/show/${showCategory}/most-views/${count}`,
        {},
    )
  } catch (e) {
    console.log("Error while fetching popular shows")
    throw e
  }
}
