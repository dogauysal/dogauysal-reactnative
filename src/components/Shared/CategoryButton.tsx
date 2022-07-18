import { Box, Pressable, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ICategory from "../../models/ICategory";


interface IProps {
    category: ICategory;
}

const CategoryButton: React.FC<IProps> = ({
    category
}) => {

    const [isSelected, setIsSelected] = useState(false);

    const onPress = () => {
        setIsSelected(!isSelected)
    }

    return (
        <Pressable
            onPress={() => onPress()}
        >
            <Box
                style={[styles.container, isSelected ? styles.selectedContainer : {}]}
            >
                <Text style={[styles.text, isSelected ? styles.selectedText : {}]} >{category.name}</Text>
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