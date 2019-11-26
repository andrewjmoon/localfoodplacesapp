import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Tabletop from 'tabletop';
import Pagination from 'react-hooks-paginator';

const useStyles = makeStyles(theme => ({
  bullet: {
    margin: '0 2px',
    justify: 'center',
    transform: 'scale(0.8)',
    minWidth: 800,
    backgroundColor: 'salmon'
  },
  title: {
    fontSize: 50,
    alignItems: 'center',
    justify: 'center',
    textAlign: 'center'
  },
  items: {
    fontSize: 25,
    spacing: 0,

    textAlign: 'center'
  }
}));

function LocalFoodPlaces() {
  const pageLimit = 10;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_API_KEY,
      callback: function(data, tabletop) {
        console.log(data);
        setItems(data.Businesses.elements);
      },
      simpleSheet: false
    });
  }, []);

  useEffect(() => {
    setCurrentItems(items.slice(offset, offset + pageLimit));
  }, [offset, items]);
  /*
  componentDidMount() {
    Tabletop.init({
      key: process.env.REACT_APP_API_KEY,
      callback: googleData => {
        console.log('google sheet data --->', googleData);
        this.setState({
          data: googleData.Restaurants.elements
        });
      },
      simpleSheet: false
    });
  }
*/

  const classes = useStyles();

  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={15}>
          <CardContent className={classes.title}>
            Local Food Businesses{' '}
          </CardContent>

          {currentItems.map(obj => {
            return (
              <Card className={classes.bullet}>
                <CardContent className={classes.items}>
                  <div key={obj.ID}>
                    <p>Name: {obj.Name}</p>
                    <p>Type: {obj.Type}</p>
                    <p>
                      Map Link:{' '}
                      <a
                        href={`http://maps.google.com/?q=${obj.Street}, ${obj.City}, ${obj.State}, ${obj.Zip}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click_Link_Address
                      </a>
                    </p>
                    Website:{' '}
                    <a
                      href={obj.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click to the website site or Yelp site.
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Grid>
      <Pagination
        totalRecords={items.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default LocalFoodPlaces;
