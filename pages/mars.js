import styles from '../styles/Mars.module.css'
import Card from '../components/Card';

export default function Mars({photos}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Mars Rover Photos</h1>
        <div className={styles.grid_photos}>
          { photos.photos.map((photo) => (
            <Card key={photo.id} img_src={photo.img_src} sol={photo.sol} camera={photo.camera.full_name} date={photo.earth_date} rover={photo.rover.name}/>
          )) }
        </div>
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