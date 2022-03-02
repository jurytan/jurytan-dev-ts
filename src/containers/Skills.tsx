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
        { key: 0, label: 'Java 8' },
        { key: 1, label: 'Python' },
        { key: 2, label: 'Apex (SFDC)' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Typescript' },
        { key: 5, label: 'Git' },
        { key: 6, label: 'ES6' },
        { key: 7, label: 'Flutter' },
        { key: 8, label: 'Dart' },
        { key: 9, label: 'gRPC' },
        { key: 10, label: 'REST' },
        { key: 11, label: 'Bash' },
        { key: 12, label: 'SQL/PostgreSQL' },
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
                />
                </ListItem>
            );
            })}
        </Paper>
    </>);
};