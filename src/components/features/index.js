import { Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container) ({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledFeatures = styled(Typography) ({
  display: 'flex',
  flexDirection: 'column'
})

function Features() {
  return (
    <StyledContainer maxWidth="md">
      <StyledFeatures component="div">
        <Typography variant='h3'>
          Esta es la tarjeta de features
        </Typography>
        <Typography variant='body1'>
          Aquí diremos todas las cosas guapísimas que nuestro AMM puede hacer,
          incluidos los NFT
        </Typography>
      </StyledFeatures>
    </StyledContainer>
  );
}

export default Features;
