import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { style } from "../styles";

interface IParticipant {
  onClick: () => void;
}

export function Participant(props: IParticipant) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Nome do evento</Text>
      <Text style={style.subtitle}>Sexta, 4 de novembro de 2022</Text>

      <View style={style.formGroup}>
        <TextInput
          style={style.textInput}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          keyboardType="default"
        />

        <TouchableOpacity style={style.button} onPress={() => props.onClick()}>
          <Text style={style.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
