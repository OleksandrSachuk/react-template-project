import * as React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const isAuth = true;

const PrivatePage: React.FunctionComponent<PrivateRouteProps> = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props: Object) => isAuth
            ? <Component { ...props } />
            : <Redirect to="/" />
        }
  />);

export default PrivatePage;
