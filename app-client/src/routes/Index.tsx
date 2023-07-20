import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from './Login.routes';

export default () => {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}