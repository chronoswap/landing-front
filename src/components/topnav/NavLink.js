import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(Button) ({
  background: '#FFFFFF',
  marginStart: "10px",
  '&:hover': {
       background: "#efefef",
       color: "#343434"
    },
});

function NavLink(props) {
  return (
    <StyledButton target="_blank" href={props.href}>
      {props.text}
    </StyledButton>
  );
}

export default NavLink;
