import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const CommentInput = (props) => {
 
  const [enteredComment, setEnteredComment] = useState("");

  
  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };

  
  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    setEnteredComment("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="DODAJ"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="DODAJ" onPress={addCommentHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    margin: 10,
    width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: "100%",
  },
});
export default CommentInput;
