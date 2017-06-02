import { StackNavigator} from 'react-navigation';
import ProfilePage from './views/profilePage';
import LoginPage from './views/loginPage';
import RegisterPage from './views/registerPage'
import OrderPage from './views/orderPage'
// import {connect} from 'react-redux'
// import {mapStateToProps, mapDispatchToProps} from '../app'
export default ProbStackNavi = StackNavigator(
    {
        ProfilePage: {
            screen: ProfilePage
        },
        LoginPage: {
            screen: LoginPage,
            title: 'Login'
        },
        RegisterPage: {
            screen: RegisterPage
        },
        OrderPage: {
            screen: OrderPage
        },
    },
    {
        headerTitle: 'wrasf'
    }
);
