import axios from "axios"
import IProduct from "../models/Product"

class ProductService {

    getAll = async () => {
        const response = await axios.get<IProduct[]>(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`);

        return response.data;
    }

    getById = async (id: number) => {
        const response = await axios.get<IProduct>(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`);

        return response.data;
    }

    post = async (product: IProduct) => {
        const response = await axios.post(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`, product);

        return response.data;
    }
}

export default new ProductService();