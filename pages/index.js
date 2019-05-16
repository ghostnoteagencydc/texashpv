import Link from 'next/link'

const Index = props => (
  <main>
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
      <br />
      <Link href="/blog">
        <a>Go to Blog</a>
      </Link>
      <br />
      <Link href="/calendar">
        <a>Go to Calendar</a>
      </Link>
      <Link href="/resources">
        <a>Go to Resources</a>
      </Link>
    </section>
  </main>
)

export default Index