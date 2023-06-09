import React from "react";
import { useSelector } from 'react-redux'; // The useSelector hook lets React components read data from the store
import { Grid, CircularProgress } from '@mui/material';

import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
    let posts = useSelector((state) => state.posts);
    if (!Array.isArray(posts)) { // to avoid TypeError: posts.map is not a function
        posts = [];
    };

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="stretch">
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={6} key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))
                }
            </Grid>
        )
    );

}

export default Posts;