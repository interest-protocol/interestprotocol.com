import { FC } from 'react';

import { Button } from '@/components/Button';
import SquarePlus from '@/components/svg/square-plus';

const CreatePoolButton: FC = () => (
  <Button
    px="0.75rem"
    py="0.5rem"
    width="100%"
    bg="#B4C5FF"
    variant="filled"
    fontSize="1rem"
    color="#002A78"
    fontWeight="600"
    lineHeight="1rem"
    borderRadius="0.5rem"
    maxWidth="10.125rem"
    textTransform="capitalize"
    nHover={{
      transition: 'background-color 0.5s ease-in-out',
      background: '#8FA7FF',
    }}
  >
    Create Pool
    <SquarePlus maxWidth="1rem" maxHeight="1rem" width="100%" />
  </Button>
);

export default CreatePoolButton;
