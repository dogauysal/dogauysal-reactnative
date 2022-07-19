export default interface ICategory {
    id: number;
    createdAt: Date;
    name: string;
}

export type CategoryContextType = {
    categories: ICategory[];
    updateCategories: (categories: ICategory[]) => void;
    selectedCategory: string;
    updateSelectedCategory: (category: string) => void;
}