import {useState, useEffect} from 'react';
import { Layout, Drawer, Button } from 'antd';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import { getHelpers, getUnverified, getLinks, getHelpAdmin, setUserLogin } from './actions';
// import './App.css';
import Menu from './assets/menu.png';
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

const { Content, Footer, Header } = Layout;

const App = () => {
  const [help, setHelp] = useState({});
  const [unverified, setUnverified] = useState({});
  const [links, setLinks] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => getHelpers(setHelp), [setHelp]);
  useEffect(() => getUnverified(setUnverified), [setUnverified]);
  useEffect(() => getLinks(setLinks), [setLinks]);
  useEffect(() => getHelpAdmin(setNumbers), [getHelpAdmin]);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');

  if(isLoggedIn) setUserLogin(name, email);

  return (
  <BrowserRouter>
    <Layout className="layout" style={{minHeight: '100vh'}}>
      <Drawer
        title={isLoggedIn ? (
          <div style={{textAlign:"center"}}>
            Hi, { name }
            <Logout />
          </div>) : (
          <Login />
        )}
        placement="left"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        style={{paddingTop: '20px'}}>
        <Navbar />
      </Drawer>
      <Layout>
        <Header>
          {!visible &&
            <img src={Menu} width="35px" height="30px" onClick={()=>setVisible(true)} 
              style={{cursor: 'pointer', marginLeft: '-30px'}} 
            />
          }
        </Header>
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
          ©2021 Team Covid Khoj <Link to="/about">(About Us)</Link>
        </Footer>
      </Layout>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
