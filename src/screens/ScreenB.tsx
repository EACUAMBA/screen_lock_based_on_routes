import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useScreenGuard} from "../hooks/useScreenGuard";

export function ScreenB(){
    useScreenGuard('screenB')

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text style={{fontSize: 32, fontWeight: 'bold'}}>
               SCREEN B
           </Text>
        </View>
    )
}