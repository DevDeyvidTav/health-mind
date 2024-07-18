import { Container } from "@/src/components/container";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Box, ScrollView } from "native-base";
import React from "react";


export default function StepRegisterGoal() {
    const [selectedGoal, setSelectedGoal] = React.useState<any>(null);
    const router = useRouter();

    const goals = [
        { id: 1, label: "Emagrecer", image: require('../assets/images/emagrecer.jpeg') },
        { id: 2, label: "Ganho de Massa", image: require('../assets/images/ganhar-massa.jpeg') },
        { id: 3, label: "Melhorar Alimentação", image: require('../assets/images/melhorar-alimentacao.jpeg') },
        { id: 4, label: "Aumentar Energia", image: require('../assets/images/aumentar-energia.jpeg') },
        { id: 5, label: "Reduzir Estresse", image: require('../assets/images/reduzir-estresse.jpg') },
        { id: 6, label: "Melhorar Qualidade do Sono", image: require('../assets/images/melhorar-sono.jpeg') }
    ];

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/step-register-4")} className="absolute items-center flex-row gap-1 top-0 left-4">
                    <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className="mx-auto text-xl mt-16">
                    Qual é o seu objetivo?
                </Text>
                <Text className="text-gray-500 mx-auto mt-2 text-center">
                    Selecione um objetivo para personalizarmos sua experiência.
                </Text>
                <ScrollView>
                    <View className="flex mx-auto mt-6 space-y-4 flex-col items-center w-[80%]">
                        {goals.map(goal => (
                            <TouchableOpacity key={goal.id} onPress={() => setSelectedGoal(goal.id)} className="w-full mb-4">
                                <Box className={`flex flex-row items-center p-4 rounded-lg ${selectedGoal === goal.id ? 'bg-blue-500' : 'border border-slate-200'}`}>
                                    <Image source={goal.image} alt={goal.label} className="w-16 h-16 mr-4" />
                                    <Text className={`text-xl w-52 ${selectedGoal === goal.id ? 'text-black' : 'text-gray-500'}`}>{goal.label}</Text>
                                </Box>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => router.push("/step-register-6")} className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
