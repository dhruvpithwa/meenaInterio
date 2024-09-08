import { Button, Card, CardContent, CardMedia, CardActions, CardActionArea, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export const ListProjects = () => {
  
  const navigate = useNavigate();
  const { projects } = useSelector(state => state.projectState);

  return (
    <>
      <Typography component={'div'}>
        <Button variant="contained" onClick={()=>navigate(`create`)}>Create Project</Button>
      </Typography>
      <br></br>

      <Divider />
      
      <Grid container mt={1} spacing={2}>
        
        {Object.keys(projects).length > 0 &&  Object.keys(projects).map((projectId) => {

          const { assets, description, name, location} = projects[projectId];

          return (
            <Grid item xs={12} md={3} key={projectId} >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={assets[0].url}
                    alt="project_image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div" color="text.secondary">
                      <b>{location}</b>
                    </Typography>
                    <Typography variant="body2">
                      {description[0]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={()=>navigate(`show?id=${projectId}`)}>
                    View
                  </Button>
                  <Button size="small" color="primary" onClick={()=>navigate(`edit?id=${projectId}`)}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )

        })}
        
        
      </Grid>
    </>
  );
}
