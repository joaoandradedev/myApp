import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import Detalhes from "../Detalhes";

export default function Filmes({ data }){

  const [visibleModal, setVisibleModal] = useState(false);

  return(
    <View>
      
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image
          source={{ uri: data.foto }}
          style={styles.capa}
        />

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={ () => setVisibleModal(true) }>
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={ () => setVisibleModal(false) }/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#31363F',
    borderRadius: 10,
    margin: 15,
    elevation: 2,
  },
  capa:{
    height: 250,
    zIndex: 2
  },
  titulo:{
    padding: 15,
    fontSize: 18,
    color: '#EEEEEE'
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  botao:{
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  botaoTexto:{
    color: '#fff',
    textAlign: 'center',
  }
});