import { Box } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { TextLayerUpProps } from '../../interfaces/animations/Animations';

const TextLayerUp: React.FC<TextLayerUpProps> = ({ node, style }): JSX.Element => {
    const [spring, api] = useSpring(() => ({
        from: { y: 0 },
    }));

    const handleClick = (): void => {
        api.start({
            to: { y: -window.innerHeight },
            config: { tension: 50, friction: 20 },
        });
    };

    return (
        <animated.div onClick={handleClick} style={{ ...spring, ...style }}>
            <Box 
                sx={{ 
                    minHeight: '100vh', 
                    minWidth: '100vw', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    ...style
                }}
            >
                {node}
            </Box>
        </animated.div>
    );
};

export default TextLayerUp;