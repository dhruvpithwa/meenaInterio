import { LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export const ProjectCard = (props) => {

    const navigate = useNavigate();
    const { assets, name, location, id } = props.project ?? {};

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
                <Button 
                    onClick={()=> {
                        navigate(`/projects?id=${id}`);
                        window.scrollTo(0, 0);
                    }}
                >
                    Click 
                </Button>
            </CardContent>
        </Card>
    )
}