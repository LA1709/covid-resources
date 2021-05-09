import { useState } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { TwitterOutlined, LinkOutlined } from '@ant-design/icons';

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
        fontSize: 'calc(16px + 1.5vw)',
        color: '#2F2F2F',
        marginBottom: '15px',
        fontWeight: '600'
    },
    heroCopy: {
        fontSize: 'calc(16px + 0.5vw)',
        color: '#454545',
        marginBottom: '5px'
    },
    helpCard: {
        padding: '15px 25px',
        borderRadius: '5px',
        marginBottom: '30px'
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
    cta : {
        width: '90%',
        maxWidth: '600px',
        marginBottom: '40px'
    },
    ctabtn : {
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
        borderRadius: '2px'
    }
}

const props = {
    background: "transparent",
    speed: "1",
    style: styles.lottie,
    loop: true,
    autoplay: true
}

const Home = () => {

    const [loading, SetLoading] = useState(false);

    return (
        <div style={styles.wrapper}>
            {/* <center>
            <div style={styles.cta}>
                <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
                <Button type="primary" shape="round" style={styles.ctabtn}>
                    I can help !
                </Button>
                </a>
            </div>
            </center> */}
            <Row gutter={[{ sm: 16, md: 20, lg: 24 }, 16]}>
                <Col sm={8} md={10} lg={12} style={styles.container}>
                    <Card style={styles.helpCard}>
                        <Link to="/volunteer">
                            <div style={styles.helpCardLottieContainer}>
                                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_pk5mpw6j.json"  {...props} style={{ marginRight: '25px', flex: '1 0 30%' }} />
                                <div style={{ flex: '1 0 65%' }}>
                                    <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>How can I help?</h2>
                                    <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>If you have any resource or leads available, then please click on 'Give Leads' below. Otherwise, please help us keep our database updated!</p>
                                </div>
                            </div>
                        </Link>
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
                            <Row>
                                <Col>
                                <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
                                    <p style={styles.customAlert}>
                                        Have a similar idea / platform / sources / tools? We are looking for collaborators! Click here to <b>join us</b> in this fight against covid!
                                    </p>
                                </a>
                                </Col>
                            </Row>
                    </Card>
                </Col>
                <Col sm={8} md={10} lg={12} style={styles.container}>
                    <Card style={styles.helpCard}>
                        <Row>
                            <Col>
                                <Link to="/seeker">
                                    <div style={styles.helpCardLottieContainer}>
                                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_vPnn3K.json"  {...props} style={{ marginRight: '25px', flex: '1 0 30%' }} />
                                        <div style={{ flex: '1 0 65%' }}>
                                            <h2 style={{ fontSize: 'calc(16px + 0.9vw)', color: "#2F2F2F", fontWeight: '600' }}>Let us help you!</h2>
                                            <p style={{ fontSize: 'calc(16px + 0.1vw)', color: "#383838" }}>Click the following button to get a list of resources and leads which are crowd-sourced from whatsapp groups and other volunteers</p>
                                        </div>
                                    </div>
                                    <Button shape="round" size="large" type="danger" style={styles.helpButton}
                                        onClick={()=>SetLoading(true)} disabled={loading}
                                    >{loading?"Please wait ...":"I need help!"}</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a target="blank" href="https://forms.gle/89sBUL1bXY9ypoUi7">
                                <p style={{...styles.customAlert, marginTop: '10px', background: '#ffad99', border: '1px solid #ff1a1a'}}>
                                    If you have any suggestions or feedback on how we can reach out and help as many people as possible, please <b>tell us</b> here!
                                </p>
                            </a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
                <div style={{display:'inline', marginRight: '5%'}}>
                    <Link to="/dashboard">
                    <Button icon={<TwitterOutlined />} size="large" type="primary" style={{width:'45%', marginBottom: '15px'}}>Live Covid Data</Button>
                    </Link>
                </div>
                <div style={{display:'inline'}}>
                    <Link to="/resources">
                    <Button icon={<LinkOutlined />} size="large" type="primary" style={{width:'45%', marginBottom: '15px'}}>Other Resources</Button>
                    </Link>
                </div>
            </div>
            <p style={{marginBottom: '10px', background: '#fff3cd', padding: '10px', outline: '1px solid #ffcc00'}}>
            <b>Note: </b>Please ensure you are in compliance with Government of India, state governments in India and local law enforcement authority rules and regulations when using Leads/Suppliers from this site; or providing a Lead/Supply on this site.
            This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.
            </p>
            <div style={styles.hero}>
                <h1 style={styles.heroHeading}>Purpose</h1>
                <p style={styles.heroCopy}>Covid cases are increasing every day, shortage of oxygen, medicines, beds, etc. are commonplace and increasing.  People in need are having difficulties procuring them because of the lack of contacts.</p>
                <p style={styles.heroCopy}>This website is your single source of all of the contacts, so you can get to the right person in time with a high confidence that the source has been "crowd-source" verified!! Every life saved is worth it.</p>
                <p style={styles.heroCopy}>Do you have any leads on any of the resources?  Click on the ‘I can help’ button above, the bigger we can make our information base, the more people will be helped.</p>
            </div>
        </div>
    )
}

export default Home