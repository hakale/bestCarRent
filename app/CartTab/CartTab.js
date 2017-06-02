import { StackNavigator} from 'react-navigation';
import CartPage from './views/cartPage'
import CheckPage from './views/checkPage'

export default CartStackNavi = StackNavigator(
    {
        CartPage: {
            screen: CartPage
        },
        CHECK_OUT: {
            screen: CheckPage
        }
    },
    {

    }
);
