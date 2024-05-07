import React from 'react';
import { Box, Text, Image, Flex, Avatar } from '@chakra-ui/react';

const TestimonialCard = ({ quote, author, role, imageUrl }) => {
  return (
    <Box bg="gray.800" color="white" p={5} borderRadius="lg" shadow="lg">
      <Text fontStyle="italic" mb={4}>"{quote}"</Text>
      <Flex align="center" mt={4}>
        <Avatar name={author} src={imageUrl} />
        <Box ml={3}>
          <Text fontWeight="bold">{author}</Text>
          <Text fontSize="sm">{role}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;