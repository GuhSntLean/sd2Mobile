import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { Text, StyleSheet, ScrollView, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Header from "../../component/Header";
import OrderCard from "../../component/OrderCard";
import { fetchOrders } from "../../Config/Api";
import { Order } from "../../model/types";

export default function Orders(){
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error => Alert.alert('Houve algum problema ao carregar os pedidos!'))
      .finally(() => {setIsLoading(false)});
  }

  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
      <Header/>
      <ScrollView>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (orders.map(order => (
          <TouchableWithoutFeedback 
            key={order.id} 
            onPress={() => handleOnPress(order)}
          >
              <OrderCard order={order}/>
          </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft:  '5%',
  }
});