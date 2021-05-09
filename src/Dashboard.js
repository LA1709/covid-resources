import {Tabs} from 'antd';
import {TwitterOutlined, InstagramOutlined, ShareAltOutlined} from '@ant-design/icons';
import InstaScrape from './InstaScrape'

const { TabPane } = Tabs;

const Dashboard = () => {
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab={<span style={{fontSize: '1.2em'}}><TwitterOutlined />Live Twitter Data</span>} key="0" >
                <div style={{width:"100%", height:"90vh", marginTop: '10px', maxWidth: '900px', margin: 'auto'}}>
                <iframe 
                    width="100%"
                    height="100%"
                    title="Twitter Data"
                    src="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/0?id=DASHBOARD_601b9e214c7a6b689d76f493" 
                />
                </div>
                <center style={{fontSize: '1.4em'}}>
                    This dashboard is owned by 
                    <a href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/0?id=DASHBOARD_601b9e214c7a6b689d76f493" target="blank">
                        Sprinklr
                    </a>
                </center>
            </TabPane>
            <TabPane 
                tab={<span style={{fontSize: '1.2em'}}><InstagramOutlined />Live Instagram Data</span>}
                key="1"
            >
                <InstaScrape />
            </TabPane>
            <TabPane 
                tab={<span style={{fontSize: '1.2em'}}><ShareAltOutlined />Sarthii - Other resources</span>}
                key="2"
            >
                <div style={{width:"100%", height:"75vh", marginTop: '10px', maxWidth: '550px', margin: 'auto'}}>
                    <iframe
                        width="100%"
                        height="100%"
                        style={{border: '0'}}
                        title="Sarthii App"
                        src="https://sarthii.glideapp.io/" 
                    />
                </div>
                <center style={{fontSize: '1.4em'}}>
                <a href="https://sarthii.glideapp.io/" target="blank">Sarthii App </a>
                - haath badhega, saath milega - by Team DIR
                </center>
            </TabPane>
        </Tabs>
    )
}

export default Dashboard