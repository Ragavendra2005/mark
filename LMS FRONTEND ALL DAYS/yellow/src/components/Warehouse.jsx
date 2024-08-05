// src/components/WarehousePage.jsx
import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/system';
import './WarehousePage.css';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  maxWidth: '600px',
  marginBottom: '2rem',
}));

const WarehousePage = () => {
  const [inventory, setInventory] = useState([]);
  const [storageLocations, setStorageLocations] = useState([]);
  const [item, setItem] = useState('');
  const [location, setLocation] = useState('');

  const addInventory = (e) => {
    e.preventDefault();
    setInventory([...inventory, { item, location }]);
    setItem('');
    setLocation('');
  };

  const addStorageLocation = (e) => {
    e.preventDefault();
    setStorageLocations([...storageLocations, location]);
    setLocation('');
  };

  return (
    <Card className="warehouse-card">
      <CardContent>
        <Typography variant="h4" className="warehouse-title">
          Warehouse Management
        </Typography>
        <Container>
          <Typography variant="h6">Add Inventory Item</Typography>
          <Form onSubmit={addInventory}>
            <TextField
              label="Item Name"
              variant="outlined"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              fullWidth
            />
            <TextField
              label="Storage Location"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Add Item
            </Button>
          </Form>

          <Typography variant="h6">Add Storage Location</Typography>
          <Form onSubmit={addStorageLocation}>
            <TextField
              label="Location Name"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Add Location
            </Button>
          </Form>

          <Typography variant="h6">Inventory</Typography>
          <List>
            {inventory.map((inv, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText primary={`Item: ${inv.item}, Location: ${inv.location}`} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>

          <Typography variant="h6">Storage Locations</Typography>
          <List>
            {storageLocations.map((loc, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText primary={`Location: ${loc}`} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Container>
      </CardContent>
    </Card>
  );
};

export default WarehousePage;
