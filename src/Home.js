import { Row, Col, Card, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { TwitterOutlined, LinkOutlined } from '@ant-design/icons';
import Categories from './components/Categories';
import CAR from './assets/CAR.jpg';
import CRO from './assets/CRO.png';
import MM from './assets/mind_matters.png';
import TT from './assets/travel_transprast.png';
import KK from './assets/covidkhoj.png';
import SK from './assets/sankalp.jpg';
import { useEffect, useState } from 'react';

const styles = {
    wrapper: {
        margin: 'auto',
        marginTop: '30px'
    },
    container: {

    },
    lottie: {
        maxWidth: '80%',
        maxHeight: '80%',
        margin: 'auto'
    },
    hero: {
        backgroundColor: 'white',
        marginBottom: '30px',
        padding: 'clamp(2%, 20px, 50px) clamp(3%, 20px, 50px) clamp(3%, 20px, 50px) clamp(3%, 20px, 50px)',
        borderRadius: '5px'
    },
    heroHeading: {
        fontSize: 'calc(16px + 1vw)',
        color: '#2F2F2F',
        marginBottom: '15px',
        fontWeight: '600',
        textAlign: 'center'
    },
    heroCopy: {
        fontSize: 'calc(16px + 0.5vw)',
        color: '#454545',
        marginBottom: '5px'
    },
    helpCard: {
        // padding: '15px 25px',
        borderRadius: '5px',
        marginBottom: '15px'
    },
    helpCardLottieContainer: {
        display: 'flex',
        marginBottom: '30px',
        flexWrap: 'wrap'
    },
    helpButton: {
        width: '100%',
        padding: '15px 20px',
        height: '60px',
        borderRadius: '10px',
        fontSize: '18px'
    },
    cta: {
        width: '90%',
        maxWidth: '600px',
        marginBottom: '40px'
    },
    ctabtn: {
        width: '100%',
        height: '80px',
        fontSize: '1.7em'
    },
    customAlert: {
        marginBottom: '10px',
        background: '#99e699',
        padding: '10px',
        border: '1px solid #5cb85c',
        color: 'black',
        margin: '5px',
        borderRadius: '2px',
        textAlign: 'center'
    },
    partner: {
        height: '120px',
        display: 'inline-block',
        margin: '10px 30px 30px 30px'
    },
    tabbtn: {
        borderRadius: '10px',
        margin: '15px 0px',
        height: '60px'
    }
}

const Home = () => {

    const [modal, setModal] = useState(!localStorage.getItem('agreed'));
    let scrollDirection = 0.9;
    let myScroll;

    useEffect(() => {
        const partners = document.getElementById('partners');
        myScroll = window.setInterval(() => {
            const check = partners.scrollLeft;
            partners.scrollTo(partners.scrollLeft + scrollDirection, 0);
            if(check===partners.scrollLeft){
                if(scrollDirection>0) scrollDirection = -0.7;
                else scrollDirection = 0.9; 
            }
        }, 15);
    }, [])

    const setAgreement = () => {
        localStorage.setItem('agreed', true);
        setModal(false);
    }

    return (
        <div style={styles.wrapper}>
            <Modal title="DISCLAIMER" visible={modal} closable={false} footer={
                <Button type="primary" onClick={setAgreement}>
                    Agree
                </Button>
            }>
                <b>Note: </b>Please ensure you are in compliance with Government of India, state governments in India and local law enforcement authority rules and regulations when using Leads/Suppliers from this site; or providing a Lead/Supply on this site.
                This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.
            </Modal>
            {/* <center>
            <div style={styles.cta}>
                <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
                <Button type="primary" shape="round" style={styles.ctabtn}>
                    Join Us !
                </Button>
                </a>
            </div>
            </center> */}
            {/* <Row gutter={[{ sm: 16, md: 20, lg: 24 }, 16]}>
            <Col sm={8} md={10} lg={12} style={styles.container}> */}
            <Card style={styles.helpCard}>
                <Row>
                    <Col>
                        {/* <Link to="/seeker"> */}
                        <div style={styles.helpCardLottieContainer}>
                            {/* <div style={{ marginRight: '25px', flex: '1 0 30%', alignSelf: 'center' }}>
                                <Button block style={styles.tabbtn} type="ghost">Self Help</Button>
                                <Button block style={styles.tabbtn} type="primary">Contact Volunteers</Button>
                                <Link to="/resources">
                                    <Button block style={styles.tabbtn} type="primary">Knowledge Base</Button>
                                </Link>
                            </div> */}
                            <div style={{ flex: '1 0 65%', alignItems: 'center' }}>
                                <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>Let us help you!</h2>
                                <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>Click the following button to get a list of resources and leads which are crowd-sourced from whatsapp groups & other volunteers, and verified by our on-ground volunteer teams in real time!</p>
                                <Categories />
                            </div>
                        </div>
                        {/* <Button shape="round" size="large" type="danger" style={styles.helpButton}
                                onClick={()=>SetLoading(true)} disabled={loading}
                            >{loading?"Please wait ...":"I need help!"}</Button>
                        </Link> */}
                    </Col>
                </Row>
                <a target="blank" href="https://forms.gle/89sBUL1bXY9ypoUi7">
                    <p style={{ ...styles.customAlert, marginTop: '10px', background: '#ffad99', border: '1px solid #ff1a1a' }}>
                        If you have any suggestions or feedback on how we can reach out and help as many people as possible, please <b>tell us</b> here!
                    </p>
                </a>
            </Card>
            {/* </Col>
                <Col sm={8} md={10} lg={12} style={styles.container}> */}
            {/* <Card style={styles.helpCard}>
                    <Link to="/volunteer">
                        <div style={styles.helpCardLottieContainer}>
                            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_pk5mpw6j.json"  {...props} style={{ marginRight: '25px', flex: '1 0 30%' }} />
                            <div style={{ flex: '1 0 65%', alignSelf: 'center' }}>
                                <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>How can I help?</h2>
                                <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>If you have any resource or leads available, then please click on 'Give Leads' below. Otherwise, please help us keep our database updated!</p>
                                <Row style={{width: '100%'}}>
                                <Col style={{width: '49%', marginRight: '2%'}}>
                                    <Link to="/volunteer">
                                    <Button shape="round" size="large" type="primary" style={styles.helpButton}>Give Leads</Button>
                                    </Link>
                                </Col>
                                <Col style={{width: '49%'}}>
                                    <Link to="/update">
                                    <Button shape="round" size="large" type="primary" style={styles.helpButton}>Help Verify</Button>
                                    </Link>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </Link>
                    <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
                        <p style={styles.customAlert}>
                            Have a similar idea / platform / sources / tools? We are looking for collaborators! Click here to <b>join us</b> in this fight against covid!
                        </p>
                    </a>
                </Card> */}
            {/* </Col>
            </Row> */}
            <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline', marginRight: '5%' }}>
                    <Link to="/dashboard">
                        <Button icon={<TwitterOutlined />} type="primary" style={{ width: '46%', marginBottom: '15px', height: '50px', fontSize: '1.2em' }}>Live Covid Data</Button>
                    </Link>
                </div>
                <div style={{ display: 'inline' }}>
                    <Link to="/resources">
                        <Button icon={<LinkOutlined />} type="primary" style={{ width: '46%', marginBottom: '15px', height: '50px', fontSize: '1.2em' }}>Other Resources</Button>
                    </Link>
                </div>
            </div>
            {/* <p style={{ margin: '10px 0px', background: '#fff3cd', padding: '10px', outline: '1px solid #ffcc00' }}>
                <b>Note: </b>Please ensure you are in compliance with Government of India, state governments in India and local law enforcement authority rules and regulations when using Leads/Suppliers from this site; or providing a Lead/Supply on this site.
            This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.
            </p> */}
            <Row gutter={{ sm: 16, md: 20, lg: 24 }} style={{marginTop: '20px'}}>
                <Col sm={8} md={10} lg={12}>
                    <div style={styles.hero}>
                        <h1 style={styles.heroHeading}>OUR PARTNERS</h1>
                        <div id="partners" style={{
                                textAlign: 'center', 
                                width: '100%', 
                                overflowX: 'scroll', 
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {[CRO, MM, KK, TT, CAR, SK].map((val, i) =>
                                <img src={val} alt="Logo" style={styles.partner} key={i} />
                            )}
                        </div>
                    </div>
                </Col>
                <Col sm={8} md={10} lg={12}>
                <div style={styles.hero}>
                        <h1 style={styles.heroHeading}>OUR SPONSERS</h1>
                        <div id="sponsors" style={{
                                textAlign: 'center', 
                                width: '100%', 
                                overflowX: 'scroll', 
                                whiteSpace: 'nowrap'
                            }}
                        >
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home