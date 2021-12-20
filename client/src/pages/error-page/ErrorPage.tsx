import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const ErrorContainer = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ErrorPage: React.FC = () => (
    <ErrorContainer>
        <Typography variant="h3">404 Not found</Typography>
    </ErrorContainer>
);

export default ErrorPage;
