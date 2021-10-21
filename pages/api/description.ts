import { NextApiRequest, NextApiResponse } from "next";
import { getMetadata, metadataRuleSets } from "page-metadata-parser"
import * as Domino from "domino"

const getDescriptionFromUrl = async (url: string) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = Domino.createWindow(html).document;
    const metadata = getMetadata(doc, url, { description: metadataRuleSets.description });
    return metadata.description ?? null
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const urlOrUrls = req.query["url"];
    const url = Array.isArray(urlOrUrls) ? urlOrUrls?.[0] : urlOrUrls
    console.log(url)
    const description = await getDescriptionFromUrl(url)
    res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
    res.status(200).json({ description })
};
