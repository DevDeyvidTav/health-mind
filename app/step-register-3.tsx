import { Container } from "@/src/components/container";
import { Button } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StepRegisterActivityLevel() {
    const [activityLevel, setActivityLevel] = React.useState("Beginner");
    const router = useRouter();

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/step-register-2")} className="absolute items-center flex-row gap-1 top- left-4">
                    <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className=" mx-auto text-xl mt-16">
                    Nível de Atividade Física
                </Text>
                <Text className="text-gray-500 mx-auto mt-2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View className="flex mx-auto mt-6 space-y-4 flex-col items-center">
                    <TouchableOpacity onPress={() => setActivityLevel("Beginner")} className={`w-64 justify-center items-center py-4 ${activityLevel === "Beginner" ? "bg-blue-500 text-black" : "bg-white "} duration-300 rounded-full`}>
                        <Text className={`text-xl ${activityLevel === "Beginner" ? "text-black" : ""}`}>Iniciante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivityLevel("Intermediate")} className={`w-64 justify-center items-center py-4 ${activityLevel === "Intermediate" ? "bg-blue-500 text-black" : "bg-white "} duration-300 rounded-full`}>
                        <Text className={`text-xl ${activityLevel === "Intermediate" ? "text-black" : ""}`}>Intermediário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivityLevel("Advance")} className={`w-64 justify-center items-center py-4 ${activityLevel === "Advance" ? "bg-blue-500 text-black" : "bg-white "} duration-300 rounded-full`}>
                        <Text className={`text-xl ${activityLevel === "Advance" ? "text-black" : ""}`}>Avançado</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => router.push("/step-register-4")} className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
