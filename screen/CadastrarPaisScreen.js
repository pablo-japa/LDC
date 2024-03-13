// CadastrarPaisScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastrarPaisScreen = () => {
  const [nomePais, setNomePais] = useState('');
  const [capital, setCapital] = useState('');


//METODO PARA CRIAR O PAIS
  const criarPais = () => {
    console.log('Nome do País:', nomePais);
    console.log('Capital:', capital);
  
    const novoPais = {
      nome: nomePais,
      capital: capital,
    };
  
    fetch('http://localhost:8080/pais', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoPais),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao criar o país');
        }
        return response.json();
      })
      .then(data => {
        console.log('Pais cadastrado com sucesso:', data);
        alert('País cadastrado com sucesso');
      })
      .catch(error => {
        console.error('Erro ao criar o país:', error);
        alert('Erro ao criar o país');
      })
  };
  

  return (
    <View style={styles.container}>
      <Text>Tela de Cadastro de País</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do País"
        value={nomePais}
        onChangeText={(text) => setNomePais(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Capital"
        value={capital}
        onChangeText={(text) => setCapital(text)}
      />
      <Button style={styles.btn} title="Salvar" onPress={criarPais} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  btn: {
    backgroundColor: '#808080',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8, // Espaço entre os botões
  },
});

export default CadastrarPaisScreen;
