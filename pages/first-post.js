import Link from 'next/link';

export default function FirstPost() {

  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <main>
          <h1>
            Hello there
          </h1>
          
        </main>
      </h2>
    </>
  )
}
