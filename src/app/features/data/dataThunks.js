// src/features/data/dataThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
// Define the async thunk for fetching and transforming data
export const fetchGraphData = createAsyncThunk(
  'data/fetchGraphData',
  async () => {
    const response = await fetch('/sampledata200.json');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    let data = await response.json();
    
    // Use the imported transformData function
    
    return data;
    
  }
);
