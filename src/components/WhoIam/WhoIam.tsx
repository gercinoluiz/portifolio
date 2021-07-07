import { Avatar, Flex, useBreakpointValue, Text } from '@chakra-ui/react';

import React from 'react'

export interface WhoIamProps {

}




const WhoIam: React.FC<WhoIamProps> = () => {


    const isLargeAvatar = useBreakpointValue({
        base: '10rem',
        lg: '20rem',
        sm: '10rem',
        md: '15rem',
        xs:'10rem'

    })

    const isLargeText = useBreakpointValue({
        base: '1rem',
        lg: '2rem',
        sm: '1rem',
        md: '2',

    })


    return (
        <Flex
            direction='column'
            
            alignItems='center'
            w='100%'>

            <Flex justify='center' w='100%'  flexDirection='column' align='center'>
                <Avatar
                    id='WhoIam'
                    name="Gercino Luiz"
                    w={isLargeAvatar}
                    h={isLargeAvatar}
                    mt='10'
                    borderWidth={1}
                    borderColor='gray.300'
                    src="https://avatars.githubusercontent.com/u/59139354?v=4"
                />

                <Flex ml='4' mt='6' mb='10' textAlign='center' fontSize={isLargeText}  direction='column' >
                    <Text direction='row'  >
                        Hello, I'm <Text as='span' fontWeight='bold'>Gercino</Text> <Text as='span' fontWeight='bold' color='pink.500'>L</Text>uiz.


                    </Text>

                    <Text fontSize={isLargeText} >
                        N<Text as='span' fontSize={isLargeText} fontWeight='bold' color='pink.500'>o</Text>w I'm a Full-Stack De<Text as='span' fontWeight='bold' color='pink.500'>v</Text>eloper
                    </Text>

                    <Text fontSize={isLargeText}>
                        I'll chang<Text as='span' fontWeight='bold' color='pink.500'>e</Text> the world through my code 😎

                    </Text>



                </Flex>
            </Flex>




            <Flex fontSize={isLargeText} mt='5' w='85%' maxW='60rem'>
                <Text as='p' lineHeight='8' textAlign='center'>
                    A learning lover, who wants to change the world somehow and make other's lives better through my code. I've always sought jobs and challenges that can make my work and life meaningful. I love people and I understand they are the most important asset of a corporation so that I've been working hard on my soft skills to be prepared to work alongside any kind of people. With this in mind, I think I can achieve any goal in my life.
                </Text>
            </Flex>
        </Flex>
    );
}

export default WhoIam;