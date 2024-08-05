import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardContent, Typography, TextField, Button, MenuItem, Box, CircularProgress, Alert
} from '@mui/material';
import { styled } from '@mui/system';
import './Transportation.css';

const PageContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  animation: 'fadeIn 1s ease-in-out',
}));

const SearchForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '800px',
  animation: 'slideIn 1s ease-in-out',
}));

const Transportation = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromCountry, setFromCountry] = useState('');
  const [fromState, setFromState] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [toState, setToState] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const navigate = useNavigate();

  const countries = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'france', label: 'France' }
  ];

  const states = {
    usa: ['California', 'New York', 'Texas'],
    canada: ['Ontario', 'Quebec', 'British Columbia'],
    france: ['Paris', 'Marseille', 'Lyon']
  };

  const dummyRoutes = [
    { id: 1, from: 'New York, USA', to: 'California, USA', duration: '5 hours' },
    { id: 2, from: 'Ontario, Canada', to: 'Quebec, Canada', duration: '3 hours' },
    { id: 3, from: 'Paris, France', to: 'Marseille, France', duration: '4 hours' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');

    if (!from || !to || !fromCountry || !toCountry) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Simulate search logic
    setTimeout(() => {
      const results = dummyRoutes.filter(route =>
        route.from.toLowerCase().includes(from.toLowerCase()) &&
        route.to.toLowerCase().includes(to.toLowerCase())
      );

      setRecentSearches([...recentSearches, { from, to }]);
      navigate('/search-results', { state: { from, to, routes: results } });
      setIsLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setFrom('');
    setTo('');
    setFromCountry('');
    setFromState('');
    setToCountry('');
    setToState('');
    setError('');
  };

  return (
    <PageContainer>
      <Card className="transportation-card">
        <CardContent>
          <Typography variant="h4" className="transportation-title">
            Transportation Planning and Execution
          </Typography>
          <Typography className="transportation-description">
            Route Optimization, Carrier Selection, Load Planning...
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <SearchContainer>
            <SearchForm onSubmit={handleSearch}>
              <TextField
                label="From"
                variant="outlined"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
              />
              <TextField
                select
                label="From Country"
                value={fromCountry}
                onChange={(e) => setFromCountry(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="From State"
                value={fromState}
                onChange={(e) => setFromState(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
                disabled={!fromCountry}
              >
                {fromCountry && states[fromCountry].map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="To"
                variant="outlined"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
              />
              <TextField
                select
                label="To Country"
                value={toCountry}
                onChange={(e) => setToCountry(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="To State"
                value={toState}
                onChange={(e) => setToState(e.target.value)}
                variant="outlined"
                fullWidth
                inputProps={{ style: { fontSize: '1.2rem' } }}
                disabled={!toCountry}
              >
                {toCountry && states[toCountry].map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Box display="flex" gap="1rem">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    style={{ fontSize: '1.2rem', padding: '0.5rem 2rem' }}
                  >
                    Search
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClear}
                    size="large"
                    style={{ fontSize: '1.2rem', padding: '0.5rem 2rem' }}
                  >
                    Clear
                  </Button>
                </Box>
              )}
            </SearchForm>
          </SearchContainer>
          <Box marginTop="2rem">
            <Typography variant="h6" className="transportation-title">
              Recent Searches
            </Typography>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search.from} to {search.to}</li>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default Transportation;
