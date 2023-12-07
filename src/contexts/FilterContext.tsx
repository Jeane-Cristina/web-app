'use client'
import getImgurGallery from "@/services/IMGURSerivce";
import { ReactNode, createContext, useContext, useState } from "react";

type FilterContextType = {
    filter: {
        section: 'HOT' | 'TOP' | 'USER' | undefined,
        sort: 'VIRAL' | 'TOP' | 'TIME' | 'RISING' | undefined,
        window: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR' | 'ALL' | undefined,
        number: number,
    };
    handleChangeFilter: (param: string, option: string) => void;
};

const defaultValues: FilterContextType = {
    filter: {
        section: 'HOT',
        sort: 'VIRAL',
        window: undefined,
        number: 4,
    },
    handleChangeFilter: () => {},
};

const FilterContext = createContext<FilterContextType | undefined>(defaultValues);


type FilterProviderProps = {
    children: ReactNode;
}

type FilterType = {
    section: 'HOT' | 'TOP' | 'USER' | undefined;
    sort: 'VIRAL' | 'TOP' | 'TIME' | 'RISING' | undefined;
    window: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR' | 'ALL' | undefined;
    number: number;
}


export const FilterProvider: React.FC<FilterProviderProps> = ({children}) => {
    
    const [filter, setFilter] = useState<FilterType>({
        section: undefined,
        sort: undefined,
        window: undefined,
        number: 4,
    });

    const handleChangeFilter = (param: string, option: string) => {
        setFilter((prevFilter) => {
            return {
                ...prevFilter,
                [param]: option as any,
            };
        });
    }
    
    return (
        <FilterContext.Provider value={{ filter, handleChangeFilter }}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if(context === undefined){
        throw Error('Error in useFilterContext');
    }
    return context;
};

export default FilterProvider;