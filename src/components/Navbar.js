import { Menu, Button} from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const styles = {
  btn: {
    width: '140px',
    height: '40px',
    borderRadius: '10px',
    margin: '10px 10px 0px 0px'
  }
}

const Navbar = ({ mode }) => {
    // style={{ fontSize: '22px', padding: "1%", display: 'flex', justifyContent:'flex-end' }}
    return (
        <Menu 
          mode={mode} 
          defaultSelectedKeys={[window.location.pathname]} 
          inlineCollapsed={false}
          style={{padding: '5px'}}
        >
          {mode==="horizontal" && 
            <img src={Logo} width="60px" height="60px" alt="logo" style={{marginRight: '40px'}} />
          }
          <Menu.Item key="/" style={{fontSize: '16px'}}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard" style={{fontSize: '16px'}}>
            <Link to="/dashboard">Live</Link>
          </Menu.Item>
          <Menu.Item key="/resources" style={{fontSize: '16px'}}>
            <Link to="/resources">Other Resources</Link>
          </Menu.Item>
          <Menu.Item key="/about" style={{fontSize: '16px'}}>
            <Link to="/about">About Us</Link>
          </Menu.Item>
          {mode==="horizontal" &&
            <div style={{float: 'right'}}>
              <Button style={{...styles.btn, marginLeft: '10px'}} shape="round" type="danger">24x7 Helpline</Button>
            <a target="blank" href="https://forms.gle/GznUPJ7s5ZwZSsreA">
              <Button style={styles.btn} shape="round" type="primary">Join Us</Button>
            </a>
            </div>
          }
        </Menu>
    );
}

export default Navbar;