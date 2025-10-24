import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, ScrollView, Pressable, View } from "react-native";
import { Button, Card, Text, TextInput, Avatar } from 'react-native-paper';

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = idade ? new Date().getFullYear() - parseInt(idade) : null;

  const handleOkPress = () => Alert.alert("Botão OK pressionado");
  const handleCancelPress = () => Alert.alert("Botão Cancel pressionado");
  const handleTaskListPress = () => router.navigate("/taskList");

  return (
    <ScrollView contentContainerStyle={styles.containerBase}>
      <Text variant="displayMedium" style={styles.titleText}>Olá Turma!</Text>

      <Avatar.Image
        style={styles.avatar}
        size={150}
        source={require("@/assets/images/avatar.jpg")}
      />

      <Card style={styles.card}>
        <Pressable onPress={() => setShowDetails(!showDetails)}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.descriptionText} numberOfLines={showDetails ? undefined : 2}>
              Este é um App de exemplo da disciplina Programação Web e Mobile do
              Curso de Ciência da Computação da Universidade Católica de Pernambuco
              (semestre 2025.2)
            </Text>
          </Card.Content>
        </Pressable>
      </Card>

      {anoNasc !== null && !isNaN(anoNasc) && (
        <Text variant="bodyLarge" style={{ marginTop: 10 }}>Você nasceu em {anoNasc}</Text>
      )}

      <TextInput
        label="Qual a sua idade?"
        value={idade}
        onChangeText={onChangeIdade}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
        dense
      />

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleOkPress} style={styles.button}>
          OK
        </Button>
        <Button mode="contained" onPress={handleCancelPress} style={styles.button}>
          Cancel
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={handleTaskListPress}
        style={styles.taskListButton}
        icon="format-list-checks"
      >
        Ir para Lista de Tarefas
      </Button>

      <View style={{ height: 70 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerBase: {
    backgroundColor: "#FFFACD",
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  card: {
    width: '95%',
    marginTop: 5,
    marginBottom: 10,
  },
  descriptionText: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  input: {
    width: '80%',
    marginTop: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: '80%',
  },
  button: {
    marginHorizontal: 10,
    flex: 1,
  },
  taskListButton: {
    marginTop: 20,
    width: '80%',
  }
});