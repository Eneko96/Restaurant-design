import './Gallery.css'

import SubHeading from '../../components/SubHeading/Subheading'
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { useRef } from 'react'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03,images.gallery04]

export default function Gallery() {
  // const [first, setfirst] = useState(second)
  // const [first, setfirst] = useState(second)
  const scrollRef = useRef(null)
  const scroll = (dir:string) => {
    const { current } = scrollRef
    // @ts-ignore: Object is possibly 'null'
    if (dir === 'left') current.scrollLeft -=300;
    // @ts-ignore: Object is possibly 'null'
    else current.scrollRight -=300;

  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum text</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((img,index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={img} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon'onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon'onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}