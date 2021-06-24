import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const LaunchButton = styled(Button) ({
  background: '#AA00FF',
  borderRadius: 3,
  color: 'white',
});

function App() {
  return (
    <AppBar position='sticky' color="inherit">
      <Toolbar variant="dense">
        <LaunchButton variant="h6">
          Launch App
        </LaunchButton>
        <Button variant="h6" color="#AA00FF">
          Litepaper
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
