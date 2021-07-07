import { Flex, VStack, Text, Icon, color, Link } from "@chakra-ui/react";
import React from "react";
import { ElementType } from "react";
import { ReactNode } from "react";
import { BsCodeSlash } from "react-icons/bs";
import pallete from "../../../styles/palette";

import { Document, Page } from 'react-pdf';


interface SideBarNavSecitionProps {
    title: string;
    icon: ElementType;
    link?: string;
    onClick?: any
}



export default function SideBarNavItem({ title, icon, link, onClick }: SideBarNavSecitionProps) {

    return (



        <Flex bg={pallete.primary} h='100%' direction='column' justify='center' alignItems='center' color='white'
            _hover={{
                color: 'pink.500',
                cursor: 'pointer',
                
            }}
        >

            <Link  id='IconLink'  href={link} _hover={{
                textDecoration:'none'
            }} >

                <Flex  as='button' id='IconFlex' alignItems='center' p='2' justifyContent='center' flexDir='column' onClick={onClick}>
                    <Icon id='Icon' as={icon} h='40px' w='40px'  />


                    <Text


                        fontWeight='bold'
                        mt='2'
                        

                    >{title}</Text>
                </Flex>
            </Link>



        </Flex>

    )

}
