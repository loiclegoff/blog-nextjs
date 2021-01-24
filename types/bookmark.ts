
export type BookmarkType = "site" | "blog" | "repository";


export interface BookmarkData {
    id: string;
    Name: string;
    Tags: string[];
    Type: BookmarkType
}

export interface Bookmark extends BookmarkData {
    CreationTime: number;
    URL: string,
    Description: string
}