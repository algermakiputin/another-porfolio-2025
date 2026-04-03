import { Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import './reviews.css';

const responsive = {
    superLargeDesktop: {
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

const STARS = '★★★★★';

const testimonials = [
    {
        quote: 'I worked with Alger over the past 2 years. He has consistently demonstrated a profound understanding of both front-end and back-end development, seamlessly bridging the gap between design and functionality. I highly recommend Alger for any venture requiring a skilled Full Stack Engineer.',
        name: 'Roy S.',
        role: 'Tech Solution Architect Manager',
        avatar: '/images/reviews/roy.jpg',
    },
    {
        quote: 'Collaborating with Alger has been a transformative experience for our car parts business. We needed a robust inventory software to manage our extensive inventory and provide a seamless shopping experience. Alger delivered a solution that exceeded our expectations.',
        name: 'Carlos R.',
        role: 'Car Parts Business Owner',
        avatar: '/images/reviews/carlos.jpg',
    },
    {
        quote: 'Partnering with Alger has been transformative for our grocery business. He took the time to understand our unique challenges and delivered a tailored solution that streamlined our inventory management and operations. His work has been instrumental in driving our success.',
        name: 'Ian A.',
        role: 'Grocery Business Owner',
        avatar: '/images/reviews/ian.jpg',
    },
    {
        quote: 'Working with Alger has been a transformative experience for my retail business. Operating from abroad, I was initially concerned about managing a development project remotely. However, his professionalism and clear communication quickly put those concerns to rest.',
        name: 'Arnel S.',
        role: 'Grocery Store Owner',
        avatar: '/images/reviews/arnel.jpg',
    },
    {
        quote: 'I worked with Alger as I needed software to help streamline our online Thai product business. He delivered a custom inventory system that improved our stock tracking and enhanced our operational efficiency. Very accommodating with great after-sales service.',
        name: 'Edmund L.',
        role: 'E-Commerce Store Owner',
        avatar: '/images/reviews/edmund.jpg',
    },
];

const Reviews = () => {
    return (
        <Box sx={{
            p: { lg: 7, md: 4, sm: 4, xs: 4 },
            pt: { lg: 7, md: 4, sm: 4, xs: 4 },
        }}>
            <SectionHeader title="Testimonials" />
            <Typography variant="body1" sx={{ mb: 6, mt: -2 }}>
                Here is what clients say about working with me.
            </Typography>
            <Carousel
                autoPlay
                autoPlaySpeed={6500}
                className="carousel"
                responsive={responsive}
                showDots={true}
                arrows={false}
                infinite={true}
            >
                {testimonials.map((t) => (
                    <div className="carousel-wrapper" key={t.name}>
                        <div className="carousel-item">

                            {/* Stars */}
                            <Box className="review-stars">
                                {STARS.split('').map((s, i) => (
                                    <span key={i}>{s}</span>
                                ))}
                            </Box>

                            {/* Quote */}
                            <Typography variant="body1" className="review-quote">
                                &ldquo;{t.quote}&rdquo;
                            </Typography>

                            {/* Profile */}
                            <Box className="review-profile">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="review-avatar"
                                />
                                <Box>
                                    <Typography className="review-name">{t.name}</Typography>
                                    <Typography className="review-role">{t.role}</Typography>
                                </Box>
                            </Box>

                        </div>
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default Reviews;
