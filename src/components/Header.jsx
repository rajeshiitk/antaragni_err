import React, { Fragment } from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi';
import {  HStack, VStack } from '@chakra-ui/react'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Button pos={"fixed"} top={'4'} left={'4'} 
      colorScheme="purple" p={"0"}
      w={"10"} h={"10"} borderRadius={"full"}
       onClick={onOpen}
       zIndex={'overlay'}
       opacity={'0.8'}>
        <BiMenuAltLeft  size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textTransform={'uppercase'} borderBottom={'2px'} textAlign={'center'} color={'purple.300'}>Antaragni 2K2X</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} >
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/videos'}>After Movies</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/videos?category=free'}>Gallery</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={'/upload'}>Share Memories</Link>
              </Button>
            </VStack>

            <HStack pos={'absolute'}
              bottom={'10'}
              left={'0'}
              justifyContent={'space-evenly'}
              w={'full'}>
              <Button onClick={onClose} colorScheme='purple'>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Fragment>
  );
}

export default Header;