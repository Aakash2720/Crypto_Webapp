import { Alert ,AlertIcon } from "@chakra-ui/react";
import react from "react";

const ErrorComponents =({message})=>{
    return (
        <Alert  
        status="error"
        position ={"fixed"}
        bottom={"4"}
        left={"50%"}
        w ={"container.lg"}
        transform={"translateX(-50%)"}>
        <AlertIcon />
        {message}
        </Alert>
    )
};
export default ErrorComponents;