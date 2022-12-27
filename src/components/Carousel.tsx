/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Avatar, Stack, Button } from '@mui/material';

const Carousel = ({ images }: { images: string[] }) => {
  const [activePhoto, setActivePhoto] = useState(0);

  const handlePhotoChange = (index: number) => {
    setActivePhoto(index);
  };

  return (
    <Stack direction='row' alignItems='flex-start' gap='2rem'>
      <Avatar
        src={images[activePhoto]}
        alt='pet'
        variant='rounded'
        sx={{
          width: 280,
          height: 280,
          borderRadius: '10px',
        }}
      />
      <Stack
        width='50%'
        direction='row'
        flexWrap='wrap'
        gap='0.2rem'
        padding='0'
      >
        {images.map((image, i) => (
          <Button key={i} onClick={() => handlePhotoChange(i)}>
            <img
              src={image}
              alt='pet thumbnail'
              width={128}
              height={128}
              style={{
                borderRadius: '10px',
                border: activePhoto === i ? '2px solid #007fff' : '',
                opacity: activePhoto === i ? '0.6' : '',
              }}
            />
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Carousel;
