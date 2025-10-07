import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/MinhaFoto.jpg')}
        style={styles.minhaFoto}
      />
      <Text style={styles.nome}>Pablo Felipe dos Santos</Text>

      {/* Correção aqui! Usamos <Text> aninhados para o negrito */}
      <Text style={styles.bio}>
        "Studying a Bachelor's Degree in Computer Science (5th semester) at the Catholic University of Pernambuco (UNICAP). Passionate about software development and quality assurance, I'm always looking to improve my skills and contribute to meaningful projects. I develop using{' '}
        <Text style={styles.boldText}>
          Python, C#, JavaScript, C, Java,
        </Text>
        {' '}and use libraries and frameworks like React, Django, and Node.js to build impactful projects."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  minhaFoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(17, 3, 67, 0.496)',
    maxWidth: 600,
  },
  // Novo estilo para o texto em negrito
  boldText: {
    fontWeight: 'bold',
  },
});