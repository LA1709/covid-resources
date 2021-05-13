import { useEffect, useState } from'react';
import { Button, Spin, AutoComplete, Form } from 'antd';
import { ArrowLeftOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { getData } from './actions';
import { Link } from 'react-router-dom';
import { states } from './states';
import HelpCards from './components/HelpCards';

const styles= {
    wrapper: {
        width: '95%',
        margin: 'auto',
        marginTop: '30px'
    },
    item: {
        width: '30%',
        minWidth: "250px"
    },
    heading: {
        position: 'relative',
        top: '10px',
        left: '10px',
        fontSize: '1.8em',
        display: 'inline'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
        // left: '3%'
    },
    filters: {
        margin: '20px',
        width: '100%',
        position: 'sticky'
    },
    topbtn: {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: '2'
    },
    item: {
        width: '30%',
        minWidth: "250px"
    },
    ctabtn : {
        width: '60%', 
        height: '60px', 
        fontSize: '1.7em',
        display: 'inline'
    }
}

const Help = ({ category }) => {

    const [data, setData] = useState(null);

    useEffect(()=>getData(category, setData), [getData]);

    return (
        <>
        {data && <Button style={styles.topbtn} icon={<ArrowUpOutlined />} onClick={()=>window.scrollTo(0,0)}/>}
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 style={styles.heading}>Help Providers</h1>
        <div style={styles.wrapper}>
            <p style={{marginBottom: '10px'}}>
            <b>Please Note: </b>This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.
            <b> Despite our best efforts to verify the data, please exercise extreme caution in financial transactions. There have been reports of malpractices, please excercise precaution! </b>
            </p>
            <div style={styles.filters}>
                {/* <p style={styles.label}>Enter Region: </p> */}
                <Form layout="inline">
                    <Form.Item
                        label={<span style={{fontWeight: '500'}}>Enter Region</span>}
                        name="state"
                        style={styles.item}
                    >
                        <AutoComplete
                            options={states}
                            placeholder="Enter Locality/City/State"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            // onSelect={s => setState(s)}
                            allowClear
                            // onClear={()=>setState(undefined)}
                        />
                    </Form.Item>
                </Form>
            </div>
            {data ? (
                <>
                <HelpCards list={data} category={category} />
                <div style={{textAlign: 'center', margin: '15px 0px'}}>
                    <h2>Didn't Help?</h2>
                    <Button type="danger" style={styles.ctabtn}>
                        Contact our Volunteers
                    </Button>
                </div>
                </>
            ) : (
                <center>
                    <Spin />
                </center>
            )}
        </div>
        </>
    )
}

export default Help