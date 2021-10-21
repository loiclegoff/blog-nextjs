
export const getDescriptionFromUrl = async (url: string): Promise<string> => {
    const response = await fetch(`https://loiclegoff.com/api/description?url=${encodeURIComponent(url)}`);
    const data: { description: string } = await response.json()
    return data.description ?? null
}