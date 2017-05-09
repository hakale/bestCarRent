import { StackNavigator} from 'react-navigation';
import ProfilePage from './views/profilePage';
import LoginPage from './views/loginPage';
import RegisterPage from './views/registerPage'
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
        }
       
    },
    {
        headerTitle: 'wrasf'
    }
);
