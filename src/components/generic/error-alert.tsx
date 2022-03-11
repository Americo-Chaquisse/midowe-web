import { Alert, AlertIcon } from '@chakra-ui/react';

type ErrorAlertProps = {
  message?: string;
};
export function ErrorAlert({
  message = 'Erro ao processar o pedido',
}: ErrorAlertProps) {
  return (
    <Alert status="error">
      <AlertIcon />
      {message}
    </Alert>
  );
}
