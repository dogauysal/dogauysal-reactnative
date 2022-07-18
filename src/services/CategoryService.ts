import axios from "axios";
import ICategory from "../models/ICategory";

class CategoryService {
    getAll = async () => {
        const response = await axios.get<ICategory[]>(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`);

        return response.data;
    }

    getById = async (id: number) => {
        const response = await axios.get<ICategory>(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/${id}`);

        return response.data;
    }
}

export default new CategoryService();