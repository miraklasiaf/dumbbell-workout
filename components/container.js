import NextLink from 'next/link'
import { Flex, Box, Icon } from '@chakra-ui/core'

const Container = ({ children }) => (
  <>
    <Box bg="#FBFBFB" mb={12}>
      <Box
        background="linear-gradient(270deg, #f50a81 25.28%, #9d09db 59.7%, #f722c9 97.75%)"
        w="full"
        h="15px"
      />
    </Box>
    {children}
  </>
)

export default Container
