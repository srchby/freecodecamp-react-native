import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const about = () => {
  return (
    <View>
      <Text style={styles.text}>about</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
})

export default about