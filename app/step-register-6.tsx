import { Container } from "@/src/components/container";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "native-base";
import React from "react";

export default function StepRegisterWeight() {
    const [weight, setWeight] = React.useState("");
    const router = useRouter();

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/step-register-5")} className="absolute items-center flex-row gap-1 top-0 left-4">
                    <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className="mx-auto text-xl mt-16">
                    Peso
                </Text>
                <Text className="text-gray-500 mx-auto text-center">
                    Informe seu peso para personalizarmos sua experiência.
                </Text>
                <View className="flex mx-auto mt-6 space-y-4 flex-col items-center w-[80%]">
                    <View className="w-full mb-56">
                        <Text className="my-4 w-full text-start">Qual o seu peso?</Text>
                        <Input
                            value={weight}
                            onChangeText={setWeight}
                            placeholder="Ex: 70 kg"
                            placeholderTextColor="#888"
                            keyboardType="numeric"
                            className="text-white "
                            w={{
                                base: "100%",
                                md: "100%"
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Iniciar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
