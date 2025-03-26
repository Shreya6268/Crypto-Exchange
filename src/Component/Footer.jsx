import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <>
    <Box minH={'48'} w={'full'} bg={'#000000'} px={'16'} py={['16','8']}> 
          <Stack direction={['column','row']} height={'full'} alignItems={'center'}>
               <VStack w={'full'} alignItems={["center",'flex-start']} color={'whiteAlpha.700'}>
                   <Text fontWeight={'bold'} color={'(255,255,255,0.9)'}>About us</Text>
                   <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>We are the best crypto provider at a very cheap cost.</Text>
               </VStack>
               <VStack w={'full'} alignItems={["center",'flex-end']}>
                  <Avatar boxSize={'28'} mt={["4","0"]}></Avatar>
                  <Text color={'whiteAlpha.700'}>Our Founder</Text>
               </VStack>
          </Stack>
    </Box>
   </>
  )
}

export default Footer