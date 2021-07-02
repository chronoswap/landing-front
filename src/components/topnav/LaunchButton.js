import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(Button) ({
  background: '#AA00FF',
  borderRadius: 3,
  color: 'white',
  marginStart: "10px",
  '&:hover': {
       background: "#8100c1",
    },
});

function LaunchButton() {
  return (
    <StyledButton target="_blank" href="https://chronoswap.finance/">
      {"Launch App"}
    </StyledButton>
  );
}

export default LaunchButton;
