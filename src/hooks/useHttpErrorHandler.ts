import { AxiosInstance } from 'axios';
import { useEffect, useState } from 'react';

type ErrorType = string | undefined | null;

const useHttpErrorHandler = (
  axios: AxiosInstance
): [ErrorType, () => void | undefined] => {
  const [error, setError] = useState<ErrorType>();

  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null);
    console.log('err null');
    return req;
  });

  const resInterceptor = axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err) {
        console.log(err.message);
        setError(err.message);
        console.log(!!err.message);
      }
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
    // eslint-disable-next-line
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    console.log('err null reset');
    setError(null);
  };

  return [error, errorConfirmedHandler];
};

export default useHttpErrorHandler;
