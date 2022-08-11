import React, { Fragment } from 'react'
import MovieBanner from 'components/MovieBanner'
import MovieSection from 'components/MovieSection'

export default function HomePage() {
  return (
    <Fragment>
        {/* big banner */}
        <MovieBanner></MovieBanner>

        {/* film section */}
        <MovieSection title="Now playing"></MovieSection>
        <MovieSection title="Popular"></MovieSection>
        <MovieSection title="Top rated"></MovieSection>
    </Fragment>
  )
}
