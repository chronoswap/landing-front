import { Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container) ({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledHome = styled(Typography) ({
  display: 'flex',
  flexDirection: 'column'
})

function Home() {
  return (
    <StyledContainer maxWidth="md">
      <StyledHome component="div">
        <Typography variant='h3'>
          Esta es la tarjeta de home
        </Typography>
        <Typography variant='body1'>
          Aquí diremos cosas guapísimas sobre nuestro AMM.
          Lo mismo metemos alguna fotillo guapa o algo así
        </Typography>
      </StyledHome>
    </StyledContainer>
  );
}

export default Home;
