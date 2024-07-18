import { Container } from "@/src/components/container";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Icon, Input, Pressable } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const router = useRouter()
    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text className="text-blue-500 font-semibold w-max mx-auto">Registrar</Text>
                <Text className="text-black font-bold w-max mx-auto mt-12">
                    Crie sua conta
                </Text>
                <Text className="px-6 text-zinc-400 text-xs text-center mt-4">
                    Preencha os campos abaixo para criar sua conta.
                </Text>
                <View className="w-[80%] items-center mx-auto mt-4">
                    <Text className="text-black my-4 w-full text-start">Nome</Text>
                    <Input className="w-max mx-auto" w={{
                        base: "100%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Digite seu nome" />

                    <Text className="text-black my-4 w-full text-start">Email</Text>
                    <Input className="w-max mx-auto" w={{
                        base: "100%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder="Digite seu email" />

                    <Text className="text-black my-4 w-full text-start">Senha</Text>
                    <Input w={{
                        base: "100%",
                        md: "25%"
                    }} type={showPassword ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Icon as={<MaterialIcons name={showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>} placeholder="Digite sua senha" />

                    <Text className="text-black my-4 w-full text-start">Confirme sua Senha</Text>
                    <Input w={{
                        base: "100%",
                        md: "25%"
                    }} type={showConfirmPassword ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Icon as={<MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>} placeholder="Confirme sua senha" />

                    <Text className="text-black my-4 w-full text-start">Telefone</Text>
                    <Input className="w-max mx-auto" w={{
                        base: "100%",
                        md: "25%"
                    }} InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />} placeholder="Digite seu telefone" />

                    <TouchableOpacity onPress={() => router.push("/step-register-1")} className="bg-blue-500 border border-slate-200 items-center justify-center rounded-lg px-16 h-12 mt-8">
                        <Text className="text-white">Registrar</Text>
                    </TouchableOpacity>

                    <Text className="text-zinc-400 mt-8">Ou</Text>

                    <TouchableOpacity className="bg-white border border-slate-200 items-center justify-center rounded-lg px-16 h-12 mt-4">
                        <View className="flex-row items-center">
                            <Icon as={<AntDesign name="google" />} size={5} mr="2" color="black" />
                            <Text className="text-black">Registrar com Google</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className=" my-8" onPress={() => router.push("/")}>
                        <Text className="text-zinc-400">
                            Já possui uma conta? <Text className="text-blue-500">Entre agora!</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </Container>
    );
}
