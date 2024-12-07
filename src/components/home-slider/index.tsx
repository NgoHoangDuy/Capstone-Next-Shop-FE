import { Box, Button, Typography, useTheme } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: 'New Collection 2024',
    subtitle: 'Trending Fashion',
    description: 'Get up to 30% off on new arrivals',
    buttonText: 'Shop Now',
    image: '/images/slide1.png',
    backgroundColor: '#f6e6e6'
  },
  {
    id: 2,
    title: 'Summer Sale',
    subtitle: 'Special Offer',
    description: 'Save big on summer essentials',
    buttonText: 'View Collection',
    image: '/images/slide2.png',
    backgroundColor: '#003333'
  },
  {
    id: 3,
    title: 'Tech Gadgets',
    subtitle: 'Latest Electronics',
    description: 'Discover innovative technology',
    buttonText: 'Explore More',
    image: '/images/slide3.png',
    backgroundColor: '#990000'
  }
]

const HomeSlider = () => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box sx={{ width: '100%', height: { xs: '300px', md: '500px' }, mb: 4 }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundColor: slide.backgroundColor,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {/* Content */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  maxWidth: '1200px',
                  mx: 'auto',
                  px: { xs: 2, md: 4 },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {/* Text Content */}
                <Box sx={{ maxWidth: '500px' }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.customColors.darkPaperBg,
                      mb: 1,
                      fontWeight: 600
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.2
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {slide.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: '30px',
                      px: 4,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1.1rem'
                    }}
                  >
                    {slide.buttonText}
                  </Button>
                </Box>

                {/* Image */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    width: '45%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default HomeSlider