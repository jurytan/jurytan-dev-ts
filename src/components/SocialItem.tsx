import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';
import Link from "@mui/material/Link";
import { SvgIcon, createSvgIcon } from "@mui/material";
import { ReactNode } from "react";
import { ChildCare } from "@mui/icons-material";


interface SocialItemProps {
    name: string,
    url: string,
    img: ReactNode
}

export const SocialItem = ({url, name, img}: SocialItemProps) => {

    // const icon = createSvgIcon(img, name);

    return (
        <Link href={url}>
            {/* <SvgIcon sx={{ color: 'white' }}>
                {icon}
            </SvgIcon> */}
        </Link>
    );
}

SocialItem.propType = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};