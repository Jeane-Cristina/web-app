'use client'

import { useFilterContext } from '@/contexts/FilterContext';
import styles from './filter.module.css';
import { ReactNode } from 'react';

type FilterProps = {
    name: string;
    icon?: ReactNode;
    options: string[];
}

export default function Filter({name, icon, options}: FilterProps){

    const { handleChangeFilter } = useFilterContext();

    function handleChangeOption(option: string){
        //name == 'section'
        //option == 'TOP'
        const key = name.toLowerCase();
        handleChangeFilter(key, option);
    }

    return (
        <div className={styles.filter}>
            <span>{icon}{name}</span>
            <select onChange={(e) => handleChangeOption(e.target.value)}>
                {options.map((option, index: number) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )

}