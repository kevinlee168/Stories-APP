import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux'; // The useDispatch hook lets React components dispatch actions to the store
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';



const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    const theme = useTheme();
    // const prefersMobile = useMediaQuery('(max-width: 600px)');
    const prefersMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg">
            <ResponsiveAppBar />
            <Grow in>
                <Container>
                    <Grid container style={{ flexDirection: prefersMobile ? 'column-reverse' : 'row' }} justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}  >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow >
        </Container >
    );
}

export default App;