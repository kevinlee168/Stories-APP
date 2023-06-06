import React from "react";
import { useSelector } from 'react-redux'; // The useSelector hook lets React components read data from the store
import { Grid, CircularProgress, Paper } from '@mui/material';
import styled from 'styled-components';

import Post from "./Post/Post";

const Item = styled(Paper)(({ }) => ({
    backgroundColor: '#1A2027 !important',
    padding: 100,
    textAlign: 'center',
    color: '#fff !important',
}));

const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <>
            {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={6} key={index}>
                        <Item>xs=2</Item>
                    </Grid>
                ))}
            </Grid> */}

            {!posts.length ? <CircularProgress /> : (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={6} key={post._id}>
                            <Post post={post}></Post>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
}

export default Posts;