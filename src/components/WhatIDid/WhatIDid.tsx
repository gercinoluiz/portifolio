import { Flex, useBreakpointValue, Text, Icon, useDisclosure, Collapse, Box, Image, Center, SimpleGrid } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react"


import React from 'react'


import { FaReact } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdExpandMore } from 'react-icons/md'





export interface WhatIDidProps {
    projects: IProjects[]
}






const WhatIDid: React.FC<WhatIDidProps> = ({ projects }: WhatIDidProps) => {

    const { isOpen, onToggle } = useDisclosure()




    const isLargeAvatar = useBreakpointValue({
        base: '64',
        lg: '17rem',
        sm: '12rem',
        md: '14rem',

    })

    const isLargeText = useBreakpointValue({
        base: '2xl',
        lg: '2xl',
        sm: 'md',
        md: 'lx',

    })


    return (







        <Flex w='80%' id='MainFlex' justify='center'>
            <SimpleGrid w='80%' id='SimpleGrid' columns={[1, null, 3]} gap={6}>


                {
                    projects.map(project => {

                        return (

                            <Center key={project.slug} >



                                <Flex mb='10' id='GridItem' maxH='480px' flexDir='column' minW='20rem' alignItems='center' borderWidth={1} rounded='2xl' boxShadow='0 4px 8px 0 rgba(0,0,0,0.2)' _hover={{
                                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
                                }}>
                                    <Image
                                        alt={project.slug}
                                        boxSize='250px'
                                        objectFit='contain'
                                        src={project.image}

                                        align='bottom'
                                        alignItems='flex-end'
                                        
                                        
                                    />

                                    <Text fontSize='22' fontWeight='bold'  mb='4' mt='4'   >
                                        {project.project}

                                    </Text>
                                    <Flex justify='center' maxH='100px' align='center' textAlign='center' p='4'>


                                        <Text>{project.description}</Text>


                                    </Flex>

                                    <Text ml='auto' mr='4' mb='2' fontWeight='bold' color='blue.500' >MORE</Text>
                                </Flex>
                            </Center>
                        )
                    })
                }


                {/* ============================================================================================= */}


                {/* ====================================================================================== */}



            </SimpleGrid>




        </Flex>


    );
}

export default WhatIDid;