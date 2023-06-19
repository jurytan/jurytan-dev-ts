import React from "react";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const Skills = () => {
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'Java' },
        { key: 1, label: 'Python' },
        { key: 2, label: 'Apex (SFDC)' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Typescript' },
        { key: 5, label: 'Javascript' },
        { key: 6, label: 'Git' },
        { key: 7, label: 'ES6' },
        { key: 8, label: 'Flutter' },
        { key: 9, label: 'Dart' },
        { key: 10, label: 'gRPC' },
        { key: 11, label: 'REST' },
        { key: 12, label: 'Bash' },
        { key: 13, label: 'SQL/PostgreSQL' },
        { key: 14, label: 'Cloud Pub/Sub' },
      ]);

    return (<>
        <Typography
            variant="h3"
            sx={{ fontFamily: "Product Sans", textalign:"right"}}
            color="text.secondary"
            gutterBottom
        >
            Skills
        </Typography>
        <Paper
            elevation={0}
            sx={{
            background: 'none',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
            }}
            component="ul"
        >
            {chipData.map((data) => {
            let icon;
    
            return (
                <ListItem key={data.key}>
                <Chip
                    icon={icon}
                    label={data.label}
                    variant="outlined"
                />
                </ListItem>
            );
            })}
        </Paper>
    </>);
};