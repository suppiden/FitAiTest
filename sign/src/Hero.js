import React, { useState, useEffect } from 'react';
import { 
  Flex,
  SimpleGrid,
  Box, 
  Heading,
  Text,
  Button, 
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import './hero.css'

// Hook para determinar si es un dispositivo móvil
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};

const Card = ({ children }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={3}
      textAlign="center"
      bg="white"
      boxShadow="md"
      transition="all 0.3s"
      className="rainbow-border"
      _hover={{
        boxShadow: 'xl',
      }}
    >
      {children}
    </Box>
  );
};

function Hero() {
  const isMobile = useIsMobile(); // Usamos el hook para verificar si estamos en un dispositivo móvil

  const cards = [ // Aquí podrías tener tus datos de las tarjetas en un array o traerlos de una API
    {
      title: 'Basic Plan',
      price: '$9.99',
      description: 'Perfect for individuals just starting out.',
    },
    {
      title: 'Basic Plan',
      price: '$9.99',
      description: 'Perfect for individuals just starting out.',
    },
    {
      title: 'Basic Plan',
      price: '$9.99',
      description: 'Perfect for individuals just starting out.',
    },
    
    // ... más tarjetas
  ];

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      className="hero-container"
    >
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          style={{ width: '100%' }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
            <Card>
              <Heading size='md'>{card.title}</Heading>
              <Text fontSize="4xl" fontWeight="bold" my={4}>
                    {card.price}
                  </Text>
                  <Text>{card.description}</Text>
                <Button mt={4}>Choose Plan</Button>
                            </Card>
          </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SimpleGrid
          columns={3}
          spacing={10}
          p={10}
          w="full"
          maxW="1200px"
          height="80vh"
        >
          {cards.map((card, index) => (
            <Card key={index}>
              <Heading size='md'>{card.title}</Heading>
              <Text fontSize="4xl" fontWeight="bold" my={4}>
                {card.price}
              </Text>
              <Text>{card.description}</Text>
              <Button mt={4}>Choose Plan</Button>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}

export default Hero;