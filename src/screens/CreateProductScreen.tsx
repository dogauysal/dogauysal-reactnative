import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Center, FormControl, Input, Pressable, ScrollView, Stack, TextArea } from 'native-base';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import CategoryBar from '../components/Shared/CategoryBar';
import CategoryButton from '../components/Shared/CategoryButton';
import { MainContext } from '../contexts/context';
import ICategory, { CategoryContextType } from '../models/ICategory';
import Product from '../models/Product';
import IProduct from '../models/Product';
import { HomeParamList } from '../navigation/Types';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';

type CreateProductScreenNavigationProp = NativeStackScreenProps<HomeParamList, "CreateProduct">

const CreateProductScreen = ({
    navigation,
    route
}: CreateProductScreenNavigationProp) => {
    const { categories, selectedCategory, updateSelectedCategory } = useContext(MainContext) as CategoryContextType

    useEffect(() => {
        updateSelectedCategory("")
    }, [])

    const [product, setProduct] = useState<IProduct>(new Product());

    const postProduct = async () => {
        let _newProduct = { ...product }
        _newProduct.category = selectedCategory

        await ProductService.post(_newProduct).then(res => console.log(res)).catch(errr => console.log(errr)).finally(() => updateSelectedCategory("All"))

        navigation.goBack();
    }



    return (
        <FormControl style={styles.container}>
            <Stack space={5}>
                <Stack style={styles.input}>
                    <Input p={2} placeholder="Product title"
                        value={product.name}
                        onChangeText={(text) => {

                            let _newProduct = { ...product }

                            _newProduct.name = text

                            setProduct(_newProduct)
                        }}
                    />
                </Stack>
                <Stack style={styles.input}>
                    <Input p={2} placeholder="Price"
                        keyboardType="numeric"
                        value={product.price.toString()}
                        onChangeText={(text) => {

                            let _newProduct = { ...product }

                            _newProduct.price = Number(text)

                            setProduct(_newProduct)
                        }}
                    />
                </Stack>
                <Stack style={styles.input}>
                    <TextArea p={2} placeholder="Description" autoCompleteType=""
                        value={product.description}
                        onChangeText={(text) => {

                            let _newProduct = { ...product }

                            _newProduct.description = text

                            setProduct(_newProduct)
                        }}
                    />
                </Stack>
                <Stack style={styles.input}>
                    <Input p={2} placeholder="Image Link"
                        value={product.avatar}
                        onChangeText={(text) => {
                            let _newProduct = { ...product }

                            _newProduct.avatar = text

                            setProduct(_newProduct)
                        }}
                    />
                </Stack>
                <Stack >
                    <FormControl.Label>Selected Category: {selectedCategory}</FormControl.Label>
                    <ScrollView
                        horizontal
                    >
                        {categories.map((category) => (
                            <CategoryButton key={category.id} category={category} />
                        ))}
                    </ScrollView>
                </Stack>
            </Stack>
            <Center style={styles.buttonContainer}>
                <Button onPress={() => postProduct()} style={styles.button}>Add Product</Button>
            </Center>
        </FormControl>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        paddingVertical: 3
    },
    buttonContainer: {
        position: "absolute",
        width: 200,
        bottom: 50,
        right: Dimensions.get("screen").width / 2 - 100,
    },
    button: {
        backgroundColor: "#000"
    }
})

export default CreateProductScreen;