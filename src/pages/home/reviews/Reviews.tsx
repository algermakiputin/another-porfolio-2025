import { Typography } from '@mui/joy';
import { Box } from '@mui/material';
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
            <Carousel className='carousel' responsive={responsive} showDots={true} arrows={false} dotListClass='reviews-carousel-dots'>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <blockquote>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe dolorum vero soluta. Ad officia alias ex illo? Sint sequi nulla ex eos eaque facilis obcaecati voluptas sit quod iusto.
                        </blockquote>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' />
                            </div>
                            <div className='info'>
                                <Typography level='body-xs'>John Doe</Typography>
                                <Typography level='body-sm'>Project Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <blockquote>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe dolorum vero soluta. Ad officia alias ex illo? Sint sequi nulla ex eos eaque facilis obcaecati voluptas sit quod iusto.
                        </blockquote>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' />
                            </div>
                            <div className='info'>
                                <Typography level='body-xs'>John Doe</Typography>
                                <Typography level='body-sm'>Project Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <blockquote>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe dolorum vero soluta. Ad officia alias ex illo? Sint sequi nulla ex eos eaque facilis obcaecati voluptas sit quod iusto.
                        </blockquote>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' />
                            </div>
                            <div className='info'>
                                <Typography level='body-xs'>John Doe</Typography>
                                <Typography level='body-sm'>Project Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <blockquote>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe dolorum vero soluta. Ad officia alias ex illo? Sint sequi nulla ex eos eaque facilis obcaecati voluptas sit quod iusto.
                        </blockquote>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' />
                            </div>
                            <div className='info'>
                                <Typography level='body-xs'>John Doe</Typography>
                                <Typography level='body-sm'>Project Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-wrapper'> 
                    <div className='carousel-item'>
                        <FormatQuoteIcon className='format-quote' />
                        <blockquote>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam saepe dolorum vero soluta. Ad officia alias ex illo? Sint sequi nulla ex eos eaque facilis obcaecati voluptas sit quod iusto.
                        </blockquote>
                        <div className='profile-wrapper'>
                            <div className='image-wrapper'>
                                <img src='https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=' />
                            </div>
                            <div className='info'>
                                <Typography level='body-xs'>John Doe</Typography>
                                <Typography level='body-sm'>Project Manager</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </Box>
    );
}

export default Reviews;