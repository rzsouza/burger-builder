import React, {
  ComponentType,
  Fragment,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance } from 'axios';

type ErrorType = string | undefined | null;

function withErrorHandler(
  WrappedComponent: ComponentType,
  axios: AxiosInstance
) {
  return (props: PropsWithChildren<any>) => {
    const [error, setError] = useState<ErrorType>(null);

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
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      console.log('err null reset');
      setError(null);
    };

    return (
      <Fragment>
        <Modal show={!!error} modalClosed={errorConfirmedHandler}>
          {error}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
}

export default withErrorHandler;
