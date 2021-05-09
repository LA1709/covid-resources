import { useState, useEffect } from 'react';
import { Form, AutoComplete, Select, Button, Row, Col, Card, Alert, List, Modal, Input } from 'antd';
import { ArrowLeftOutlined, SecurityScanFilled, PhoneFilled, LikeFilled } from '@ant-design/icons';
import { states } from './states';
import { Link } from 'react-router-dom';
import verified from './assets/verified.png';
import { markVerified, exhausted, logChange, wrongEntry } from './actions';
import Login from './components/Login';

const { Option } = Select;

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
        padding: '10px',
        fontSize: '1.8em'
    },
    backbtn: {
        position: 'relative',
        top: '5px'
        // left: '3%'
    },
    v: {
        width: '49%', 
        marginRight: '2%',
        textAlign: 'center'
    },
    // u: {
    //     width: '98%',
    //     textAlign: 'center'
    // }
}

const options = ['Oxygen', 'Remdesivir', 'Plasma', 'Beds', 'Other Medicines', 'Food', 'Tocilizumab'];

const makedate = (m) => {
    if(m) {
        const d = new Date(m[1].verified);
        const mon = d.getMonth();
        const day = d.getDate();
        const y = d.getFullYear();
        const hrs = d.getHours();
        const min = d.getMinutes();
        return `${day}/${mon}/${y} at ${hrs}:${min}`
    } else return '-'
}

const filterVerified = (data, update) => {
    const result = {};
    let stop = true;
    Object.entries(data).forEach(state => {
        Object.entries(state[1]).forEach(categ => {
            Object.entries(categ[1]).forEach(lead => {
                if(stop) stop = false;
                const t = lead[1].verified;
                if(t) {
                    const d1 = new Date(t);
                    let d2 = new Date();
                    d2 -= 86400000;
                    if(d1.valueOf()<d2)
                    {
                        const s = state[0];
                        const c = categ[0];
                        const m = lead[0];
                        if (!result[s]) result[s]={};
                        if (!result[s][c]) result[s][c]={};
                        if (!result[s][c][m]) result[s][c][m]=lead[1];
                    }
                }
            })
        })
    })
    if(!stop) update(result);
    else update(undefined);
}

const Update = ({queries, unchecked, functions}) => {
    const [state, setState] = useState(undefined);
    const [categ, setCateg] = useState(undefined);
    const [result, setResult] = useState({});
    const [details, setDetails] = useState(null);
    const [vst, setVst] = useState(true);
    // const [pass, setPass] = useState(false);

    const ModalHeader = ({d}) => {
        return (
            <>
                {vst? 
                <div><img src={verified} width="10%" style={{marginRight: '5%'}} />Verifed on {makedate(d)}</div>
                : d[1].verified?<div>Last checked on {makedate(d)}</div>:<div>UNVERIFIED ENTRY</div>
                }
            </>
        )
    }

    const sortResult = () => {
        if(vst){
            if (state && categ) {
                let temp = {};
                if (queries[state] && queries[state][categ]) {
                    temp[state] = {};
                    temp[state][categ] = queries[state][categ];
                    filterVerified(temp, setResult);
                } else setResult(undefined);
            }
            else if (state) {
                let temp = {};
                if (queries[state]) {
                    temp[state] = queries[state];
                    filterVerified(temp, setResult);
                } else setResult(undefined);
            }
            else if (categ) {
                let stop=true, temp = {};
                Object.entries(queries).forEach(kvp => {
                    if (kvp[1][categ]) {
                        if(stop) stop=false;
                        temp[kvp[0]] = {};
                        temp[kvp[0]][categ] = kvp[1][categ];
                    }
                });
                if (stop) setResult(undefined);
                else filterVerified(temp, setResult);
            }
            else filterVerified(queries, setResult);
        } else {
            if (unchecked) {
                if (state && categ) {
                    let temp = {};
                    if (unchecked[state] && unchecked[state][categ]) {
                        temp[state] = {};
                        temp[state][categ] = unchecked[state][categ];
                    } else temp=undefined;
                    setResult(temp);
                }
                else if (state) {
                    let temp = {};
                    if (unchecked[state]) temp[state] = unchecked[state];
                    else temp = undefined;
                    setResult(temp);
                }
                else if (categ) {
                    let stop=true, temp = {};
                    Object.entries(unchecked).forEach(kvp => {
                        if (kvp[1][categ]) {
                            if(stop) stop=false;
                            temp[kvp[0]] = {};
                            temp[kvp[0]][categ] = kvp[1][categ];
                        }
                    });
                    if (stop) temp = undefined;
                    setResult(temp);
                }
                else setResult(unchecked);
            }
            else setResult(undefined)
        }
    }

    useEffect(()=>sortResult(), [queries, unchecked, state, categ, vst]);

    return (
        <>
        {localStorage.getItem('isLoggedIn') == 'true' ? (
        <div>
        <Link to="/">
        <Button type="primary" style={styles.backbtn} icon={<ArrowLeftOutlined />}>Back</Button>
        </Link>
        <div style={styles.wrapper}>
            <Form layout="inline">
                {/* <Form.Item>
                    <Button type="primary" style={styles.new} disabled>Add New Request</Button>
                </Form.Item> */}
                <Form.Item
                    label="State"
                    name="state"
                    style={styles.item}
                >
                    <AutoComplete
                        options={states}
                        placeholder="Enter Region"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                        onSelect={s => setState(s)}
                        allowClear
                        onClear={()=>setState(undefined)}
                    />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category: "
                    style={styles.item}
                >
                    <Select
                        placeholder="What do you need?"
                        onChange={c => setCateg(c)}
                        allowClear
                    >
                    {options.map(opt => <Option key={opt} value={opt.toLowerCase()}>{opt}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Status: "
                    style={styles.item}
                >
                    <Select
                        onChange={c => setCateg(c)}
                        defaultValue={true}
                        onChange={e=>setVst(e)}
                    >
                    <Option value={true}>VERIFIED more than 24 hrs ago</Option>
                    <Option value={false}>UNVERIFIED</Option>
                    </Select>
                </Form.Item>
            </Form>
            <Modal title={<ModalHeader d={details} />} 
                visible={details} onCancel={() => setDetails(null)} footer={null}
            >
                {vst ? <div style={{marginBottom: '20px'}}>
                    Please use the following buttons to change the verification status.<br />
                </div> : <div>
                    Please click the following button to mark as verified. We request you to not give unverified data.
                </div>}
                <b>Current Description: </b><br />
                {details?details[1].desc?details[1].desc:"No description provided.":""}<br />
                <b>Edit the description as necessary: </b>
                <Input.TextArea
                    style={{marginBottom: '10px'}}
                    placeholder="Enter the additional comments in case needed."
                    id="descbox"
                />
                <Row style={{width: '100%'}}>
                    <Col style={styles.v}>
                        <Button 
                            type="primary"
                            onClick={()=>{
                                markVerified(details, setDetails, [vst, vst?functions.v:functions.u], document.getElementById('descbox').value);
                                logChange(details, "Reverified");
                            }}
                        >
                            Working
                        </Button>
                    </Col>
                    {vst ? <Col style={{width: '49%', textAlign: 'center'}}>
                        <Button 
                            type="default"
                            onClick={()=>{
                                exhausted(details, setDetails, functions.v, document.getElementById('descbox').value);
                                logChange(details, "Changed from working to exhausted");
                            }}
                        >Not Working</Button>
                    </Col> : 
                    <Col style={{width: '49%', textAlign: 'center'}}>
                        <Button 
                            type="danger"
                            onClick={()=>{
                                wrongEntry(details, setDetails, functions.u, document.getElementById('descbox').value);
                                logChange(details, "Marked as a wrong entry");
                            }}
                        >Wrong Number</Button>
                    </Col>
                    }
                </Row>
            </Modal>
            <h1 style={styles.heading}>Help Providers</h1>
            {result? (
                <div>
                {Object.keys(result).map(region =>
                    <div>
                        <h1 style={{marginBottom: '0'}}>{region.toUpperCase()}</h1>
                        {/* <Card key={region} title={region.toUpperCase()} extra={<div><b>Verified</b><img src={verified} width="40px" /></div>}> */}
                        {Object.keys(result[region]).map(cat =>
                            // <Card
                            //     style={{ marginTop: 10 }}
                            //     type="inner"
                            //     title={cat.toUpperCase()}
                            //     key={cat}
                            // >
                        <div>
                            <h3 style={styles.subheading}>{cat.toUpperCase()}</h3>
                            <List
                                grid={{gutter: 16, xs: 2, sm: 3, md: 4, lg: 5}}
                                dataSource={Object.entries(result[region][cat])}
                                renderItem={item => (
                                <List.Item>
                                    <Card key={item[0]}>
                                        <div><b>NAME: </b>{item[1].name}</div>
                                        <div><b>PHONE: </b>
                                        <a href={`tel:+91${item[0]}`}>{item[0]}</a><br />
                                        <center>
                                            <Button type="primary" onClick={() => setDetails([...item, region, cat])}>Update</Button>
                                        </center>
                                        </div>
                                    </Card>
                                </List.Item>
                                )}
                            />
                            </div>
                            // </Card>
                        )}
                    </div>
                        // {/* </Card> */}
                    )}</div>) : <Alert style={{marginTop: '10px'}} type="warning" message="Hurrah! There are no more unverified leads! Please move to the 'verified more than 24 hrs ago' section!" showIcon/>}
            </div>
        </div>
        ) : (
            <div style={{marginLeft: '18%', marginTop: '10%'}}>
                <p style={{fontSize: '1.5em'}}>
                Thank you for joining us in this noble cause! We have a simple 3 step process to fight covid: <br /> <br />
                {/* Click <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">here</a> if you would like to register and generate a password.<br /> */}
                <SecurityScanFilled style={{color: '#0275d8'}}/> 1. Authenticate so that we know you are on our side.<br />
                <PhoneFilled style={{color: '#f0ad4e'}}/> 2. Verify the lead by tapping the number to call.<br />
                <LikeFilled style={{color: '#5cb85c'}}/> 3. Click the button given to mark as 'Working' or 'Not Working'.
                </p>
                <Login />
            </div>
        )}
        </>
    )
}

export default Update