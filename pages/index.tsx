import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Hero } from '../components/sections/hero'
import { GitHubActivity } from '../components/sections/github-activity'
import { config } from '../config'
import { fetchRepos, Repo } from '../core/github'
import { getOpenGraphImage } from '../core/og-image'
import { texts } from '../i18n'
import { Footer } from '../components/sections/footer'
import {
  getBookmarkDate,
  getBookmarksTable,
  getBookmarkUrl,
  getPageBlocks,
} from '../core/bookmarks'
import { Bookmark, BookmarkData } from '../types/bookmark'
import React from 'react'
import { Bookmarks } from '../components/sections/bookmarks'
import { getDescriptionFromUrl } from '../core/metadata'

interface AppProps {
  bookmarks: Bookmark[]
  repos: {
    starredRepos: Repo[]
    contributedRepos: Repo[]
  }
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {
  const [
    bookmarksData,
    { contributedRepos, starredRepos },
  ] = await Promise.all([
    getBookmarksTable<BookmarkData>(config.notionBookmarksTableId),
    fetchRepos(config.githubUsername, config.githubToken),
  ])

  // const { contributedRepos, starredRepos } = await fetchRepos(config.githubUsername, config.githubToken)

  const bookmarks: Bookmark[] = await Promise.all(
    bookmarksData.map(async (a) => {
      const blockMap = await getPageBlocks(a.id)
      const URL = getBookmarkUrl(blockMap, a.id)
      const Description = await getDescriptionFromUrl(URL)
      return {
        ...a,
        URL,
        Description,
        CreationTime: getBookmarkDate(blockMap, a.id),
      }
    })
  )

  return {
    props: {
      bookmarks,
      repos: {
        starredRepos,
        contributedRepos,
      },
    },
    revalidate: 10,
  }
}

export default function Home({ repos, bookmarks }: AppProps) {
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
      <Bookmarks bookmarks={bookmarks} />
      <GitHubActivity {...repos} />
      <Footer />
    </>
  )
}
