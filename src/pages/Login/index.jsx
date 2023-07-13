import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../../components/Logo";

const Login = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("CQutx25i8r");
  const [userName, setUserName] = useState("hbingley1");
  const [control, setControl] = useState(false);
  const api = "https://dummyjson.com/users?limit=0&select=username,password";


  const fetchData=()=>{
    fetch(api)
    .then(res => res.json())
    .then(json=>setUsers(json.users));
  }
  useEffect(()=>{
    fetchData();
  },[])

  const getUserIdByCredentials = (userName, password) => {
    const user = users.find(
      (user) => user.username === userName.trim() && user.password === password
    );

    return user ? user.id : null;
  };

  const navigateToPage = () => {
    navigation.navigate("Tabs");
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
        ? Alert.alert("Warning", "Please check your details?", [
            {
              text: "OK",
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
      <Logo style={{marginTop: 24,}}/>
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
        <Text style={styles.buttonText}>Log in</Text>
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
    marginTop: 40,
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
    backgroundColor: "#607d8b",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 75,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Login;
