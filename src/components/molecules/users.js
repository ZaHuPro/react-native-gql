import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../../gql/user";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  items: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  // console.log({ data, error, loading });
  if (loading) return <Text>Sub Loading...</Text>;
  if (error) return <Text>Sub Error...</Text>;
  return (
    <View style={styles.container}>
      <Text>User List</Text>
      {data.users.map((e) => (
        <View style={styles.items} key={e.id}>
          <Text>{e.username}</Text>
        </View>
      ))}
    </View>
  );
};

export default Users;
