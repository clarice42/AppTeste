import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Main from "./pages/main";
import Product from "./pages/product";

const AppNavigator = createStackNavigator({
    Main,
    Product,
});

export default createAppContainer(AppNavigator);
