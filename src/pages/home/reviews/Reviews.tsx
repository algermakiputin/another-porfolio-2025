
import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './reviews.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Reviews = () => {
    return (
        <Box sx={{
                    p: {lg: 7, md: 4, sm:4, xs: 4},
                    pt: {lg: 7, md: 4, sm:4, xs: 4}
                }}>
            <SectionHeader title='Testimonials' />
            <Carousel autoPlay className='carousel' responsive={responsive} showDots={true} arrows={false} dotListClass='reviews-carousel-dots'>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote'/>
                        <Typography variant='body2'>
                            I worked with Alger over the past 2 years, he has consistently demonstrated a profound understanding of both front-end and back-end development, seamlessly bridging the gap between design and functionality. I highly recommend Alger for any venture requiring a skilled Full Stack Engineer."
                        </Typography>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='/images/reviews/roy.jpg' />
                            </div>
                            <div className='info'>
                                <Typography variant='body2'>Roy S**oy</Typography>
                                <Typography variant='body2'>Tech Solution Architect Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <Typography>
                            Collaborating with Alger has been a transformative experience for our car parts business. We needed a robust inventory software to manage our extensive inventory and provide a seamless shopping experience for our customers. Alger delivered a solution that exceeded our expectations.
                        </Typography>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='/images/reviews/carlos.jpg' />
                            </div>
                            <div className='info'>
                                <Typography variant='body2'>Carlos R**ble</Typography>
                                <Typography variant='body2'>Business Owner</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <Typography>
                            Partnering with Alger has been transformative for our grocery business. He took the time to understand our unique challenges and delivered a tailored solution that streamlined our inventory management and operations. His work has been instrumental in driving our success.
                        </Typography>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='/images/reviews/ian.jpg' />
                            </div>
                            <div className='info'>
                                <Typography variant='body2'>Ian A**enza</Typography>
                                <Typography variant='body2'>Business Owner</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <Typography>
                            Working with Alger has been a transformative experience for my retail business. Operating from abroad, I was initially concerned about managing a development project remotely. However, Alger's professionalism and clear communication quickly put those concerns to rest.
                        </Typography>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='/images/reviews/arnel.jpg' />
                            </div>
                            <div className='info'>
                                <Typography variant='body2'>Arnel S**an</Typography>
                                <Typography variant='body2'>Grocery Store Owner</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <Typography>
                            I worked with Alger as I needed a software to help me streamlined our online thai product business. He delivered a custom inventory system that not only improved our stock tracking but also enhanced our operational efficiency. Very accomodating with a great aftersales service.
                        </Typography>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='/images/reviews/edmund.jpg' />
                            </div>
                            <div className='info'>
                                <Typography variant='body2'>Edmund L*i</Typography>
                                <Typography variant='body2'>Ecommerce Store Owner</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </Box>
    );
}

export default Reviews;