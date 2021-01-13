import React from "react";

import { StyleSheet, ScrollView } from "react-native";
import Header from "../../component/Header";
import OrderCard from "../../component/OrderCard";

export default function Orders(){

  return (
    <>
      <Header/>
      <ScrollView>
        <OrderCard/>
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