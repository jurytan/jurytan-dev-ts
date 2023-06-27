
import Typography from "@mui/material/Typography";
import { SocialItem } from "./SocialItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider/Divider";

import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitch from "../images/twitch.jpg";

import github_svg from "../images/github.svg";
import linkedin_svg from "../images/linkedin.svg";
import twitch_svg from "../images/twitch.svg";
import discord_svg from "../images/discord.svg";

export const Social = () => {

    const socials = [
        {
            img: github_svg,
            name: 'github',
            url: 'https://github.com/jurytan'
        },
        {
            img: linkedin_svg,
            name: 'linkedin',
            url: 'https://bit.ly/jnguyenLI'
        },
        {
            img: twitch_svg,
            name: 'twitch',
            url: 'https://twitch.tv/jurytan'
        },
        {
            img: discord_svg,
            name: 'discord',
            url: 'https://discord.gg/fgBETSuTSG'
        }
    ];

    return (
        <>
            <Typography
                variant="h3"
                sx={{ fontFamily: "Product Sans", textalign: "right" }}
                color="text.secondary"
                gutterBottom
            >
                Social
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                divider={<Divider orientation="vertical" flexItem />}
            >
                {socials.map((social) => (
                    <SocialItem url={social.url} name={social.name} img={social.img} />
                ))}
            </Stack>
        </>
    );
}