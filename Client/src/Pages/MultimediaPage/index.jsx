import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/dataContext';
import CardSkeleton from '../../Components/Skeleton';
import styles from './index.module.scss'
import axios from 'axios';
import Base_Url from '../../Constant/base_url';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import langCheck from './language';
function MultimediaPage() {
  let store = useContext(DataContext);
  const [inf, setInf] = useState([])
  const [video, setVideo] = useState([])
  const [modal, setModal] = useState(null)
  useEffect(() => {
    store.route.setData('multimedia')

    axios.get("https://localhost:44314/api/infographics/0").then((res) => {
      setInf(res.data)
    })
    axios.get("https://localhost:44314/api/youtube/videos/0").then((res) => {
      setVideo(res.data)
    })
  }, [])


  function getYouTubeEmbedLink(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    if (match) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return null; // URL düzgün formatda deyilsə, null qaytarır
  }

  return (
    <div>
      {
        inf.length == 0 ? <CardSkeleton /> : (
          <>
            <div style={modal ? {} : { display: 'none' }} className={styles.modal} onClick={() => { setModal(null) }}>
              <img src={modal && (Base_Url + modal.infPhoto)} alt="" />
            </div>
            <div className='container'>
              <div className={styles.content}>
                <div className={styles.youtube}>
                  <div className={styles.header}>
                    {langCheck.video[store.lang.data]}
                  </div>
                  {
                    video.map((e, i) => {
                      return (
                        <iframe key={i} src={getYouTubeEmbedLink(e.videoUrl)} frameBorder="0">

                        </iframe>
                      )
                    })
                  }
                </div>
                <div className={styles.inf}>
                  <div className={styles.header}>
                  {langCheck.info[store.lang.data]}
                  </div>
                  {
                    inf.map((e, i) => {
                      return (
                        <div key={i} onClick={() => {
                          if (modal && modal.infId == e.infId)
                            setModal(null)
                          else
                            setModal(e)
                        }}>
                          <div className={styles.glass} >
                            <ZoomInIcon fontSize='large' className={styles.icon} />
                          </div>
                          <img src={Base_Url + e.infPhoto} alt="" />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default MultimediaPage