"use client"

import Select from 'react-select';
import useLocation from '@/app/hooks/useLocation';

export type LocationSelectValue = {
  navn: string;
  visueltcenterLon: number;
  visueltcenterLat: number;
  region: string;
};

interface LocationSelectProps {
  value?: LocationSelectValue;
  onChange: (value: LocationSelectValue) => void;
}

const Location: React.FC<LocationSelectProps> = ({ value, onChange }) => {
  const {getAll} = useLocation(); 
 
  return (
    <div>
      <Select
        placeholder="Choose a location"
        isClearable
        isSearchable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as LocationSelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.navn}{' - '}{option.region}</div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: 'black',
            primary25: '#ffe4e6',
          },
        })}
      />
    </div>
  );
};

export default Location;