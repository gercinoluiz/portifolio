import { VStack, Grid, Box, Icon, Flex, Divider, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, GridItem } from "@chakra-ui/react";
import React from "react";
import { BsCodeSlash, BsListCheck } from "react-icons/bs";
import { SiAboutDotMe } from "react-icons/si";
import { AiOutlineRead } from "react-icons/ai";
import { RiFilePaper2Line } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import pallete from "../../../styles/palette";


import SideBarNavItem from "./SideBarNavItem";



export default function SideBarNavStack() {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (


        <VStack h='100%'  >

            <SideBarNavItem icon={SiAboutDotMe} title='Who I am' link='#WhoIam' />


            <SideBarNavItem icon={BsCodeSlash}  title='What I know' link='#WhatIKnow' />


            <SideBarNavItem icon={BsListCheck}  title='I what I did' link='#WhatIDid' />

            <SideBarNavItem icon={RiFilePaper2Line}  title='CV' link='https://prismic-io.s3.amazonaws.com/gercino-portifolio/4f6cfa50-388f-433f-8715-482f9cd29c05_cv.pdf' />



            <SideBarNavItem icon={RiMailSendFill} title='Contac me' onClick={onOpen} />

            <Divider />

            <Grid templateColumns="repeat(2, 1fr)" w='100%' gap={2} >
                <Flex as='a' target='_blank' href='https://www.linkedin.com/in/gercino-luiz-509405b6/' mt='5' w="100%" color='white' justifyContent='center' h="10" bg={pallete.primary} >
                    <Icon w='32px' h='32px' as={ImLinkedin} />
                </Flex>

                <Flex mt='5' as='a' target='_blank' href='https://github.com/gercinoluiz' color='white' w="100%" justifyContent='center' h="10" bg={pallete.primary} >
                    <Icon w='32px' h='32px' as={FaGithub} />
                </Flex>



            </Grid>


            {/* This returns what the modal thing */}

            <Flex>


                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Get in Contact</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex>
                                <Grid templateColumns="repeat(2, 1fr)" w='100%' gap={2}>
                                    <GridItem>
                                        <Input placeholder='Name' />
                                    </GridItem>
                                    <GridItem>
                                        <Input placeholder='E-mail' />

                                    </GridItem>

                                    <GridItem colSpan={2}>
                                        <Input placeholder='Message' h='28' borderRadius={8} />

                                    </GridItem>

                                </Grid>
                            </Flex>
                          
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme="blue" >Message me</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>

        </VStack>
    )

}
