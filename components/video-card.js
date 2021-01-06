import Image from 'next/image'
import { Link, Flex, Stack, Heading, Text, chakra } from '@chakra-ui/react'

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
        alt="Workout"
        width="250px"
        height="150px"
        mr={8}
        objectFit="cover"
        src={src}
      />
      <Stack ml={4}>
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
