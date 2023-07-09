import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Theme, useMediaQuery } from "@mui/material";

interface FadingSectionProps {
    fadeOutStart: number, 
    fadeOutEnd: number,
    height?: number,
    children: React.ReactNode,
}

export const FadingSection = ({ fadeOutStart, fadeOutEnd, height = 250, children }: FadingSectionProps) => {
    const [opacity, setOpacity] = React.useState(1);
    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    useEffect(() => {
        if (isLargeScreen) {
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
        }

    }, [isLargeScreen]);

    return (
        <Container sx={{ opacity: opacity, minHeight: height, paddingTop: 12, paddingBottom: 12}}>
            {children}
        </Container>
    );
};

FadingSection.propTypes = {
    fadeOutStart: PropTypes.number.isRequired,
    fadeOutEnd: PropTypes.number.isRequired,
    height: PropTypes.number,
    children: PropTypes.element.isRequired,
}