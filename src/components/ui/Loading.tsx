import { View, Text } from 'react-native'
import React from 'react'

const Loading = ({message = "Chargement..."}) => {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading