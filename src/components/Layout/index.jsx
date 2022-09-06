import { Outlet } from 'react-router-dom'

import Sidebar from '../Sidebar'
import video from '../../assets/videos/video.mp4'

import './styles/index.scss'

const Layout = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="App">
        <div className='container video'>
          <div className='overlay'></div>
          <video loop autoPlay muted playsInline id="bg-video">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <Sidebar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>

          <Outlet />

          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
      </>
  )
}

export default Layout