import React from 'react';

const ErrorFeedback = ({ error }) => (error ? <div>{error}</div> : null);

export default ErrorFeedback;
