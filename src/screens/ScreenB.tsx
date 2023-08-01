import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export function ScreenB(){
    const {navigate} = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <Text style={{fontSize: 32, fontWeight: 'bold'}}>
               SCREEN B
           </Text>
        </View>
    )
}