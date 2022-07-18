import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, Flex, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Product/ProductCard';
import CategoryBar from '../components/Shared/CategoryBar';
import ProductCreateButton from '../components/Shared/ProductCreateButton';
import ICategory from '../models/ICategory';
import IProduct from '../models/IProduct';
import { HomeParamList } from '../navigation/Types';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';

type HomeScreenNavigationProp = NativeStackScreenProps<HomeParamList, "Home">

const HomeScreen = ({
    navigation,
    route
}: HomeScreenNavigationProp) => {

    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [])

    useEffect(() => {
        let _products = [...products];

        _products = _products.filter(p => p.category == selectedCategoryName);

        setFilteredProducts(_products)

    }, [selectedCategoryName])

    const fetchCategories = async () => {
        await CategoryService.getAll().then(res => setCategories(res));
    }

    const fetchProducts = async () => {
        await ProductService.getAll().then(res => {
            setProducts(res)
            setFilteredProducts(res);
        });
    }

    const renderItem = (product: IProduct) => {
        return (
            <Box flex={0.5}>
                <ProductCard product={product} />
            </Box>

        )
    }



    return (
        <Box w="100%" flex={1} position={"relative"}>
            <CategoryBar categories={categories} onCategorySelect={() => console.log("")} />
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => renderItem(item)}
                numColumns={2}

            />
            <ProductCreateButton />
        </Box>


    )
}

export default HomeScreen;