import axios from "axios";

const BASE_URL = 'https://guhsntlean-sds2.herokuapp.com';

export function fetchOrders() {
  return axios(`${BASE_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${BASE_URL}/orders/${orderId}/delivered`);
}