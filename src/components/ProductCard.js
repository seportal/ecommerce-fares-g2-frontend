import React from 'react'
import { Box, Center, Grid } from '@chakra-ui/react'
import CardDesign from './cardDesign'
import product from './product'

const ProductCard = () => {
  return (
    <Box align="center">
      <Center>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>

          {product.map((product, index) => (
            <CardDesign key={index} product={product} />
          ))}
          


        </Grid>
        
      </Center>
    </Box>
  )
}

export default ProductCard;