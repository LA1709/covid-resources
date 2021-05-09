import { useEffect, useState } from 'react';
import { getPics } from './actions';
import { Modal } from 'antd';

const styles = {
    instaImage: {
        border: '2px solid #eeeeee',
        borderRadius: '10px',
        cursor:'pointer'
    }
}

const getImage = (url, imgId) => {
    const img = document.getElementById(imgId)
        if (img)
        {
        fetch('https://laimage-server.herokuapp.com/getImage', {
            method: 'post', 
            body: JSON.stringify({src: url}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            img.src = data.src;
        })
    }
}

const InstaScrape = ({}) => {
    const [pics, setPics] = useState({});
    const [modal, setModal] = useState(null);

    useEffect(()=>{
        getPics(setPics)
    }, [getPics])

    const openModal = e => setModal(e.target.src);

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
                    onClick={openModal}
                />
            )}
            <Modal title="Instagram Image" visible={modal} onCancel={() => setModal(null)} footer={null}>
                <img 
                   width="100%"
                   src={modal} 
                />
            </Modal>
        </div>
    )
}

export default InstaScrape