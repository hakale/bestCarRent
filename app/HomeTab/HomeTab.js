import { StackNavigator} from 'react-navigation';
import HomePage from './views/homePage';
import DetailPage from './views/detailPage';
export default HomeStackNavi = StackNavigator(
    {
        HOME: {
            screen: HomePage
        },
        DETAIL: {
            screen: DetailPage
        },
    },
    {

    }
);
