// src/components/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import './SearchResults.css';


const SearchResults = () => {
  const location = useLocation();
  const { from, to, routes } = location.state;

  return (
    <Card className="search-results-card">
      <CardContent>
        <Typography variant="h4" className="search-results-title">
          Available Routes
        </Typography>
        <Typography className="search-results-description">
          Routes from {from} to {to}
        </Typography>
        <List>
          {routes.map(route => (
            <ListItem key={route.id}>
              <ListItemText
                primary={`Route: ${route.from} to ${route.to}`}
                secondary={`Duration: ${route.duration}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SearchResults;
