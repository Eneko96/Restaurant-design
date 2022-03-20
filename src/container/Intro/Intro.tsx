import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { useState, useRef } from 'react'

import './Intro.css'
import { meal } from '../../constants'

export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef<HTMLVideoElement>(null)

  const handleVideo = () => {
    setPlayVideo((prev:boolean) => !prev)

    if (vidRef.current) {
      if (playVideo) vidRef.current.pause()
      else vidRef.current.play()
    } 
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        loop
        muted
        controls={false}
        ref={vidRef}
      />
      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>
  )
}