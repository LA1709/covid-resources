import { Card, Row, Col } from "antd";
import insta from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import mail from "./assets/mail.svg"

const Seeker = () => {
    return (
        <div style={{margin: '2%'}}>
            <Card title="Fight Against COVID">
                We are a group of students, influencers and simply others who are doing whatever they can to help fight this
                pandemic together. This is a database of resources collected through various modes including manual contacts,
                whatsapp, instagram and twitter. <br /><b>Please note: </b> 
                Everyone is running out of stock, capacity and resources so if you find numbers that are switched off/busy or not picking up, move on to the next one.
            </Card>
            {/* <Card title="Our Team">
                <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                    <Col sm={7} md={10} lg={12}>
                    A huge shoutout to <a href="https://www.instagram.com/covidaidresources/" target="blank">Covid Aid Resources</a> for working day and night to provide help to those who need it in these times of crisis.
                    </Col>
                    <Col sm={7} md={10} lg={12} style={{textAlign: "right"}}>
                    <a href="https://www.instagram.com/covidaidresources/" target="blank">
                        <img src={car} width="30%" style={{minWidth:'50px', maxWidth: '80px'}} alt="C.A.R." />
                    </a>
                    </Col>
                </Row>
            </Card> */}
            <Card title="Contact us">
                <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                    <Col sm={7} md={10} lg={12}>
                    We are doing our best to continuously keep this updated, any help is much appreciated, please send us as many verified links as you can and share actively!
                    <br />
                    <a href='https://forms.gle/GznUPJ7s5ZwZSsreA'>Reach out and join us! </a>
                    or <a href="https://forms.gle/89sBUL1bXY9ypoUi7">Give Feedback</a>
                    </Col>
                    <Col sm={7} md={10} lg={12}>
                        <div>
                        <a href="https://www.instagram.com/covid_khoj/" target="blank">
                            <img src={insta} width="60px" alt="instagram" style={{marginRight: '30px'}}/>
                        </a>
                        <a href="https://twitter.com/CovidKhoj" target="blank">
                            <img src={twitter} width="60px" alt="twitter" style={{marginRight: '30px'}} />
                        </a>
                        <a href="mailto:covidkhoj@gmail.com" target="blank">
                            <img src={mail} width="60px" alt="email" style={{marginRight: '30px'}} />
                        </a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Seeker