import { Box, Stack, VStack,HStack, Heading, Button, Input , Text} from '@chakra-ui/react';
import React from 'react';
import {AiOutlineSend, AiFillInstagram, AiFillFacebook, AiFillGithub} from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaQuora } from 'react-icons/fa';
import './animation.css';
const Footer = () => {      
  return (
    <Box bgColor={'blackAlpha.900'} minH={'30'} p={['2','8']} color={'white'} >
      <Stack direction={['column', 'row']} >
        <VStack alignItems={'stretch'} px={'4'} w={'full'}>
          <Heading pt={'4'} size="md" textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to get updates
          </Heading> 
          <HStack borderBottom={'2px solid white'} py="2">
          <Input placeholder='Enter Email here...'
           border={"none"}
           borderRadius="none"
           outline={'none'} 
           focusBorderColor={'transparent'}
           ></Input>
          <Button 
           p={'0'}
           colorScheme={'purple'}
           variant={'ghost'}
           borderRadius={'0 20px 20px 0'}
           >
           <AiOutlineSend size={'20'} />
          </Button>
          </HStack>
        </VStack>
        <VStack
         w={'full'}
         borderLeft={['none', '1px solid white']}
         borderRight={['none', '1px solid white']}>
         <Heading color={'purple.300'} pt={'4'} size={'md'} textTransform={'uppercase'} textAlign={'center'}>
         Antragni
         </Heading>
         <Text>all rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
         <Heading pt={'4'} size={'md'} textTransform={'uppercase'} _hover={{color:'purple', filter:'invert(1)', transition:'0.2s ease-out'}}>
         Social Media
         </Heading>
         <HStack id='social-link'>
         <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.3s' }} >
         <a href='https://www.instagram.com/rajeshiitk/' target="blank"  >< FaInstagram  color='purple' size={'32'}/> </a>
         </Button>
         <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.5s' }} >
         <a href='https://www.facebook.com/rajesh1iitk'  target="blank"> < FaFacebook  color='purple' size={'32'}/></a>
         </Button>
         <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} style={{ animationDelay: '0.7s' }} >
         <a href='https://github.com/rajeshiitk'   target="blank" >< AiFillGithub  color='purple' size={'32'}/></a>
         </Button>
         <Button variant={'ghost'} w='12' h={'12'} borderRadius={'50%'} _hover={{filter:'invert(1)'}} transition={'0.2s ease-out'} _active={{filter:'invert(1)'}} style={{ animationDelay: '0.9s' }} >
         <a href='https://www.quora.com/profile/Rajesh-Choudhary-1160'  target="blank" >< FaQuora color='purple' size={'32'}/></a>
         </Button>
         </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
