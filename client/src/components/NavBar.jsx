import { AppBar, Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
      background: grey

      `;

const Tabs = styled(NavLink)`
      font-size: 20px;
      margin-right:20px;
      color:blue;
      text-decoration:none;
      `;       


const NavBar = () => {
    return(
        <Header position='static'>
            <Toolbar>
              <Tabs to='/'>Code for Interview</Tabs>
              <Tabs to='/all'>All Users</Tabs>
              <Tabs to='/add'>AddUser</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;