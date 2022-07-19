import { Box, Pressable, Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { MainContext } from "../../contexts/context";

import ICategory, { CategoryContextType } from "../../models/ICategory";


interface IProps {
    category: ICategory;
}

const CategoryButton: React.FC<IProps> = ({
    category
}) => {
    const { selectedCategory, updateSelectedCategory } = useContext(MainContext) as CategoryContextType

    return (
        <Pressable
            onPress={() => updateSelectedCategory(category.name)}
        >
            <Box
                style={[styles.container, selectedCategory == category.name ? styles.selectedContainer : {}]}
            >
                <Text style={[styles.text, selectedCategory == category.name ? styles.selectedText : {}]} >{category.name}</Text>
            </Box>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        margin: 2,
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontWeight: "bold"
    },
    selectedContainer: {
        backgroundColor: "white"
    },
    selectedText: {
        color: "black"
    }
})

export default CategoryButton;