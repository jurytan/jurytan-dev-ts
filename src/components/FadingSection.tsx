import Container from "@mui/material/Container";
import React, { Component, useEffect } from "react";
import PropTypes from 'prop-types';

interface FadingSectionProps {
    fadeOutStart: number, 
    fadeOutEnd: number,
    children: React.ReactNode,
}

export const FadingSection = ({ fadeOutStart, fadeOutEnd, children }: FadingSectionProps) => {
    const [opacity, setOpacity] = React.useState(1);

    useEffect(() => {
        const handleScroll = () => {
            let opacity = 1;
            if (window.scrollY >= fadeOutStart) {
                opacity = 1 - (window.scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
            }

            setOpacity(opacity < 0 ? 0 : opacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <Container sx={{ opacity: opacity }}>
            {children}
        </Container>
    );
};

FadingSection.propTypes = {
    fadeOutStart: PropTypes.number.isRequired,
    fadeOutEnd: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
}