import React, { ComponentType, Fragment, PropsWithChildren } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance } from 'axios';
import useHttpErrorHandler from '../../hooks/useHttpErrorHandler';

function withErrorHandler(
  WrappedComponent: ComponentType,
  axios: AxiosInstance
) {
  return (props: PropsWithChildren<any>) => {
    const [error, errorConfirmedHandler]: [
      string | undefined | null,
      () => void | undefined
    ] = useHttpErrorHandler(axios);

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
