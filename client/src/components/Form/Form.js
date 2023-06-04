import React, { useState } from "react";
import { TextField, Button, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

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
    margin: 5px 10px!important;
    color: #BF4F74 !important;
    font-size: 1em;
    border: 2px solid #BF4F74 !important;
    border-radius: 3px !important;    
`;

const FileBaseDiv = styled.div`
    margin: 10px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {
    }

    return (
        <StyledPaper >
            <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="6">Creating a story</Typography>
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
                    <StyledButton variant="outlined" type="submit" size="large" onClick={clear} fullWidth>Clear</StyledButton>
                </ButtonContainer>
            </StyledForm>
        </StyledPaper >

    );
}

export default Form;