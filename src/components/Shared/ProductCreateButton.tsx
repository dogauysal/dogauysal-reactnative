import { Button, Text, Pressable } from "native-base";
import { StyleSheet } from "react-native"

const ProductCreateButton = () => {
    return (
        <Pressable
            style={styles.container}
        >
            <Text fontSize={25}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderColor: "black",
        borderWidth: 1,
        position: "absolute",
        bottom: 50,
        right: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 10
    }
})

export default ProductCreateButton;