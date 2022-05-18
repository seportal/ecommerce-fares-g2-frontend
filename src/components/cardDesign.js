import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';


  function CardDesign({product}) {
  return (
    <>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            // mt={-12}
            pos={'relative'}
            // height={'250px'}
            top={'5px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 3,
              left: 0,
              backgroundColor: `URL${product.image}.600`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              // height={230}
              // width={282}
              boxSize='230px'
              objectFit={'cover'}
              src={product.image}
            />
          </Box>
          <Stack pt={5} align={'center'}>
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Brand
            </Text> */}
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {product.tittle}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {product.price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {product.originalPrice}
              </Text>
            </Stack>
            <Text align={'center'} fontSize={'sm'}>
              {product.description} 
            </Text>
            <Text>
              Amount: {product.amount}
            </Text>
          </Stack>
        </Box>
      </Center>
  
    </>
  );
}

export default CardDesign;
