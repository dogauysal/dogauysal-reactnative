import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { HomeParamList } from '../navigation/Types';

type CreateProductScreenNavigationProp = NativeStackScreenProps<HomeParamList, "CreateProduct">

const CreateProductScreen = ({
    navigation,
    route
}: CreateProductScreenNavigationProp) => {

    return (
        <></>
    )
}

export default CreateProductScreen;