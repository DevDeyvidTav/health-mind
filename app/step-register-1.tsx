import { Container } from "@/src/components/container";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function StepRegister1() {
    const [gender, setGender] = React.useState("male");
    const router = useRouter();

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/")} className="absolute items-center flex-row gap-1 top-0 left-4">
                    <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className="text-black mx-auto text-xl mt-16">
                    Qual seu Gênero
                </Text>
                <View className="flex mx-auto mt-6 space-y-4 flex-col items-center">
                    <TouchableOpacity onPress={() => setGender("male")} className={`w-24 justify-center items-center ${gender === "male" ? "bg-blue-500" : "bg-zinc-400"} duration-300 rounded-full h-24`}>
                        <AntDesign name="man" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-white mx-auto">
                        Masculino
                    </Text>
                    <TouchableOpacity onPress={() => setGender("female")} className={`w-24 justify-center items-center ${gender === "female" ? "bg-blue-500" : "bg-zinc-400"} duration-300 rounded-full h-24`}>
                        <AntDesign name="woman" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="text-white mx-auto">
                        Feminino
                    </Text>
                </View>
                <TouchableOpacity onPress={() => router.push("/step-register-2")} className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
