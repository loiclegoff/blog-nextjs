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
    // notionAchievementTableId: "3e46de9f7eb847e596170b59c16c6fec",
    // notionProjectTableId: "5e74829f397e430ebf7c18dfacbb7ac0",
    githubToken,
};