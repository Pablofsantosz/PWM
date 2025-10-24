import React, { useState } from "react";
import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FlatList, View, StyleSheet } from "react-native";
import { Text, TextInput, Button, ActivityIndicator, Divider } from "react-native-paper";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
    onError: (err) => {
      console.error("Erro ao adicionar tarefa:", err);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching && !data) {
    return <ActivityIndicator animating={true} size="large" style={styles.centered} />;
  }
  if (error) {
    return <View style={styles.centered}><Text>Error: {error.message}</Text></View>;
  }
  if (!data && !isFetching) {
    return <View style={styles.centered}><Text>Nenhuma tarefa encontrada.</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Task List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Adicionar nova tarefa"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
          mode="outlined"
          dense
        />
        <Button
          mode="contained"
          onPress={() => description.trim() && addMutation.mutate({ description })}
          disabled={addMutation.isPending || !description.trim()}
          style={styles.addButton}
          icon="plus"
          loading={addMutation.isPending}
        >
          Add
        </Button>
      </View>

      <Divider style={styles.divider} />

      {isFetching && <ActivityIndicator animating={true} style={{ marginBottom: 10 }} />}

      {data && data.results.length === 0 && !isFetching && (
        <Text style={styles.emptyText}>Nenhuma tarefa cadastrada.</Text>
      )}

      {data && (
        <FlatList
          data={data.results}
          keyExtractor={(item) => item.objectId}
          renderItem={({ item: task }) => (
            <CardTask
              task={task}
              onDelete={deleteMutation.mutate}
              onCheck={updateMutation.mutate}
              isDeleting={deleteMutation.isPending && deleteMutation.variables === task.objectId}
              isChecking={updateMutation.isPending && updateMutation.variables?.objectId === task.objectId}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    justifyContent: 'center',
    height: 48,
  },
  divider: {
    marginVertical: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'grey',
  }
});