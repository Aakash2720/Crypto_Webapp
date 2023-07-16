import react, { useEffect, useState } from "react";
import { server } from '../index'
import axios from "axios";
import Loader from "./Loader";
import { Container,Button, Heading, HStack, Image, VStack, RadioGroup,Radio } from "@chakra-ui/react";
import ErrorComponents from "./ErrorComponents";
import CoinCard from "./CoinCard";
const Coins = () => {
    const [coin, setCoin] = useState([]);
    const [loading, setLoad] = useState(true);
    const [error, setError] = useState(false)
    const [page ,setPage] =useState(1);
    const [currency ,setCurrency] =useState("inr");
    const currencySymbol =
        currency ==="inr"?"₹":"$";
    const changePage=(page)=>{
        setPage(page);
        setLoad(true);
    }
    const btn =new Array(132).fill(1);
    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

                setCoin(data);
                console.log(data);
                setLoad(false);
            } catch (error) {
                setLoad(false)
                setError(true)
            }
        }
        fetchCoin()
    }, [currency ,page])

    if (error)
        return <ErrorComponents  message={"Error while Fetching Coins"}/>
    return (
        <Container maxW={"container.xl"}>
            {loading ? <Loader /> : (
                <>
                <RadioGroup value ={currency} onChange={setCurrency}>
                    <HStack p={"7"} spacing={"8"}>
                        <Radio value ={"inr"}>INR</Radio>
                        <Radio value ={"usd"}>USD</Radio>
                    </HStack>
                </RadioGroup>
                
                <HStack wrap="wrap">
                    {coin.map((i) => (
                        <CoinCard
                            id={i.id}
                            key={i.id}
                            name={i.name}
                            img={i.image}
                            price={i.current_price}
                            symbol={i.symbol}
                            url={i.url}
                            currencySymbol={currencySymbol} />
                    ))}
                </HStack><HStack w={"full"}  overflowX={"auto"} p={"8"}>
                {
                    btn.map((item ,index) => (
                        <Button 
                        bgColor={"blackAlpha.900"}
                        color={"red"}
                    onClick={()=>changePage(index+1)}>{index +1}</Button>
                    ))
                }
                    </HStack></>
            )}
        </Container>
    )
};

export default Coins;