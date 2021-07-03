import { Flex, VStack, Text } from '@chakra-ui/react'
import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';


export interface MenuItemsProps {

}

const MenuItems: React.FC<MenuItemsProps> = ({...children}) => {
    return (
        <Flex bg='blue' w='100%' h='32' direction='column' justify='center' alignItems='center'>
            <BsCodeSlash size={42} />
            <Text>
                
            </Text>
        </Flex>
    );
}

export default MenuItems;