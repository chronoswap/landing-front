import { Toolbar, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PaperButton from './PaperButton.js';
import LaunchButton from './LaunchButton.js';
import NavLink from './NavLink.js';

const StyledAppBar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
});

const StyledPageLinks = styled(Typography) ({
  display: 'flex',
  justifyContent: 'center'
})

function TopNav() {
  return (
    <StyledAppBar >
      <StyledPageLinks component="div">
        <NavLink text="Home" href="https://google.es" />
        <NavLink text="Features" href="https://google.es" />
        <NavLink text="Roadmap" href="https://google.es" />
        <NavLink text="News" href="https://google.es" />
      </StyledPageLinks>
      <StyledPageLinks component="div">
        <PaperButton />
        <LaunchButton />
      </StyledPageLinks>
    </StyledAppBar>
  );
}

export default TopNav;
