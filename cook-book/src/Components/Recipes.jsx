import { useState, useEffect } from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import client from "../util/Client";
import {  Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Styles } from './Styles';
import Carousel from 'react-material-ui-carousel'

const Recipes = () => {

  const [item,setItem] = useState(null);
  const { cookBooksId } = useParams();
  const navigate = useNavigate();



  useEffect(() => {
    client
    .getEntry(cookBooksId)
    .then(response => setItem(response))
    .catch(console.error);
  },[]);

  const handleGoBack = () => {
    navigate('/Recipes');
  };
const RecipeList = () => {
    const recipeItem = item.fields.recipe.split('\n');
      return (
        <ul>
          {recipeItem.map((item) => (
            <li key={item.cookBooksId}>{item}</li>
          ))}
        </ul>
      ); 
  };

  const IngredientsList = () => {

    return (
      <ul>
        {item.fields.ingredients.split('\n').map((item) => (
          <li key={item.cookBooksId}>{item}</li>
        ))}
      </ul>
    ); 
};

  return (
  
    <Container style={Styles.container} maxWidth="xl">
        { item && (
          <Grid container spacing={4}>

            <Grid item md={12} style={Styles.grid1} >
              <Card>
                  <Typography style={Styles.typographyTitle} variant="h3" align="center">
                    {item.fields.title}
                    </Typography>
                    <Carousel style={Styles.carousel}>
                      {item.fields.multiImages.map(image => (
                        <CardMedia 
                        style={Styles.carouselimage}
                        component="img"
                        key={image.sys.id}
                        src={image.fields.file.url}
                        alt={item.fields.title} />
                      ))}
                      </Carousel>
                    <CardContent style={Styles.cardcontent}>
                        <Typography style={Styles.ingredients} variant="h5" align="justify" gutterBottom>
                            What You will Need
                        </Typography> 
                        <Typography variant="h6" align="left" gutterBottom>
                          {IngredientsList()}
                        </Typography>
                        <Typography style={Styles.preparation} variant="h5" align="justify" gutterBottom>
                          How to Make It
                        </Typography> 
                        <Typography variant="h6" align="left">
                          {RecipeList()}
                        </Typography>
                    </CardContent>
                    <CardActions style={Styles.cardaction}>
                      <Button onClick={handleGoBack} size="large" style={Styles.goBack} >
                        Go Back
                      </Button>
                    </CardActions>
              </Card>
            </Grid>
        </Grid>
        )}
    </Container>
  );
};

export default Recipes;