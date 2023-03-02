import React from 'react';
import UserOrdersPageComponent from './components/UserOrdersPageComponent';

import axios from 'axios';

const getOrders = async (req, res) => {
  const { data } = await axios.get('/api/orders/');
  return data;
};

const UserOrdersPage = () => {
  return <UserOrdersPageComponent getOrders={getOrders} />;
};

export default UserOrdersPage;
