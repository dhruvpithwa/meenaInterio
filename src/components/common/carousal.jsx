import { Grid, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CardCarousel = ({ children, cardsToShow = 4, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const totalCards = React.Children.count(children);
        const autoplay = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, interval);

        return () => clearInterval(autoplay);
    }, [children, interval]);

    const visibleCards = React.Children.toArray(children).slice(currentIndex, currentIndex + cardsToShow);
    const nextCards = React.Children.toArray(children).slice(0, cardsToShow - visibleCards.length);

    return (
        <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <Grid container spacing={2} sx={{ display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
                {[...visibleCards, ...nextCards].map((card, index) => (
                    <Grid item 
                        xs={12} 
                        sm={24 / cardsToShow} 
                        md={12 / cardsToShow} 
                        key={index} 
                        p={1} 
                        sx={{ 
                            display: 'flex', 
                            alignSelf: 'stretch' 
                        }}
                    >
                        {card}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardCarousel;
