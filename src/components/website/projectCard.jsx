import { LocationOn } from '@mui/icons-material';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const ProjectCard = (props) => {

    const project = props.project;
    const { assets, name, location } = project ?? {};

    return (
        <Card variant="elevation" sx={{ background: "transparent" }}>
            <CardContent>
                <Box
                    component={'img'}
                    sx={{
                        width: '300px',
                        height: '180px',
                        maxHeight: '180px',
                        overflow: 'hidden',
                        objectFit: 'cover',
                    }}
                    src={assets[0].url}
                    alt={'project-asset'}
                />
                <Box
                    sx={{
                        my: 1,
                        color: '#063970',
                        fontSize: '18px',
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                    }}>
                    {name}
                </Box>
                <Typography
                    sx={{
                        display: 'flex',
                        color: '#fdb73e',
                        fontSize: '15px',
                        alignItems: 'center'
                    }}
                >
                    <LocationOn /> {location}
                </Typography>
            </CardContent>
        </Card>
    )
}