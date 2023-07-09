import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../components/Logo/Logo";

const LoginScreen = (props) => {
  //Burada Users dizisi giriş kontrolu için oluşturulmuştur.
  const users = [
    { userId: 1, userName: "uguryasa", password: "1234" },
    { userId: 2, userName: "can", password: "2455" },
    { userId: 3, userName: "buse", password: "1234" },
    { userId: 4, userName: "feyza", password: "1234" },
  ];
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [control, setControl] = useState(false);

  const getUserIdByCredentials = (userName, password) => {
    const user = users.find(
      (user) => user.userName === userName.trim() && user.password === password
    );

    return user ? user.userId : null;
  };

  const navigateToPage = () => {
    props.navigation.navigate("AddProduct", {
      userName: userName.trim() ? userName : "",
    });
  };

  const secureAccess = (userName) => {
    setUserName("");
    setPassword("");
    navigateToPage();
  };

  const handleLogin = () => {
    // Şifreyi kullanarak giriş işlemlerini burada gerçekleştirin
    {
      !getUserIdByCredentials(userName, password)
        ? Alert.alert("Uyarı", "Lütfen bilgilernizi kontrol ediniz?", [
            {
              text: "Tamam",
              onPress: () => {
                setControl(!control);
              },
            },
          ])
        : secureAccess(userName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        placeholder="User name"
        value={userName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        label="Username"
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9A9A9",
    alignItems: "center",
  },
  sized_box: {
    height: 100,
    width: 20,
  },
  input: {
    marginTop: 30,
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    color: "black",
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default LoginScreen;
