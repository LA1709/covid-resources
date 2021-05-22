import { Card, Row, Col } from "antd";
import insta from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import mail from "./assets/mail.svg"
import Logo from './assets/logo.png'

const Seeker = () => {
    return (
        <div style={{margin: '2%'}}>
            <Card title="ABOUT US">
            <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                <Col sm={10} md={14} lg={18}>
                The India 1 Alliance is a collaboration of resources - an ever-growing group of organisations and volunteers coming together to synergise strengths, enhance effectiveness and deliver more and quick value to patients, without duplicating efforts and stressing the fragile infrastructure.
                The alliance is a voluntary, non-profit collaborative and one working for the Nation. It is a non-political and secular alliance. All the organisations associated with it are equal partners with transparent functioning aligned to all Indian Government guidelines and compliances.   
                </Col>
                <Col sm={2} md={4} lg={6} style={{textAlign: 'center'}}>
                    <img src={Logo} width="90px" height="90px" alt="logo" />
                </Col>
            </Row>
            </Card>
            <Card title="VISION">
            <center style={{fontSize: '1.2em', color: 'gray'}}><i>
            An alliance aimed at capturing the individual and collective humane intent of all volunteers to deliver the most efficient help to all patients, covering the entire spectrum of pandemic related requirements.
            </i></center><br />
            The partnering organisations continue to retain their identity. However, they are committed to devoting effort within the framework of the alliance where they operate with their strengths and draw on the expertise of other organisations within the alliance for any additional requirements and assistance. It gives them a chance to deliver even more value.
            <br /><br />
            <b>Objective: </b>To help save maximum lives and serve the Nation.
            <br /><br />
            <b>How it works: </b>
            Any patient/attendant/volunteer requiring help will connect with the India One Alliance Website or call the India1 Alliance helpline.
            A smooth backend will enable them to connect with some person related to their requirement. We have encapsulated probable requirements under the term Domains and there are 22 domains identified at the moment. They will additionally have the opportunity to use the updated database which the website will reflect at all times.
            The India 1 Alliance team will endeavour to provide  the fastest possible assistance and will handhold the patient/attendant till the Service/Seva is closed.
            </Card>
            <Card title="CONTACT US">
                <Row gutter={[{ sm: 14, md: 20, lg: 24 }, 16]}>
                    <Col sm={7} md={10} lg={12}>
                    We are doing our best to continuously keep this platform updated, any help is much appreciated. Please send us as many verified links as you can and share actively!
                    <br />
                    <a href='https://forms.gle/GznUPJ7s5ZwZSsreA'>Reach out and join us! </a>
                    or <a href="https://forms.gle/89sBUL1bXY9ypoUi7">Give Feedback</a>
                    </Col>
                    <Col sm={7} md={10} lg={12} style={{textAlign: 'center'}}>
                        <div>
                        <a href="https://www.instagram.com/covid_khoj/" target="blank">
                            <img src={insta} width="60px" alt="instagram" style={{marginRight: '50px'}}/>
                        </a>
                        <a href="https://twitter.com/CovidKhoj" target="blank">
                            <img src={twitter} width="60px" alt="twitter" style={{marginRight: '50px'}} />
                        </a>
                        <a href="mailto:covidkhoj@gmail.com" target="blank">
                            <img src={mail} width="60px" alt="email" style={{marginRight: '50px'}} />
                        </a>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Seeker