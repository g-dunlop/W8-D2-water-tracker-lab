// Your custom hook goes here!
import React, {useState, useEffect} from 'react';

export const useToggle = () => {
    
    const [value, setValue] = useState(true)
    // const [isModalOpen, setIsModalOpen] = useState(true)

    const toggleValue = () => {
        setValue(!value);
      }
};