import { Flex, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import SideBarNavStack from "./SideBarNavStack";
import pallete from "../../../styles/palette";



export default function SideBar() {

    

    return (

        <Flex direction='column' as='aside' h='100%' position='fixed' w='5%' minW='6rem' bg={pallete.primary}>

            <SideBarNavStack />

        </Flex>

    )

}
