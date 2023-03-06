import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import antragni21 from '../assets/antragni21.mp4'
import antragni19 from '../assets/antragni19.mp4'
import antragni18 from '../assets/antragni18.mp4'
import antragni17 from '../assets/antragni17.mp4'
const Videos = () => {
    const VideosArr = [
        antragni19,
        antragni18,
        antragni17,

    ];
    const [videoSrc, setVideoSrc] = useState(antragni21);
    
    return (
        <Stack direction={['column', 'row']} minH={'100vh'}>
            <VStack w={'full'}>
                <video
                    controls
                    controlsList='nodownload'
                    src={videoSrc}
                    style={{ width: '100%' }}
                >
                </video>
                <VStack alignItems={'flex-start'} p={['2', '8']} overflow={"auto"}>
                    <Heading textTransform={'uppercase'}>Antragni IITK Official AfterMovie</Heading>
                    <Text>Antaragni - the annual cultural festival of IIT Kanpur - is one of the
                     largest and most anticipated festivals throughout Asia. Translated literally to 'The Fire Within',
                      everyone associated will feel inside. Continuing its rich legacy of 55 years, Antaragni combines the 
                      zeal and desire of the students of IIT Kanpur and across India to showcase and celebrate their amazing 
                      cultural talent as it has 
                    evolved to be a platform for global cultural interaction over the years. 
                    It has been the touchstone of India's college cultural heritage.</Text>
                </VStack>
            </VStack>
            <VStack w={['full', 'xl']} alignItems={'stretch'}
                p={['2', '8']} overflowY={'auto'} >
                <Button
                variant={'ghost'}
                colorScheme={"purple"}
                onClick={() => setVideoSrc(antragni21)}
                textTransform={'uppercase'}>
                Antragni 21
            </Button>

                {
                    VideosArr.map((item, index) => (
                        <Button
                            variant={'ghost'}
                            colorScheme={"purple"}
                            onClick={() => setVideoSrc(item)}
                            textTransform={'uppercase'}>
                            Antragni {19 - index}
                        </Button>
                    ))
                }
            </VStack>
        </Stack>

    );
}

{/*const Videos = () => { */ }
export default Videos