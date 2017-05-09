import { StackNavigator} from 'react-navigation';
import HomePage from './views/homePage';
import DetailPage from './views/detailPage';
import CheckOutPage from './views/checkPage'
export default HomeStackNavi = StackNavigator(
    {
        HOME: {
            screen: HomePage
        },
        DETAIL: {
            screen: DetailPage
        },
        CHECK_OUT: {
            screen: CheckOutPage
        }
    },
    {

    }
);
