import './App.css';
// import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { getCurrentUserData } from './Redux/User/user-operations'
import Navigation from './Components/Navigation/Navigation'
import Container from './Components/Container/Container'
import PrivateRoute from './Components/PrivateRoute'
import PublickRoute from './Components/PublickRoute'

const HomeView = lazy(() => import('./Components/HomeView/HomeView'))
const Form = lazy(() => import('./Components/Form/Form'))
const Filter = lazy(() => import('./Components/Filter/filter'))
const ContactList = lazy(() => import('./Components/Contacts/ContactList'))
const Login = lazy(() => import('./Components/Login/Login'))
const Registration = lazy(() => import('./Components/Registration/Registration'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    
    dispatch(getCurrentUserData())

}, [dispatch]);

  return (
    <Container>
      <Navigation />
      <Switch>
        <Suspense fallback={'Загрузка...'}>
          <PublickRoute path='/' exact>
            <HomeView />
          </PublickRoute>
          <PrivateRoute path='/contacts'>
            <Form />
            <Filter />
            <ContactList />
          </PrivateRoute>
          <PublickRoute restrickted path={'/login'}>
            <Login />
          </PublickRoute>
          <PublickRoute restrickted path='/register'>
            <Registration />
          </PublickRoute>
        </Suspense>
      </Switch>
    </Container>
  );
};

export default connect()(App);

// App.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired
//   }))
// };
