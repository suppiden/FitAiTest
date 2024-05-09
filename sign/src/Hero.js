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
      p={5}
      textAlign="center"
      bg="black"
      color={'#6B7280'}
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
  const priceFontSize = isMobile ? "6xl" : "7xl"; // Tamaño dinámico del precio
  const priceColor = "white"; // Nuevo color para el precio

  const cards = [ // Aquí podrías tener tus datos de las tarjetas en un array o traerlos de una API
    {
      title: 'Basic Plan',
      price: '$9.99',
      description: 'Perfect for individuals just starting out.',
    },
    {
      title: 'Premium Plan',
      price: '$19.99',
      description: 'Ideal para small teams and projects.',
    },
    {
      title: 'Pro Plan',
      price: '$29.99',
      description: 'Best for growing businesses and professionals.',
    },
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
                <Heading size='md' color={'white'} mb={4}>{card.title}</Heading>
                <Text fontSize={priceFontSize} fontWeight="bold" my={6} color={priceColor}>
                  {card.price}
                </Text>
                <Text mb={6}>{card.description}</Text>
                <Button mt={4} bg={'#22c55e'}>Choose Plan</Button>
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
              <Heading size='md' mb={4}>{card.title}</Heading>
              <Text fontSize={priceFontSize} fontWeight="bold" my={6} color={priceColor}>
                {card.price}
              </Text>
              <Text mb={6}>{card.description}</Text>
              <Button mt={4} bg={'#22c55e'}>Choose Plan</Button>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
}

export default Hero;

