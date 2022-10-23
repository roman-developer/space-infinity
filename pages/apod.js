import styles from '../styles/Apod.module.css'
import Image from 'next/image';

export default function Apod({picture}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>APOD -  Astronomy Picture of the Day</h1>
        <div className={styles.imageBox}>
          <Image 
            alt={`Image for ${picture.date}`}
            src={picture.url}
            layout="responsive"
            objectFit="contain"
            width="100%"
            height="100%"
          />
          <h2>{picture.title} - {picture.date}</h2>
          <p>{picture.explanation}</p>
        </div>
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const api_url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
  const res = await
  fetch(api_url);
  const picture = await res.json();

  if (!picture) {
    return {
      notFound: true,
    }
  }

  return {
      props: {
        picture,
      },
      revalidate: 30,
  };
}