import styles from '../styles/Mars.module.css'
import Card from '../components/Card';
import { useState } from 'react';

export default function Mars({photos, page, totalPages}) {
  const [listOfPhotos, setListOfPhotos] = useState(photos);
  const [currentPage, setCurrentPage] = useState(page);

  const nextPage = async() =>{
    if(currentPage <= totalPages){
      setCurrentPage(currentPage + 1);
      const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
      const res = await
      fetch(api_url);
      const photos = await res.json();
      setListOfPhotos(photos);
    }
  }

  const prevPage = async() =>{    
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
      const res = await
      fetch(api_url);
      const photos = await res.json();
      setListOfPhotos(photos);
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Mars Rover Photos</h1>
        <div className={styles.grid_photos}>
          { listOfPhotos.photos.map((photo) => (
            <Card key={photo.id} img_src={photo.img_src} sol={photo.sol} camera={photo.camera.full_name} date={photo.earth_date} rover={photo.rover.name}/>
          )) }
        </div>
        <div className={styles.pagination}>
          <button onClick={prevPage}>{`<<`}</button><span className={styles.currentPage}>{currentPage}</span><button onClick={nextPage}>{`>>`}</button>
        </div>
      </main>      
    </div>
  )
}

export async function getStaticProps() {
  const page = 1
  const sol = 1000
  const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
  const res = await
  fetch(api_url);
  const photos = await res.json();
  const totalPages = Math.round(photos.photos.length / 25); // (total photos / 25 per page)

  if (!photos) {
    return {
      notFound: true,
    }
  }

  return {
      props: {
        photos,
        page,
        totalPages,
      },
      revalidate: 30,
  };
}