import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Post from './components/post'
export default function Home() {

  const blogContent = {
    title: 'How this blog is built',
    description: 'First part of what this blog is about and how it is built.'
  }

  return (
    <div className="container">
      <Head>
        <title>Seldomseendev Blog - Emre Dalkiran</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hi, I'm Emre. A software engineer who loves to build things." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Hi, I&apos;m Emre
        </h1>     
        <p className="description">
          A software engineer who loves to build things
        </p>
        <div className="card">
          <Image
            src="/blog-profile.jpg"
            alt="Picture of the author"
            width={250}
            height={250}
            className="avatar"
          />
          <div className="grid">
            <a href="https://github.com/emredalkiran" rel='noreferrer' target="_blank" className="link-logo">
              <img src="/github.svg" alt="Github Logo" className="logo"/>
            </a>
            <a href="https://www.linkedin.com/in/emre-dalkiran-140787bb" target="_blank" rel='noreferrer' className="link-logo">
              <img src="/linkedin.svg" alt="Linkedin Logo" className="logo"/>
            </a>
            <a href="https://twitter.com/seldomseenkdg" target="_blank" rel='noreferrer' className="link-logo">
              <img src="/twitter.svg" alt="Twitter Logo" className="logo"/>
            </a>
            <a href="mailto:emre59dalkiran@gmail.com" className="link-logo">
              <img src="/email.svg" alt="Email Logo" className="logo"/>
            </a>
          </div>
        </div>
        <section className="section">
          <p className="description">This blog is intended to be a personal space where I would like to write about code, music and some other cool stuff.</p>
        </section>
        <section className="section">
          <h2 className="title ">Latest Posts</h2>
          <div className="grid">
            <Link href="/how-this-blog-is-built-1" passHref>
              <Post content={ blogContent }></Post>
            </Link>
          </div>
        </section>

      </main>
    </div>
  )
}
