import React, { useState } from 'react';

import { Box, Flex, Icon, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import SideBar from '../components/SideBar'
import WhatIKnow from '../components/WhatIKnow/WhatIKnow'
import WhoIam from '../components/WhoIam/WhoIam'
import { getPrismicClient } from '../components/services/prismic'
import WhatIDid from '../components/WhatIDid/WhatIDid'
import ContactMe from '../components/ContactMe/ContactMe';

import { BiMenu } from 'react-icons/bi'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"






export default function Home({ icons, projects }: ICMSProps) {

  const isSM = useBreakpointValue({
    base: false,
    sm: true
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex h='100vh'  w='100hw' direction='column'>


      <Flex h='100%' w='100%' >

        {



          isSM ? (
            <>
              <SideBar />


            </>
          ) : (

            <>
              <Icon h='12' w='12' position='absolute' onClick={onOpen} as={BiMenu} />

              
                <Drawer


                  isOpen={isOpen}
                  placement='left'
                  onClose={onClose}
                  size='full'
                  


                >
                  <DrawerOverlay onClick={onClose} />
                  <DrawerContent bg='transparent' >
                  <DrawerCloseButton color='white' textDecoration='none' />



                    <SideBar />



                  </DrawerContent>

                </Drawer>

              
            </>
          )


        }



        <Flex w='100%' direction='column' alignItems='center'

        >



          <WhoIam />
          <Text fontSize='28' fontWeight='bold' mt='8' id='WhatIKnow' >What I Know</Text>
          <WhatIKnow icons={icons} />
          <Text fontSize='28' fontWeight='bold' mt='8' id='WhatIDid' >What I Did</Text>
          <WhatIDid projects={projects} />
          <ContactMe />


        </Flex>
      </Flex>



    </Flex>
  )
}



//============================ Thats what I return to the component using getStaticProps

export const getStaticProps: GetStaticProps = async () => {

  const prismic = getPrismicClient()

  const responseIcons = await prismic.query(Prismic.predicates.at('document.type', 'knowladgeicon'))

  const responseProjects = await prismic.query(Prismic.predicates.at('document.type', 'myprojects'))


  // console.log(JSON.stringify(responseProjects, null, 2))


  const icons = responseIcons.results.map(icon => {

    return {
      slug: icon.uid,
      title: icon.data.icon[0].text,
      image: icon.data.image.url ? icon.data.image.url : '',
      level: icon.data.level[0].text
    }
  })

  const projects = responseProjects.results.map(project => {

    return {
      slug: project.uid,
      project: project.data.project[0].text,
      image: project.data.image.url ? project.data.image.url : '',
      description: project.data.description[0].text,
      link: project.data.link
    }
  })


  // console.log({ projects })

  return {
    props: {
      icons,
      projects
    },
    revalidate: 60 * 30 //Em seconds
  }
}



