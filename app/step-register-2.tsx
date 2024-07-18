import { Container } from "@/src/components/container";
import { Button } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StepRegisterHeight() {
    const [height, setHeight] = React.useState(165);
    const router = useRouter();
    const handleIncrease = () => {
        setHeight(prevHeight => prevHeight + 1);
    };

    const handleDecrease = () => {
        setHeight(prevHeight => prevHeight - 1);
    };

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/step-register-1")} className="absolute items-center flex-row gap-1 top-0 left-4">
                <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className="text-black mx-auto text-xl mt-16">
                    Qual sua altura?
                </Text>
                <Text className="text-gray-500 mx-auto mt-2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View className="flex mx-auto mt-6 items-center">
                    <Text className="text-black text-6xl">{height}</Text>
                    <Text className="text-black text-xl">Cm</Text>
                </View>
                <View className="flex mx-auto items-center mt-4">
                    <View className="bg-blue-500 h-48 w-16 rounded-md flex items-center justify-center">
                        <TouchableOpacity onPress={handleIncrease}>
                            <Text className="p-4 text-3xl">+</Text>
                        </TouchableOpacity>
                        <View className="my-2">
                            <Text className=" text-xl">{height}</Text>
                        </View>
                        <TouchableOpacity onPress={handleDecrease}>
                            <Text className=" p-4 text-3xl">-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.push("/step-register-3")} className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
