import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSubscription } from "@apollo/client";

import { USER_ADDED_SUBSCRIPTION } from "../../gql/user";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const UserAdded = () => {
  const { loading, error, data } = useSubscription(USER_ADDED_SUBSCRIPTION);

  if (loading) return <Text>Sub Loading...</Text>;
  if (error) return <Text>Sub Error...</Text>;
  return (
    <View style={styles.container}>
      <Text>If User Added:</Text>
        <Text>
          {data.userAdded.id}/{data.userAdded.username}
        </Text>
    </View>
  );
};

export default UserAdded;
