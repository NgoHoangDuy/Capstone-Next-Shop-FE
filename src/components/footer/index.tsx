import { Box, Container, Grid, Typography, Link, IconButton, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.customColors.constrastColor,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  position: 'relative', // Add this to position the pseudo-element
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px', // Adjust shadow height as needed
    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
    // Alternative shadow options:
    // boxShadow: 'inset 0px 4px 8px -4px rgba(0, 0, 0, 0.2)',
    // or
    // boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
  }
}))

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}))

const IconText = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2)
}))

const Footer = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t('About_Us')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t('Footer_About_Description')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t('Quick_Links')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/products">{t('Products')}</FooterLink>
              <FooterLink href="/categories">{t('Categories')}</FooterLink>
              <FooterLink href="/deals">{t('Special_Deals')}</FooterLink>
              <FooterLink href="/new-arrivals">{t('New_Arrivals')}</FooterLink>
            </Box>
          </Grid>

          {/* Customer Service Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t('Customer_Service')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="/contact">{t('Contact_Us')}</FooterLink>
              <FooterLink href="/faq">{t('FAQ')}</FooterLink>
              <FooterLink href="/shipping">{t('Shipping_Policy')}</FooterLink>
              <FooterLink href="/returns">{t('Returns_Policy')}</FooterLink>
            </Box>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t('Contact_Info')}
            </Typography>
            <IconText>
              <LocationOnIcon />
              <Typography variant="body2">123 Street, City, Country</Typography>
            </IconText>
            <IconText>
              <PhoneIcon />
              <Typography variant="body2">+1 234 567 890</Typography>
            </IconText>
            <IconText>
              <EmailIcon />
              <Typography variant="body2">info@example.com</Typography>
            </IconText>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.5)', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} {t('Copyright_Text')}
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  )
}

export default Footer