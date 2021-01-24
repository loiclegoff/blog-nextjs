const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
    domain: "loiclegoff.com",
    name: "Loïc Le Goff",
    subtitle: "Code",
    birthday: "1992-03-19",
    githubUsername: "loiclegoff",
    twitterUserName: "llegoff",
    // notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
    notionBookmarksTableId: "fce42c9b1baf477a8f1979877754e9c8",
    // notionProjectTableId: "5e74829f397e430ebf7c18dfacbb7ac0",
    githubToken,
};