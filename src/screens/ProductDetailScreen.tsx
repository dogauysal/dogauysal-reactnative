import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AspectRatio, Box, HStack, Image, VStack, Text, Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import IProduct from '../models/Product';
import { HomeParamList } from '../navigation/Types';
import ProductService from '../services/ProductService';

type ProductDetailScreenNavigationProp = NativeStackScreenProps<HomeParamList, "ProductDetail">

const ProductDetailScreen = ({
    navigation,
    route
}: ProductDetailScreenNavigationProp) => {

    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        let id = route.params["id"];

        if (id) {
            fetchProduct(id)
        }
    }, [])

    const fetchProduct = async (id: number) => {
        await ProductService.getById(id).then((data) => {
            setProduct(data)
            navigation.setOptions({ title: data.name })
        })
    }


    return (
        <VStack flex={1}>
            <Box style={styles.imageContainer}>
                <AspectRatio w="100%" >
                    <Image source={{
                        uri: product?.avatar
                    }} alt="image" />
                </AspectRatio>
            </Box>
            <Box style={styles.descriptionContainer}>
                <HStack>
                    <Box flex={2}>
                        <Text style={styles.text}>{product?.name}</Text>
                    </Box>
                    <Box flex={1} >
                        <Text textAlign={"right"} style={styles.text}>{`$ ${product?.price}`}</Text>
                    </Box>
                </HStack>
                <HStack >
                    <Center>
                        <Text style={styles.text}>{product?.description}</Text>
                    </Center>
                </HStack>
            </Box >

        </VStack >
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 10
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 50
    },
    text: {
        color: "#fff",
        margin: 20,
        fontWeight: "800"
    }
})

export default ProductDetailScreen;