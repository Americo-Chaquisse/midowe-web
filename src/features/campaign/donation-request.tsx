import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function DonationRequest() {
  return (
    <>
      <Stack alignItems={'start'} mr={20}>
        <Text>
          Pretendido: <b>300.000 MT</b>
        </Text>
        <Text>
          Alcançado: <b>180.270 MT (57%)</b>
        </Text>
        <Text>
          Número de doações: <b>56</b>
        </Text>
        <Text>
          Deadline: <b>2022-06-30</b>
        </Text>

        <Divider marginTop={'45px !important'} />

        <FormControl marginTop={'15px !important'}>
          <FormLabel htmlFor="paymentMethod">Método de pagamento</FormLabel>
          <Select id="paymentMethod" placeholder="Seleccione">
            <option value="option1">M-Pesa</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="paymentMethod">Quanto pretende doar</FormLabel>
          <ButtonGroup size="md" isAttached variant="outline">
            <Button variant={'solid'} mr="-px">
              100 MT
            </Button>
            <Button mr="-px">500 MT</Button>
            <Button mr="-px">1000 MT</Button>
            <Button mr="-px">Outro</Button>
          </ButtonGroup>
        </FormControl>

        <Button
          marginTop={'35px !important'}
          rounded={'full'}
          bg={'purple.400'}
          color={'white'}
          _hover={{
            bg: 'purple.600',
          }}
          size="lg"
          px={10}
          rightIcon={<BiRightArrowAlt style={{ marginLeft: '15px' }} />}
        >
          Doar 100 MT
        </Button>
      </Stack>
    </>
  );
}
