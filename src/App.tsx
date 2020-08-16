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
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar/dist';
import { Typography } from '@rmwc/typography';
import NavDrawer from './components/NavDrawer';
import  { ThemeProvider } from '@rmwc/theme/dist';
import './App.css';

// Adding styles to page -- not sure if this is needed yet
import 'rmwc/dist/styles';
import '@material/button/dist/mdc.button.css';
import '@rmwc/card/styles';
import '@rmwc/theme/styles';
import '@rmwc/top-app-bar/styles';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
      <div className="App">
        <NavDrawer
          open={open}
          setOpen={(value) => setOpen(value)}
        />
        <ThemeProvider options={{
          primary: '#282c34',
        }}>
          <SimpleTopAppBar
            title=""
            navigationIcon
            onNav={() => setOpen(!open)}
          />
        </ThemeProvider>
        {/* <TopAppBarFixedAdjust />  // use this if you want to hide on scroll */}
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
            SOFTWARE ENGINEER
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
                <CardActionButton
                  id='blah'
                  onClick={(evt) => console.log('Read')}
                  value='Read'
                >
                  Read
                </CardActionButton>
                <CardActionButton 
                  onClick={(evt) => console.log('Bookmark')}
                >
                  Bookmark
                </CardActionButton>
              </CardActionButtons>
              <CardActionIcons>
                <CardActionIcon onIcon="favorite" icon="favorite_border" />
                <CardActionIcon icon="share" />
                <CardActionIcon icon="more_vert" />
              </CardActionIcons>
            </CardActions>
          </Card>
        </header>
        <Typography
          className="backgroundText"
          use="headline1"
          tag="h1"
          // theme="textSecondaryOnBackground"
          style={{  }}
        >
          jurytan
        </Typography>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
  );
  
}

export default App;
