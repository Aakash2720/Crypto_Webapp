import {Box, VStack ,Spinner } from "@chakra-ui/react";
import react from "react";
const  Loader =()=>{
return (
    <VStack h="90vh" justifyContent={"center"}>
        <Box transform={"scale(6)"}>
            <Spinner size={"xl"} />
        </Box>
    </VStack>
)
};
export default Loader;