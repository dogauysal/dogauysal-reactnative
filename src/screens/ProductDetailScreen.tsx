import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { HomeParamList } from '../navigation/Types';

type ProductDetailScreenNavigationProp = NativeStackScreenProps<HomeParamList, "ProductDetail">

const ProductDetailScreen = ({
    navigation,
    route
}: ProductDetailScreenNavigationProp) => {

    return (
        <></>
    )
}

export default ProductDetailScreen;