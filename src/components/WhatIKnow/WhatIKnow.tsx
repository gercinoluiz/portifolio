import { Avatar, Flex, useBreakpointValue, Text, Icon, useDisclosure, Collapse, Box, Image, SimpleGrid } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"


import React from 'react'


import { FaReact } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdExpandMore } from 'react-icons/md'





export interface WhatIKnowProps {
    icons: IIcons[]
}






const WhatIKnow: React.FC<WhatIKnowProps> = ({ icons }: WhatIKnowProps) => {
    const { isOpen, onToggle } = useDisclosure()




    const isLargeAvatar = useBreakpointValue({
        base: '64',
        lg: '17rem',
        sm: '12rem',
        md: '14rem',

    })

    const isLargeText = useBreakpointValue({
        
        lg: '25px',
        sm: '15px',
        md: '10x',
        

    })


    return (




        <Flex w='60%' minWidth='18rem' p='4' flexDir='column' mt='10' mb='10' justify='center' borderWidth={1} rounded='2xl' boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)' _hover={{
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
        }}>


            <Flex w='100%' id='MainFlex'  alignItems='center' justify='center'>
                <SimpleGrid   columns={[1, 3, 6,]}  justifyContent='center' gap={6}>


                    {
                        icons.map(icon => {

                            return (

                                
                                    <Flex h='40'  minW='90px' flexDir='column' alignItems='center'  justifyContent='center'>
                                        <Image
                                            alt={icon.slug}
                                            boxSize='120px'
                                            objectFit='contain'
                                            src={icon.image}
                                        />

                                        <Text fontSize={isLargeText} mt='2' fontWeight='bold' >
                                            {icon.title}

                                        </Text>
                                        <Flex>


                                            <Text >{icon.level}</Text>


                                        </Flex>
                                    </Flex>
                                
                            )
                        })
                    }


                    {/* ============================================================================================= */}


                    {/* ====================================================================================== */}



                </SimpleGrid>




            </Flex>






        </Flex>


    );
}

export default WhatIKnow;