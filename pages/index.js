import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import Container from '@/components/container'
import VideoCard from '@/components/video-card'
import { workoutData } from '@/data/workout'

const HeroSection = () => (
  <Flex justify="center" direction="column" bg="#FBFBFB">
    <Container>
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m={['0 auto', null, '0 auto 4rem auto']}
        maxWidth="4xl"
        p={8}
      >
        <Flex direction="column" justify="flex-start" align="flex-start" maxW="4xl">
          <Heading letterSpacing="tight" mb={4} as="h1" size="2xl" fontWeight="bold">
            5 Day Dumbbell Workout Split
          </Heading>
          <Text color="gray.700" mb={4} fontSize="lg">
            This 5 day dumbbell workout program only requires dumbbells and is perfect for
            those looking to build lean muscle mass at home or on the go!
          </Text>
          <Button
            as="a"
            href="#workout-overview"
            fontWeight="bold"
            h="2.5rem"
            mr={1}
            size="md"
            bg="gray.800"
            color="white"
            _hover={{ bg: 'black' }}
          >
            Workout Now →
          </Button>
        </Flex>
      </Stack>
    </Container>
  </Flex>
)

const DataTabs = ({ data }) => (
  <Tabs w="full" isLazy variant="soft-rounded" colorScheme="blue">
    <TabList>
      {data.map((tab, index) => (
        <Tab key={index}>{tab.label}</Tab>
      ))}
    </TabList>
    <TabPanels>
      {data.map((tab, index) => (
        <TabPanel p={4} mt={8} key={index}>
          <Flex
            key={index}
            direction="column"
            justify="flex-start"
            align="flex-start"
            w="full"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h2"
              size="lg"
              fontWeight="bold"
              id="workout-overview"
            >
              {tab.description}
            </Heading>
            {tab.exercises.map((exercise, index) => (
              <Stack mt={8} spacing={8} key={index}>
                <VideoCard
                  title={exercise.title}
                  length={exercise.length}
                  src={exercise.src}
                  href={exercise.href}
                />
              </Stack>
            ))}
          </Flex>
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>
)

export default function Index() {
  return (
    <Box as="main">
      <HeroSection />
      <Flex justify="center" direction="column">
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          w="full"
          maxW="3xl"
          mt={[4, 8, 16]}
          p={4}
        >
          <DataTabs data={workoutData} />
        </Stack>
      </Flex>
    </Box>
  )
}
