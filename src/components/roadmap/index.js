import { Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container) ({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledRoad = styled(Typography) ({
  display: 'flex',
  flexDirection: 'column'
})

function Home() {
  return (
    <StyledContainer maxWidth="md">
      <StyledRoad component="div">
        <Typography variant='h3'>
          Esta es la tarjeta de roadmap
        </Typography>
        <Typography variant='body1'>
          Aquí diremos cosas guapísimas las cosas que están por
          llegar en nuestro AMM
        </Typography>
      </StyledRoad>
    </StyledContainer>
  );
}

export default Home;
