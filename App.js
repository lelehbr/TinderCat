import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// Array de gatinhos locais
const gatos = [
  { id: 1, source: require("./assets/gato1.jpg") },
  { id: 2, source: require("./assets/gato2.jpg") },
  { id: 3, source: require("./assets/gato3.jpg") },
];

export default function App() {
  const [index, setIndex] = useState(0); // imagem atual
  const [borderColor, setBorderColor] = useState("transparent"); // cor da borda

  // Função chamada ao clicar em Gostei / Não Gostei
  const handleChoice = (color) => {
    setBorderColor(color); // muda a cor da borda

    // Após 1 segundo, volta borda ao normal e muda a imagem
    setTimeout(() => {
      setBorderColor("transparent");
      setIndex((prev) => (prev + 1) % gatos.length);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Tinder de Gatinhos 🐾</Text>

      <Image
        source={gatos[index].source}
        style={[styles.image, { borderColor }]}
        resizeMode="cover"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#e74c3c" }]}
          onPress={() => handleChoice("red")}
        >
          <Text style={styles.buttonText}>Não Gostei</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2ecc71" }]}
          onPress={() => handleChoice("green")}
        >
          <Text style={styles.buttonText}>Gostei</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 6,
    borderRadius: 20,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
