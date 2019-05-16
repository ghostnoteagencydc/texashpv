import Link from 'next/link'

const Index = props => (
  <main>
    <section>
      <p>
        {props.loginData.isLoggedIn
          ? `You are logged in as ${props.loginData.userData.username}`
          : 'You are not logged in'}
      </p>
      <br />
      <a onClick={props.logout}>LOGOUT</a>
      <br />
      <Link href="/login">
        <a>Go to Login</a>
      </Link>
      <br />
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