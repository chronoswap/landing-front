import { Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledContainer = styled(Container) ({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledNews = styled(Typography) ({
  display: 'flex',
  flexDirection: 'column'
})

function Home() {
  return (
    <StyledContainer maxWidth="md">
      <StyledNews component="div">
        <Typography variant='h3'>
          Esta es la tarjeta de news
        </Typography>
        <Typography variant='body1'>
          Aquí diremos cosas guapísimas Sobre las noticias que conciernan a
          nuestro AMM, o a nuestro entorno
        </Typography>
      </StyledNews>
    </StyledContainer>
  );
}

export default Home;
