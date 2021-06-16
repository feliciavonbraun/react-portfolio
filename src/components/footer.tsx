import { Box } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
    return (
        <footer>
            <Box display='flex' justifyContent='center'>
                <CopyrightIcon/>  2021 Felicia von Braun
            </Box>
        </footer>
    )
}