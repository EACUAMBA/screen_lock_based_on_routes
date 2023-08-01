import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export function ScreenA(){
    const {navigate} = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 32}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                SCREEN A
            </Text>
            <Button
                title={'Go to SCREEN B'}
                onPress={() => navigate('screenB')}
                />
        </View>
    )
}