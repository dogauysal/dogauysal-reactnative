import * as React from 'react';
import ICategory, { CategoryContextType } from '../models/ICategory';

export const MainContext = React.createContext<CategoryContextType>({
    categories: [],
    updateCategories: (categories: ICategory[]) => { },
    selectedCategory: "All",
    updateSelectedCategory: (category: string) => { }
})

const MainProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [categories, setCategories] = React.useState<ICategory[]>([]);

    const updateCategories = (categories: ICategory[]) => {
        setCategories(categories);
    }

    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const updateSelectedCategory = (category: string) => {
        setSelectedCategory(category);
    }

    return (
        <MainContext.Provider value={{ categories, updateCategories, selectedCategory, updateSelectedCategory }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider