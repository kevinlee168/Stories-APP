import React, { useEffect } from "react";
import { Container, Grow, Grid, AppBar } from '@mui/material';
import { useDispatch } from 'react-redux'; // The useDispatch hook lets React components dispatch actions to the store
import styled from 'styled-components';
import { getPosts } from './actions/posts'
import stories from './images/stories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

// const AppBar = styled.appbar` // there is no appbar component in HTML, and therefore, styled-components cannot generate a styled component for it by this code.

// if you are using Material-UI's AppBar component, 
// you should import it from @mui/material and then style it using styled-components.
const StyledAppBar = styled(AppBar)`
  border-radius: 15px;
  margin: 30px 0;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  background: papayawhip !important;
`;

const Typography = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
        `;
const Img = styled.img`
    margin-left: 15px;
    height: 60px;
    `;

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container maxWidth="lg">
            <ResponsiveAppBar />
            {/* <StyledAppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <Img src={stories} alt="icon" />
            </StyledAppBar> */}
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;