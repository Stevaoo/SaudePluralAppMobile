
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ModuleScreen() {
  const { id } = useLocalSearchParams(); // pega o ID da rota

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Módulo {id}</Text>
    </View>
  );
}
