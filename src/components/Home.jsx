import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img4 from '../assets/img4.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'

const headingAlign = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%) ",
  textTransform: "uppercase",
  p: "4",
  
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={['2','16']}>
        <Heading textTransform={"uppercase"}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
          color={'purple.300'}>
          Antragni
        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={'center'}
          direction={['column', 'row']}>
          <Image src={img6} h={['40', '300']} filter={'hue-rotate(-20deg)'} borderRadius={"20"} />
          <Text letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={'center'}>
            Antaragni,the cultural festival of IIT Kanpur , is an explosion of cultural flair and creative energy that is characteristic of our national diversity in general, and our institute in particular, defining the objective it aspires to fulfil. Antaragni has grown and evolved over the years into the largest cultural spectacle organised by institute students. The festival attracted a staggering 130,000 attendees and over 25,000,000 viewers. More than anything, Antaragni is a heritage that has been fostering greatness and prowess in talent and culture for over 54 years, and we are happy to host the 55th edition of Antaragni while keeping the flame alive and the fire within each of us roaring.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home


const MyCarousel = () => (
  <Carousel autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    onSwipeMove={true}
  >

    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={"cover"}  />
      <Heading borderRadius={'3xl'} bgColor={"blackAlpha.400"} color={"white"} {...headingAlign} size={ ['xl', '3xl']}>Feel the silence</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={"cover"} />
      <Heading borderRadius={'3xl'} bgColor={"blackAlpha.400"} color={"white"} {...headingAlign} size={ ['xl', '3xl']}>Meet your better self</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={"cover"} />
      <Heading borderRadius={'3xl'} bgColor={"blackAlpha.400"} color={"white"} {...headingAlign} size={ ['xl', '3xl']}>You must do the things you think you cannot do</Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img7} h={'full'} w={'full'} objectFit={"cover"} />
      <Heading borderRadius={'3xl'} bgColor={"blackAlpha.400"} color={"white"} {...headingAlign} size={ ['xl', '3xl']}>Belief creates the actual fact</Heading>
    </Box>

  </Carousel>
);
