import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost, updateLikeCount } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '6px', height: '100%', position: 'relative' }}>
            <CardMedia image={post.selectedFile} title={post.title}
                style={{ height: 0, paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken' }} />
            <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow}</Typography>
            </div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'white' }}>
                <Button style={{ color: 'white' }} size="small"
                    onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                <Typography variant="body2" color="textSecondary" component="p">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography gutterBottom variant="h5" component="h2" style={{ padding: '0 16px' }}>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions style={{ padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" color="primary" onClick={() => { setCurrentId(0); dispatch(updateLikeCount(post._id)); }}>
                    <ThumbUpAltIcon fontSize="small" style={{ paddingRight: '2px', marginBottom: '3px' }} />
                    Like
                    <p style={{ paddingLeft: '5px' }}>{post.likeCount}</p>
                </Button>
                <Button size="small" color="secondary" onClick={() => { setCurrentId(0); dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize="small" style={{ marginBottom: '3px' }} />
                    Delete
                </Button>
            </CardActions>
        </Card >
    );
}

export default Post;