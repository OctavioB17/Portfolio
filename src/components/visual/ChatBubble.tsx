import React from 'react';
import { Paper } from '@mui/material';
import { ChatBubbleProps } from '../../interfaces/Visuals';

const ChatBubble: React.FC<ChatBubbleProps> = ({ children, position }) => {

  return (
    <Paper
      sx={{
        borderRadius: position === "left" ? '10px 10px 0px 10px' : '10px 10px 10px 0px',
        maxWidth: '80%',
        margin: position === "left" ? '10px 7px 10px 0' : '10px 0 10px -15px',
        backgroundColor: position === "left"  ? '#e1ffc7' : '#f1f1f1',
        alignSelf: position === "left"  ? 'flex-end' : 'flex-start',
        bgcolor: 'white',
        color: 'typography.main'
      }}
    >
      {children}
    </Paper>
  );
};

export default ChatBubble;