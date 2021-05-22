import {useState, useEffect} from 'react';
import { Layout, Drawer, Button } from 'antd';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import { getHelpers, getUnverified, getLinks, getHelpAdmin, setUserLogin } from './actions';
// import './App.css';
import 'antd/dist/antd.css';
import Home from './Home';
import Contact from './Contact';
import Seeker from './Seeker';
import Volunteer from './Volunteer';
import Admin from './Admin';
import Update from './Update';
import Dashboard from './Dashboard'
import Resources from './resources';
import Help from './Help';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';

import Menu from './assets/menu.png';
import Logo from './assets/logo.png';

const { Content, Footer, Header } = Layout;

const styles = {
  btn: {
    width: 'auto',
    height: '40px',
    borderRadius: '10px',
    marginTop: '10px'
  }
}

const App = () => {
  const isMobile = window.innerWidth<720;

  const [help, setHelp] = useState({});
  const [unverified, setUnverified] = useState({});
  const [links, setLinks] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [visible, setVisible] = useState(!isMobile);

  useEffect(() => getHelpers(setHelp), [setHelp]);
  useEffect(() => getUnverified(setUnverified), [setUnverified]);
  useEffect(() => getLinks(setLinks), [setLinks]);
  useEffect(() => getHelpAdmin(setNumbers), [getHelpAdmin]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');


  if(isLoggedIn) setUserLogin(name, email);

  const LoginComponent = () => {
    return (
      <>
      {isLoggedIn?
        <div style={{textAlign:"center"}}>
          {isMobile? 
            <>
            Hi, { name }
            <Logout /> 
            </> : <Logout name={name} />
          }
        </div> :
        <Login />
      }
      </>
    )
  };

  return (
  <BrowserRouter>
    <Layout className="layout" style={{minHeight: '100vh'}}>
      {isMobile && 
      <Drawer
        title={<img src={Logo} width="60px" height="60px" alt="logo" style={{marginRight: '20px'}} />}
        placement="left"
        // closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{paddingTop: '20px'}}>
        <Navbar mode="inline" />
      </Drawer>
      }
      <Layout>
        {isMobile?
        <Header>
          {!visible &&
            <>
            <img src={Menu} width="35px" height="30px" onClick={()=>setVisible(true)} 
              style={{cursor: 'pointer', marginLeft: '-30px'}} 
            />
            <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
              <div style={{float: 'right', marginRight: '-30px'}}>
                <Button style={{...styles.btn, marginRight: '10px'}} shape="round" type="danger">24x7 Helpline</Button>
                <Button style={styles.btn} shape="round" type="primary">Join Us</Button>
              </div>
            </a>
            </>
          }
        </Header> :
        <Navbar mode="horizontal" />
        }
        <Content style={{ padding: '0 2%'}}>
          <Switch>
            <Route path="/resources">
                <Resources resources={links}/>
            </Route>
            <Route path="/about">
                <Contact />
            </Route>
            <Route path="/seeker">
                <Seeker queries={help}/>
            </Route>
            <Route path="/help/:category" render={(props) => <Help category={props.match.params.category} />} />
            <Route path="/volunteer">
                <Volunteer />
            </Route>
            <Route path="/admin">
                <Admin numbers={numbers}/>
            </Route>
            <Route path="/update">
                <Update queries={help} unchecked={unverified} functions={{v: setHelp, u: setUnverified}} />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: 'white', marginTop: '10px', color: '#646464'}}>
          <span style={{fontSize: '1.3em'}}>©2021 India One Alliance <Link to="/about">(About Us)</Link></span>
          <p style={{marginTop: '10px'}}>
              <b>Note: </b>Please ensure you are in compliance with Government of India, state governments in India and local law enforcement authority rules and regulations when using Leads/Suppliers from this site; or providing a Lead/Supply on this site.
          This is <b>Crowdsourced data</b> to fight COVID across India. The data is made available to public as is, and is being verified by our volunteers in realtime.
          </p>
        </Footer>
      </Layout>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
