import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { validate } from 'gerador-validador-cpf';

export default function App() {

  const [cpf, setCpf] = useState('')

  const [telefone, setTelefone] = useState('')


  function createThreeButtonAlert() {
    var mensagem=[0,''];

    if (validate(cpf)) {
      mensagem[0]=1;
      mensagem[1]='CPF valido pode entrar e iniciar o cadastro!';
    }
    else{
      mensagem[0]=0;
      mensagem[1]='CPF invalido, digite um cpf valido para iniciar!';
    }
    console.log(mensagem[0]);
  Alert.alert(
    "Alerta",
    mensagem[1],
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancelar"),
        style: "cancel"
      },
      {text: "OK", onPress: () => console.log( mensagem[0]=1?
       "OK cadastro aceito":"Nao foi possivel avancar") }
    ]
  );}

  return (
    <View style={styles.container}>
      <Text>Cadastro pessoa fisica lgpd</Text>
      <Text>Cpf</Text>
      <TextInputMask
      type={'cpf'}
      options={{maskType: 'BRL'}}
      value={cpf} 
      style={styles.input}  onChangeText={(txt)=>setCpf(txt)}/>
      
      <Text>Telefone</Text>
      <TextInputMask
      type={'cel-phone'} 
      options={{maskType:'BRL',withDDD:true,dddMask:'(99) '}}
      value={telefone}
      style={styles.input}  onChangeText={(txt)=>setTelefone(txt)}/>
      <Button style={styles.mybutton} title={"Autorizar cadastro"} onPress={createThreeButtonAlert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "gray",
    width: "60%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom:10,
  },
  mylabel:{
    margin:"10",
  },
  mybutton:{
    width: "80%"
  }
});

