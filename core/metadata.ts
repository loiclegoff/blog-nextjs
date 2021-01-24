import { getMetadata, metadataRuleSets } from "page-metadata-parser"
import * as Domino from "domino"

export const getDescriptionFromUrl = async (url: string) => {
    const response = await fetch(url);
    const html = await response.text();
    const doc = Domino.createWindow(html).document;
    const metadata = getMetadata(doc, url, { description: metadataRuleSets.description});
    return metadata.description ?? null
}