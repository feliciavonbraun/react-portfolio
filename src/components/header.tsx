import './css/header.css'
import { Box } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import { useMediaQuery } from './mediaQuery';

function Header() {

    const mobileView = useMediaQuery('(max-width: 950px)')

    return (
        <header style={{ margin: '0', height: '100vh' }}>
            <Box>
                <h1 className="flex center" style={mobileView ? h1Mobile : h1} >FELICIA VON BRAUN </h1>
                <Box className="flex center">
                    <h2 className="myTitleMobile" style={mobileView ? myTitleMobile : myTitle}>ASPIRING FRONTEND DEVELOPER</h2>
                </Box>
            </Box>
        </header >
    );
};
export default Header;
const h1: CSSProperties = {
    fontSize: '5rem',
    margin: '0',
    letterSpacing: '10px',
    paddingTop: '10rem',
};

const myTitle: CSSProperties = {
    fontSize: '1.2rem',
    margin: '0',
    lineHeight: '0',
    letterSpacing: '10px',
};

// MOBILE VIEW

const h1Mobile: CSSProperties = {
    ...h1,
    fontSize: '3rem',
    paddingTop: '6rem, 1rem, 1rem, 1rem',
    textAlign: 'center',
};

const myTitleMobile: CSSProperties = {
    ...myTitle,
    letterSpacing: '4px',
};