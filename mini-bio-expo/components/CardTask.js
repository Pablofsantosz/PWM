import React from 'react';
import { Card, Checkbox, IconButton, Text, ActivityIndicator } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export function CardTask({ task, onDelete, onCheck, isDeleting, isChecking }) {
  const handleCheck = () => {
    if (!isChecking) {
      onCheck({ objectId: task.objectId, done: task.done });
    }
  };

  const handleDelete = () => {
    if (!isDeleting) {
      onDelete(task.objectId);
    }
  };

  return (
    <Card style={[styles.card, (isChecking || isDeleting) && styles.cardDisabled]}>
      <Card.Content style={styles.content}>
        <Checkbox
          status={task.done ? 'checked' : 'unchecked'}
          onPress={handleCheck}
          disabled={isChecking || isDeleting}
        />
        <Text
          variant="bodyLarge"
          style={[styles.description, task.done && styles.descriptionDone]}
          numberOfLines={2}
        >
          {task.description}
        </Text>
        {isDeleting ? (
          <ActivityIndicator size="small" style={styles.actionIcon} />
        ) : (
          <IconButton
            icon="delete-outline"
            iconColor="grey"
            size={24}
            onPress={handleDelete}
            disabled={isChecking}
            style={styles.actionIcon}
          />
        )}
      </Card.Content>
      {isChecking && <ActivityIndicator size="small" style={styles.checkingIndicator} />}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
    marginHorizontal: 5,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  cardDisabled: {
    opacity: 0.6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
  },
  description: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  descriptionDone: {
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  actionIcon: {
    margin: 0,
  },
  checkingIndicator: {
    position: 'absolute',
    left: 10,
    bottom: 5,
