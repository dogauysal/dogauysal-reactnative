import { Box, HStack, Pressable, ScrollView, Text } from "native-base";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import ICategory from "../../models/ICategory";
import CategoryButton from "./CategoryButton";

interface IProps {
    categories: ICategory[];
}

const CategoryBar: React.FC<IProps> = ({
    categories
}) => {

    return (
        <ScrollView
            horizontal
        >
            <CategoryButton category={{
                id: 0,
                name: "All",
                createdAt: new Date()
            }} />
            {categories.map((category) => (
                <CategoryButton key={category.id} category={category} />
            ))}
        </ScrollView>
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

export default CategoryBar;

