import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, FlatList, Flex, HStack, Pressable, Stack } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ProductCard from '../components/Product/ProductCard';
import CategoryBar from '../components/Shared/CategoryBar';
import ProductCreateButton from '../components/Shared/ProductCreateButton';
import { MainContext } from '../contexts/context';

import ICategory, { CategoryContextType } from '../models/ICategory';
import IProduct from '../models/Product';
import { HomeParamList } from '../navigation/Types';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';

type HomeScreenNavigationProp = NativeStackScreenProps<HomeParamList, "Home">

const HomeScreen = ({
    navigation,
    route
}: HomeScreenNavigationProp) => {
    const isFocused = useIsFocused();


    const { selectedCategory, updateSelectedCategory, categories, updateCategories } = useContext(MainContext) as CategoryContextType

    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [isFocused])

    useEffect(() => {

        if (selectedCategory == "All") {
            setFilteredProducts(products)
        } else {
            let _products = [...products];

            _products = _products.filter(p => p.category == selectedCategory);

            setFilteredProducts(_products)
        }

    }, [selectedCategory])


    const fetchCategories = async () => {
        await CategoryService.getAll().then(res => updateCategories(res));
    }

    const fetchProducts = async () => {
        await ProductService.getAll().then(res => {
            setProducts(res)
            setFilteredProducts(res);
        });
    }

    const renderItem = (product: IProduct) => {
        return (
            <Pressable
                key={product.id}
                flex={0.5}
                onPress={() => navigation.navigate("ProductDetail", {
                    id: product.id
                })}>
                <ProductCard product={product} />
            </Pressable >
        )
    }

    const onProductCreatePress = () => {
        navigation.navigate("CreateProduct")
    }

    return (
        <>
            <Stack style={styles.container}>
                <CategoryBar categories={categories} />
                <FlatList
                    data={filteredProducts}
                    renderItem={({ item }) => renderItem(item)}
                    numColumns={2}
                    keyExtractor={(item, i) => `k_${item.id}`}
                />
                <ProductCreateButton onPress={() => onProductCreatePress()} />
            </Stack>

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        padding: 5
    }
})

export default HomeScreen;