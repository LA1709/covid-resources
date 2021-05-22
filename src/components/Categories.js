import { useState } from 'react';
import { Card } from 'antd';
import { useHistory } from "react-router-dom";
import categories from '../utils/categories';


const styles = {
    gridCardStyle: {
        width: '100%',
        maxWidth: '230px',
        height: '160px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '2.5%'
    },
    heroStyle: {
        cursor: "pointer",
        textAlign: 'center',
        width: "100%",
        margin: "15px"
    },
    categStyle: {
        width: '100%',
        maxWidth: '140px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '1%',
        fontWeight: '500'
    },
    gridContainer: {
        padding: '10px',
        margin: 'auto'
    },
    icon: {
        width: '60px',
        height: '60px',
        marginBottom: '10px'
    }
};

const Categories = () => {
    const [selected, setSelected] = useState(null);
    let history = useHistory();


    const handleClick = e => {
        let name = "";
        if (e.target.nodeName === 'IMG') name = e.target.parentNode.id;
        else name = e.target.id;
        if (categories[name].data.length > 1) setSelected(name);
        else history.push(`/help/${name}-${categories[name].data[0]}`);
    }

    const handleSubClick = e => {
        history.push(`/help/${selected}-${e.target.id}`);
    }

    return (
        <Card>
            {selected ? (
                <>
                    <Card.Grid
                        style={styles.heroStyle}
                        onClick={()=>setSelected(null)}
                    >
                        <img src={categories[selected].image} style={{ ...styles.icon, marginBottom: '0px' }} alt={selected} />
                    </Card.Grid>
                    {categories[selected].data.map(val =>
                        <Card.Grid key={val} style={styles.categStyle} id={val} onClick={handleSubClick}>
                            {val.replace(val[0], val[0].toUpperCase())}
                        </Card.Grid>
                    )}
                </>
            )
                :
                Object.keys(categories).map(categ =>
                    <Card.Grid key={categ} style={styles.gridCardStyle} id={categ} onClick={handleClick}>
                        <img src={categories[categ].image} style={styles.icon} alt={categ} /><br />
                        {categories[categ].label.toUpperCase()}
                    </Card.Grid>
                )
            }
        </Card>
    )
}

export default Categories