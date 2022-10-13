import styles from '../styles/Mars.module.css'
import Image from 'next/image';

export default function Mars({photos}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Mars Rover Photos</h1>
        { photos.photos.map((photo) => (
          <div key={photo.id} className={styles.item}>
            <Image 
              alt={`Image for ${photo.id}`}
              src={photo.img_src}
              layout='responsive'
              width={100}
              height={100}
            />
            <p>Sol: {photo.sol}</p>
            <p>Camera: {photo.camera.full_name}</p>
            <p>Date: {photo.earth_date}</p>
            <p>Rover: {photo.rover.name}</p>
          </div>
        )) }
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
  const res = await
  fetch(api_url);
  const photos = await res.json();

  if (!photos) {
    return {
      notFound: true,
    }
  }

  return {
      props: {
        photos,
      },
      revalidate: 30,
  };
}