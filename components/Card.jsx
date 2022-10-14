import Image from 'next/image';

const Card = (props) => {
  return(
    <div key={props.id} className={`card`}>
      <div className={`card_header`}>
        <Image 
          alt={`Image for ${props.id}`}
          src={props.img_src}
          layout='responsive'
          width={100}
          height={100}
        />
      </div>
      <div className={`card_body`}>
        <p><b>Sol:</b> {props.sol}</p>
        <p><b>Camera:</b> {props.camera}</p>
        <p><b>Date:</b> {props.date}</p>
        <p><b>Rover:</b> {props.rover}</p>
      </div>
    </div>
  )
}

export default Card;