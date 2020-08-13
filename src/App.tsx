import React from 'react';
import { Button } from '@rmwc/button';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActions,
  CardActionButton,
  CardActionButtons,
  CardActionIcon,
  CardActionIcons,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
// import logo from './logo.svg';
import './App.css';
import 'rmwc/dist/styles';
import '@material/button/dist/mdc.button.css';
import '@rmwc/card/styles';
import '@rmwc/theme/styles';
// import  { ThemeProvider } from '@rmwc/theme/dist';

function App() {
  return (
      <div className="App">
        <header className="App-header">
        <Typography
          use="headline1"
          tag="h1"
          theme="textSecondaryOnBackground"
        >
          jurytan
        </Typography>
        <Typography
          use="subtitle1"
          tag="h3"
          theme="textSecondaryOnBackground"
          style={{ 
            marginTop: '-3rem'
          }}
        >
          Software Engineer
        </Typography>
        <Button label="Hello Jurytan" theme="primary" />
        <Card style={{ width: '80%' }}>
            <CardPrimaryAction>
              <CardMedia
                sixteenByNine
                style={{
                  backgroundImage: 'url(images/backgrounds/mb-bg-fb-16.png)'
                }}
              />
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <Typography use="headline6" tag="h2">
                  Our Changing Planet
                </Typography>
                <Typography
                  use="subtitle2"
                  tag="h3"
                  theme="textSecondaryOnBackground"
                  style={{ marginTop: '-1rem' }}
                >
                  by Kurt Wagner
                </Typography>
                <Typography
                  use="body1"
                  tag="div"
                  theme="textSecondaryOnBackground"
                >
                  Visit ten places on our planet that are undergoing the biggest
                  changes today.
                </Typography>
              </div>
            </CardPrimaryAction>
            <CardActions>
              <CardActionButtons>
                <CardActionButton>Read</CardActionButton>
                <CardActionButton>Bookmark</CardActionButton>
              </CardActionButtons>
              <CardActionIcons>
                <CardActionIcon onIcon="favorite" icon="favorite_border" />
                <CardActionIcon icon="share" />
                <CardActionIcon icon="more_vert" />
              </CardActionIcons>
            </CardActions>
          </Card>
        </header>
      </div>
  );
  
}

export default App;
