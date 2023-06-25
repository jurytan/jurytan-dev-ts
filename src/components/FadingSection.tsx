import Container from "@mui/material/Container";
import React, { Component, useEffect } from "react";
import PropTypes from 'prop-types';

interface FadingSectionProps {
    fadeStart: number, 
    fadeEnd: number,
    children: React.ReactNode,
}

export const FadingSection = ({ fadeStart, fadeEnd, children }: FadingSectionProps) => {
    const [opacity, setOpacity] = React.useState(1);

    useEffect(() => {
        const handleScroll = () => {
        
        let opacity = 1;
        if (window.scrollY >= fadeStart) {
            opacity = 1 - (window.scrollY - fadeStart) / (fadeEnd - fadeStart);
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
    fadeStart: PropTypes.number.isRequired,
    fadeEnd: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired,
}