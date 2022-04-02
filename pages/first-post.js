import Image from 'next/image';
import Link from 'next/link';

export default function FirstPost() {

  const myLoader=(url)=>{
    return url;
  }
  const url = "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg";
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
          <Image 
            loader={()=>myLoader(url)}
            src={url}
            width={600}
            height={400}
            alt="my image"
          />
        </main>
      </h2>
    </>
  )
}
