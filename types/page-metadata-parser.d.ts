
declare module "page-metadata-parser" {
    export const getMetadata: (doc: Document, url: string, ruleSet?: PartialRecord<MetadataType, MetadataProps>) => Record<string, string>
    export const metadataRuleSets: Record<MetadataType, MetadataProps>
}

type PartialRecord<K extends keyof MetadataType, T> = {
  [P in K]?: T;
};


type MetadataType = "description" | "icon" | "image" | "keywords" | "title" | "language" | "type" | "url" | "provider"
interface MetadataProps {
    rules: RuleProps[]
}

type RuleProps = [string, (element: Element) => string | null]