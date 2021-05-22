import { Tabs, List, Divider, Card, Button,  } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const styles= {
    heading: {
        position: 'relative',
        top: '10px',
        left: '10px',
        fontSize: '1.8em',
        display: 'inline',
        marginLeft: '15px'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
    }
}

const Resources = ({ resources }) => {
    return (
        <>
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 style={styles.heading}>Knowledge Base</h1>
        <Tabs defaultActiveKey="0" style={{marginTop: '20px'}}>
            {
                resources && resources.map((item, idx) => (
                    // Since array indices start from 0 and tab panes from 1 so I added 1 to the key
                    <TabPane tab={item.category} key={idx + 1}>
                        <Card title={item.category}>
                            <p>{item.description}</p>
                            <br />
                            <Divider plain orientation="left">Links</Divider>
                            <List
                                dataSource={item.links}
                                renderItem={item => (
                                    <List.Item><a href={item.linkURL} target="_blank" className="external-link" rel="noreferrer">{item.linkDescription}</a></List.Item>
                                )}
                            />
                        </Card>
                    </TabPane>
                ))
            }
        </Tabs>
        </>
    )
}

export default Resources;