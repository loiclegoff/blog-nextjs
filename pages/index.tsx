import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { Hero } from '../components/sections/hero'
import { GitHubActivity } from '../components/sections/github-activity'
import { config } from '../config'
import { fetchRepos, Repo } from '../core/github'
import { getOpenGraphImage } from '../core/og-image'
import { texts } from '../i18n'
import { Footer } from '../components/sections/footer'
import {
  getBookmarksTable,
} from '../core/bookmarks'
import { BookmarkData } from '../types/bookmark'
import React from 'react'
import { Bookmarks } from '../components/sections/bookmarks'

interface AppProps {
  bookmarksData: BookmarkData[]
  repos: {
    starredRepos: Repo[]
    contributedRepos: Repo[]
  }
}

export const getServerSideProps: GetServerSideProps<AppProps> = async () => {
  const [
    bookmarksData,
    { contributedRepos, starredRepos },
  ] = await Promise.all([
    getBookmarksTable<BookmarkData>(config.notionBookmarksTableId),
    fetchRepos(config.githubUsername, config.githubToken),
  ])

  // const { contributedRepos, starredRepos } = await fetchRepos(config.githubUsername, config.githubToken)


  return {
    props: {
      bookmarksData,
      repos: {
        starredRepos,
        contributedRepos,
      },
    },
  }
}

export default function Home({ repos, bookmarksData }: AppProps) {

  return (
    <>
      <NextSeo
        title={`${config.name} – ${config.subtitle}`}
        titleTemplate={'%s'}
        openGraph={{
          images: [getOpenGraphImage('Loïc')],
        }}
        twitter={{
          handle: `@${config.twitterUserName}`,
          cardType: 'summary_large_image',
        }}
        description={`${texts.hero.title} ${texts.hero.description}`}
      />
      <Hero />
      <Bookmarks bookmarksData={bookmarksData} />
      <GitHubActivity {...repos} />
      <Footer />
    </>
  )
}
