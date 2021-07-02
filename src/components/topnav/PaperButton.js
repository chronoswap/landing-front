import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(Button) ({
  background: '#EFEFEF',
  borderRadius: 3,
  marginStart: "30px",
  '&:hover': {
       background: "#DEDEDE",
    },
});

function PaperButton() {
  return (
    <StyledButton target="_blank" href="https://info.chronoswap.finance/">
      {"Lite Paper"}
    </StyledButton>
  );
}

export default PaperButton;
