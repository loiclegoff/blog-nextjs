
export type BookmarkType = "site" | "repository";


export interface BookmarkData {
    id: string;
    Name: string;
    Tags: string[];
    URL: string,
}

export interface Bookmark extends BookmarkData {
    CreationTime: number;
    Description: string
}