import { Link, Flex, Box, Stack, Heading, Text, Image } from '@chakra-ui/core'

const VideoCard = ({ title, length, src, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
    {...rest}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Image
        w="250px"
        h="150px"
        mr={8}
        objectFit="cover"
        src={src}
        fallbackSrc="https://via.placeholder.com/150"
        borderRadius={8}
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
)

export default VideoCard
