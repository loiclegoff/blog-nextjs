import fetch from "node-fetch";
import { BlockMapType } from "react-notion";
import { config } from "../config";

export const getBookmarksTable = async <T>(bookmarksId: string): Promise<T[]> =>
  fetch(`https://notion-api.${config.domain}/v1/table/${bookmarksId}`).then(res =>
    res.json()
  );

export const getPageBlocks = async (pageId: string): Promise<BlockMapType> => {
  return await fetch(
    `https://notion-api.${config.domain}/v1/page/${pageId}`
  ).then(res => res.json());
};

export const getBookmarkDate = (blockMap: BlockMapType, parentId: string) => blockMap[parentId]["value"]["created_time"]

export const getBookmarkUrl = (blockMap: BlockMapType, parentId: string) => blockMap[parentId]["value"]["properties"]["d_Zb"][0][0] as string