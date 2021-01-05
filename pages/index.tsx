import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Hero } from '../components/sections/hero'
import { GitHubActivity } from '../components/sections/github-activity'
import { config } from "../config";
import { fetchRepos, Repo } from "../core/github";
import { getOpenGraphImage } from "../core/og-image";
import { texts } from "../i18n";
import { Footer } from "../components/sections/footer";

interface AppProps {
  repos: {
    starredRepos: Repo[];
    contributedRepos: Repo[];
  };
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {

  const { contributedRepos, starredRepos } = await fetchRepos(config.githubUsername, config.githubToken)

  return {
    props: {
      repos: {
        starredRepos,
        contributedRepos,
      },
    },
    revalidate: 10,
  };
};

export default function Home({ repos }: AppProps) {
  return (<>
      <NextSeo
      title={`${config.name} – ${config.subtitle}`}
      titleTemplate={"%s"}
      openGraph={{
        images: [getOpenGraphImage("Loïc")],
      }}
      twitter={{
        handle: `@${config.twitterUserName}`,
        cardType: "summary_large_image",
      }}
      description={`${texts.hero.title} ${texts.hero.description}`}
    />
    <Hero/>
    <GitHubActivity {...repos} />
    <Footer/>
  </>
  )
}
