import { Button, Text, Pressable, Box } from "native-base";
import { StyleSheet } from "react-native"

interface IProps {
    onPress: () => void
}

const ProductCreateButton: React.FC<IProps> = ({
    onPress
}) => {
    return (

        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Text fontSize={25}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: "#fff"
    }
})

export default ProductCreateButton;