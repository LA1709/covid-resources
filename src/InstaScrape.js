import { useEffect, useState } from 'react';
import { getPics } from './actions';
import { Modal, Button } from 'antd';
import LaunchIcon from './assets/launch-icon.png';

const styles = {
    instaImage: {
        border: '2px solid #eeeeee',
        borderRadius: '10px',
        cursor:'pointer'
    }
}

// const getImage = (url, imgId) => {
//     const img = document.getElementById(imgId)
//         if (img)
//         {
//         fetch('https://laimage-server.herokuapp.com/getImage', {
//             method: 'post', 
//             body: JSON.stringify({src: url}), 
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             img.src = data.src;
//         })
//     }
// }

const OpenStory = ({ url }) => {
    return (
        <>
            <a href={"https://www.instagram.com/stories/"+url} target="blank">
                Open on Instagram
                <img src={LaunchIcon} width="15px" height="15px" style={{marginLeft: "10px"}} />
            </a>
        </>
    )
}

const InstaScrape = ({}) => {
    const [pics, setPics] = useState({});
    const [modal, setModal] = useState(null);
    const [story, setStory] = useState("");

    useEffect(()=>{
        getPics(setPics)
    }, [getPics])

    const openModal = (e, id, user) => {
        setStory(`${user}/${id.split("_")[0]}`);
        setModal(e.target.src);
    }

    const closeModal = () => {
        setStory(null);
        setModal(null);
    }

    return (
        <div>
            {Object.keys(pics).map(pic => 
                <img 
                    id={pic}
                    // id={Object.keys(pics)[0]}
                    key={pic}
                    width="200" height="320" 
                    style={styles.instaImage}
                    src={pics[pic].src}
                    // src={getImage(pics[pic].src, pic)}
                    alt="Loading..."
                    onClick={e => openModal(e, pic, pics[pic].username)}
                />
            )}
            <Modal title={<OpenStory url={story}/>} visible={modal} onCancel={closeModal} footer={null}>
                <img 
                   width="100%"
                   src={modal} 
                />
            </Modal>
        </div>
    )
}

export default InstaScrape