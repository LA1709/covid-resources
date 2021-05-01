import {  Card } from 'antd';
import Reader from './CsvReader';

const styles= {
    wrapper: {
        width: '95%',
        margin: 'auto',
        marginTop: '30px'
    },
    heading: {
        padding: '10px',
        fontSize: '1.8em'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
        // left: '3%'
    }
}

const Admin = ({ numbers }) => {

    const email = localStorage.getItem('email');
    const admin = email=='lakshay.ag09@gmail.com'||email=='covidkhoj@gmail.com'||email=='ishitaagrawal.iitd@gmail.com'||email=='lakshi.ag17@gmail.com';

    return (
        <>
        {admin ?
        <div style={styles.wrapper}>
            <Reader />
            <Card title="Volunteers">
                <ol>
                    {numbers.filter((v, i, a) => a.indexOf(v) === i).map(number =>
                        <li key={number}><a href={`https://api.whatsapp.com/send?phone=${number}`}>{number}</a></li>
                    )}
                </ol>
            </Card>
        </div> : 
        <div style={{...styles.wrapper, fontSize: '24px'}}><b>Access Denied.</b></div>
        }
        </>
    )
}

export default Admin