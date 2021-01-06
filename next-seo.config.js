const title = 'Dumbbell Workout'
const description = 'My personal workout plan'

const SEO = {
  title,
  description,
  canonical: 'https://workout.miraklasiaf.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://workout.miraklasiaf.com',
    title,
    description,
    images: [
      {
        url: 'https://workout.miraklasiaf.com/static/images/day-1/db-bench-press.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@miraklasiaf',
    site: '@miraklasiaf',
    cardType: 'summary_large_image'
  }
}

export default SEO
