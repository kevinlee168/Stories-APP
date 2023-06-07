import React, { useState, useEffect } from "react";
import { TextField, Button, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const StyledForm = styled.form`
    // display: flex;
    flexWrap: wrap; 
    justifyContent: center;
    margin: 10px;
`;

const Typography = styled.p`
    font-size: 20px;
    text-align: center;
        `;

const StyledPaper = styled(Paper)`
    padding:10px;
`;

const StyledFileInput = styled(TextField)`
    width: 100% !important;
    margin: 10px 0 !important;
`;

const StyledButton = styled(Button)`
    margin: 5px 5px!important;
    color: #23a7a2 !important;
    font-size: 0.6em;
    border: 1.5px solid #23a7a2 !important;
    border-radius: 3px !important;  
    text-transform: none !important;  
`;

const StyledClearButton = styled(Button)`
    margin: 5px 5px!important;
    color: #9c27b0 !important;
    font-size: 0.6em;
    border: 1.5px solid #9c27b0 !important;
    border-radius: 3px !important;  
    text-transform: none !important;  
`;

const FileBaseDiv = styled.div`
    margin: 5px 0;
    padding: 5px 0px!important;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {   // to refresh the form data
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId !== 0) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(0);

        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });

    }

    return (
        <StyledPaper >
            <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="6">{currentId ? 'Editing' : 'Creating'} a story</Typography>
                <StyledFileInput name="creator" variant="outlined" label="Creator" fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <StyledFileInput name="title" variant="outlined" label="Title" fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <StyledFileInput name="message" variant="outlined" label="Message" fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <StyledFileInput name="tags" variant="outlined" label="Tags" fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <FileBaseDiv>
                    <FileBase type="file" mutiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </FileBaseDiv>

                <ButtonContainer>
                    <StyledButton variant="outlined" type="submit" size="large" fullWidth>Submit</StyledButton>
                    <StyledClearButton variant="outlined" size="large" onClick={clear} fullWidth>Clear</StyledClearButton>
                </ButtonContainer>
            </StyledForm>
        </StyledPaper >

    );
}

export default Form;