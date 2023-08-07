'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

export type LocationSelectValue = {
    value: string;
    navn: string;
    visueltcenterLon: number;
    visueltcenterLat: number;
    region: string;
  };
  
  const useLocation = () => {
    const [locations, setLocations] = useState<LocationSelectValue[]>([]);
  
    useEffect(() => {
      const fetchLocations = async () => {
        try {
          const response = await axios.get('https://api.dataforsyningen.dk/kommuner');
          const formattedLocations = response.data.map((location: any) => ({
            value: location.navn,
            navn: location.navn,
            visueltcenterLat: location.visueltcenter[1],
            visueltcenterLon: location.visueltcenter[0],
            region: location.region.navn,
          }));
          setLocations(formattedLocations);
        } catch (error) {
          console.error('Error fetching locations:', error);
        }
      };
  
      fetchLocations();
    }, []);
  
    const getAll = () => locations;

    const getByValue = (value: string) => {
        return locations.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
}

export default useLocation;