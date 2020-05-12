import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/home.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'normal', fontSize: 32 }}>Home Screen</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Music", {
              userName: "Batuhan",
              action: "Hello Guys"
            });
          }}
        >
          <Text style={{ color: '#FFF' }}>Go to the Music Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


function MusicScreen({ route, navigation }) {

  let { userName, action } = route.params;

  const [liked, setLiked] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <Icon
            name={liked ? "heart" : "heart-o"}
            size={24}
            color="#FFF"
            style={{ marginRight: 16 }} />
        </TouchableOpacity>
      )
    })
  })

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", flex: 1, marginTop: 64 }}>
        <Image source={require("./assets/music.png")}
          style={{ width: undefined, height: undefined, flex: 1 }}
          resizeMode="contain"
        />
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'normal', fontSize: 32 }}>Music Screen</Text>
        <Text style={{ fontWeight: "600", marginVertical: 32 }}>
          {userName} says to {action}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >

          <Text style={{ color: '#FFF' }}>Go to the Home Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button, {
              borderColor: "#23A6D9",
              borderWidth: 1,
              marginTop: 12,
              backgroundColor: "#FFF"
            },
          ]}
          onPress={() => {
            navigation.goBack("Home");
          }}
        >

          <Text style={{ color: "#23A6D9" }}>Go Back</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


function CustomHeader() {
  return <Icon name="music" size={24} color="#FFF" />
}


const Main = createStackNavigator();



const App = () => {
  return (

    <NavigationContainer >
      <StatusBar barStyle="light-content" backgroundColor="#23A6D9" />
      <Main.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#23A6D9",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "200",
          fontSize: 30,
        },
      }}>
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name="Music" component={MusicScreen} options={{
          headerTitle: props => <CustomHeader {...props} />
        }} />
      </Main.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    marginTop: 32,
    backgroundColor: "#23A6D9",
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center'
  }
})

export default App;
