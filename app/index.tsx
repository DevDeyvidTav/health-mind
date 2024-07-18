import { Container } from "@/src/components/container";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Icon, Input, Pressable } from "native-base";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const [show, setShow] = React.useState(false);
    const router = useRouter()
    return (
        <Container>
            <Text className="text-blue-500 font-semibold w-max mx-auto">Login</Text>
            <Text className=" font-bold w-max mx-auto mt-12">
                Bem vindo(a)
            </Text>
            <Text className="px-6 text-zinc-400 text-xs text-center mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt quia, sit dolorem minima amet accusamus illo enim facilis nobis labore blanditiis molestias quisquam ratione ipsum. Tempore non nulla sapiente!
            </Text>
            <View className="w-[80%] items-center mx-auto">
                <Text className=" my-4 w-full text-start">Email</Text>
                <Input className="w-max mx-auto" color={""} w={{
                    base: "100%",
                    md: "25%"
                }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} placeholder="Digite seu email" />
                <Text className=" my-4 w-full text-start">Senha</Text>
                <Input w={{
                    base: "100%",
                    md: "25%"
                }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>} placeholder="Digite sua senha" />
                <View className="w-full items-end">
                    <TouchableOpacity>
                        <Text className="text-blue-500 mt-4">Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="bg-blue-500 text-white border border-slate-200 items-center justify-center rounded-lg w-[85%] h-12 mt-8">
                    <Text className="text-white">Entrar</Text>
                </TouchableOpacity>
                <Text className="text-zinc-400 mt-8">
                    Ou
                </Text>
                <TouchableOpacity className="bg-white border border-slate-200 items-center justify-center rounded-lg px-16 h-12 mt-4">
                    <View className="flex-row items-center">
                        <Icon as={<AntDesign name="google" />} size={5} mr="2" color="black" />
                        <Text className="text-black">Entrar com Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push('/register')}
                    className="mt-8">
                    <Text className="text-zinc-400">
                        Não possui uma conta? <Text className="text-blue-500">Crie agora!</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}
