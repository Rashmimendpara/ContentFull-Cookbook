import { Link } from "react-router-dom";
import {  Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Styles } from './Styles';


const Home = ({ cookBooks }) => {
  return (
    <div>
      <Container style={Styles.container} maxWidth="xl">
        <Typography style={Styles.typography1} variant="h3" align="center" color="textPrimary" gutterBottom>
          Welcome to Delicious Recipes
        </Typography>
        <Typography style={Styles.typography2} variant="h5" align="center" color="textPrimary" paragraph>
          Explore Culinary Delights with Our Mouthwatering Recipes
        </Typography>

        <Grid container spacing={4}>
          {cookBooks.map((item) => (
            <Grid item key={item.sys.id} xs={12} sm={6} md={4}>
              <Card style={Styles.card}>
                <CardMedia style={Styles.cardMedia} component="img" image={item.fields.image.fields.file.url} alt={item.fields.title} />
                <CardContent>
                  <Typography  gutterBottom variant="h4">
                    {item.fields.title}
                  </Typography>
                  <Typography variant="h6" align="justify">
                    <p>{item.fields.description}</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" style={Styles.readMore}>
                    <Link to={`/cookBooks/${item.sys.id}`} style={Styles.readMore}>read More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;



