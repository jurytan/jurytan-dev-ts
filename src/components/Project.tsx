import Card from "@mui/material/Card";
import { Avatar, CardActionArea, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from 'prop-types';


interface IProjectProps {
    title: string;
    description?: string;
    image?: string;
    companyName?: string;
    companyLogo?: string;
}

export const Project = (props: IProjectProps) => {
    return (
        <Card sx={{ minWidth: 400, borderRadius: 5 }}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    // height="300"
                    width="100%"
                    image={props?.image ?? "https://mui.com/static/images/cards/contemplative-reptile.jpg"}
                    sx={{ objectFit: "cover", maxHeight: 300 }}
                />
                <Avatar 
                    alt={`${props.companyName} + logo`}
                    src={props.companyLogo}
                    sx={{ float: 'right', top: -75, right: 20, width: 56, height: 56 }} />
                <CardContent sx={{ display: 'flex', justifyContent: 'center', margin: '0 50px' }} >
                    <Typography align="center" gutterBottom variant="h5" component="div" textAlign="center">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

Project.propType = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    companyName: PropTypes.string,
    companyLogo: PropTypes.string,
};