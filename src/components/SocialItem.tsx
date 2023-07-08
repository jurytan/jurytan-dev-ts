import PropTypes from 'prop-types';
import Link from "@mui/material/Link";
import { Avatar } from '@mui/material';


interface SocialItemProps {
    name: string,
    url: string,
    img: string
}

export const SocialItem = ({url, name, img}: SocialItemProps) => {

    return (
        <Link href={url} aria-label={name}>
            <Avatar variant="rounded" src={img} />
        </Link>
    );
}

SocialItem.propType = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
