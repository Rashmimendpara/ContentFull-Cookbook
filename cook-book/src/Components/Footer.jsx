import { Typography, Container, styled } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(217, 217, 217)',
      contrastText: '#ffffff',
    },
  },
});

const FooterContainer = styled('footer')({
  backgroundColor: '#ffffff',
  color: theme.palette.primary.contrastText,
  padding: '2rem',
  marginTop: 'auto',
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <Container maxWidth="lg">
          <Typography variant="h6" style={{ color: '#32620E'}}>Connect with us:</Typography>
          <div>
            <FacebookIcon fontSize="large" style={{ marginRight: '1rem', color: '#32620E' }} />
                <InstagramIcon fontSize="large" style={{ marginRight: '1rem', color: '#32620E' }} />
                <PinterestIcon fontSize="large" style={{ color: '#32620E'}} />
          </div>
          <Typography variant="body2" style={{ marginTop: '2rem', color: '#32620E' }}>
            &copy; 2023 PaZoRa All rights reserved.
          </Typography>
        </Container>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default Footer;
