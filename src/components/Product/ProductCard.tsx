import { AspectRatio, Box, Center, Text, Heading, Image, Stack, HStack, VStack, Button } from "native-base";
import { background } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import IProduct from "../../models/Product";

interface IProps {
    product: IProduct;
}

const ProductCard: React.FC<IProps> = ({
    product
}) => {

    return (
        <Box margin={2} >
            <Box rounded="lg" borderColor="coolGray.200" borderWidth="1" >
                <Center>
                    <AspectRatio w="100%" >
                        <Image source={{
                            uri: product.avatar
                        }} alt="image" />
                    </AspectRatio>
                </Center>
                <Box backgroundColor={"black"}>
                    <HStack flex={1}>
                        <VStack paddingLeft={2} flex={0.8}>
                            <Box>
                                <Text color={"white"} fontWeight={"bold"}>{product.name}</Text>
                            </Box>
                            <Box>
                                <Text color={"white"} fontWeight={"bold"}>{`$ ${product.price}`}</Text>
                            </Box>
                        </VStack>
                        <VStack flex={0.2}>

                        </VStack>
                    </HStack>
                </Box>
            </Box>
        </Box >
    )
}

export default ProductCard;