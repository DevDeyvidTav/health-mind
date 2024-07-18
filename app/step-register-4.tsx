import { Container } from "@/src/components/container";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Icon, Input, Pressable } from "native-base";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function StepRegisterFoodHabits() {
    const [mealsPerDay, setMealsPerDay] = React.useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = React.useState("");
    const [favoriteFoods, setFavoriteFoods] = React.useState("");
    const router = useRouter();

    return (
        <Container>
            <View className="justify-between flex-1 pb-20">
                <TouchableOpacity onPress={() => router.push("/step-register-3")} className="absolute items-center flex-row gap-1 top-0 left-4">
                    <AntDesign name="arrowleft" size={18} color="#2995c3" />
                    <Text className="text-blue-500">
                        Voltar
                    </Text>
                </TouchableOpacity>
                <Text className=" mx-auto text-xl mt-16">
                    Hábitos Alimentares
                </Text>
                <Text className="text-gray-500 mx-auto mt-2 text-center">
                    Informe seus hábitos alimentares para melhorarmos sua experiência.
                </Text>
                <View className="flex mx-auto mt-6 space-y-4 flex-col items-center w-[80%]">
                    <View className="w-full">
                        <Text className=" my-4 w-full text-start">Quantas refeições você costuma fazer por dia?</Text>
                        <Input
                            value={mealsPerDay}
                            onChangeText={setMealsPerDay}
                            placeholder="Ex: 3"
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                            placeholderTextColor="#888"
                            className=""
                        />
                    </View>
                    <View className="w-full mt-4">
                        <Text className=" my-4 w-full text-start">Quais suas restrições alimentares?</Text>
                        <Input
                            value={dietaryRestrictions}
                            onChangeText={setDietaryRestrictions}
                            placeholder="Ex: Lactose, Glúten"
                            placeholderTextColor="#888"
                            className=" "
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                        />
                    </View>
                    <View className="w-full mt-4">
                        <Text className=" my-4 w-full text-start">Alimentos favoritos</Text>
                        <Input
                            value={favoriteFoods}
                            onChangeText={setFavoriteFoods}
                            placeholder="Ex: Frutas, Verduras"
                            placeholderTextColor="#888"
                            cursorColor={"white"}
                            className=""
                            w={{
                                base: "100%",
                                md: "25%"
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.push("/step-register-5")} className="w-32 justify-center items-center h-12 rounded-lg mx-auto bg-blue-500 mt-8">
                    <Text className="text-white">
                        Continuar
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
}
