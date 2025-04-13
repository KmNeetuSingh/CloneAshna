import {
    Box,
    Flex,
    Text,
    Input,
    Textarea,
    Button,
    Badge,
    Select,
    SimpleGrid,
    Stack,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  } from "../api/api";
  import { motion } from "framer-motion";
  
  const MotionBox = motion.create(Box);
  
  const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("");
    const [newTask, setNewTask] = useState({ title: "", description: "", priority: "low" });
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskData, setEditTaskData] = useState({ title: "", description: "", priority: "low" });
  
    const fetchTasks = async () => {
      try {
        const res = await getTasks(filter ? { priority: filter } : {});
        setTasks(res.data || []);
      } catch (err) {
        console.error("Error fetching tasks:", err.message);
      }
    };
  
    useEffect(() => {
      fetchTasks();
    }, [filter]);
  
    const handleCreate = async () => {
      try {
        await createTask(newTask);
        setNewTask({ title: "", description: "", priority: "low" });
        fetchTasks();
      } catch (err) {
        console.error("Error creating task:", err.message);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await deleteTask(id);
        fetchTasks();
      } catch (err) {
        console.error("Error deleting task:", err.message);
      }
    };
  
    const handleEdit = async (id) => {
      try {
        await updateTask(id, editTaskData);
        setEditTaskId(null);
        fetchTasks();
      } catch (err) {
        console.error("Error updating task:", err.message);
      }
    };
  
    const getPriorityColor = (priority) => {
      switch (priority) {
        case "high":
          return "red";
        case "medium":
          return "orange";
        case "low":
          return "green";
        default:
          return "gray";
      }
    };
  
    return (
      <Box p={[4, 6]} bg="gray.100" minH="100vh">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Tasks</Text>
  
        {/* New Task Form */}
        <Stack spacing={3} bg="white" p={4} rounded="md" shadow="md" mb={6}>
          <Input
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <Textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <Select
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
          <Button colorScheme="blue" onClick={handleCreate}>
            Add Task
          </Button>
        </Stack>
  
        {/* Filter */}
        <Select
          placeholder="Filter by priority"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          maxW="200px"
          mb={4}
          bg="white"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Select>
  
        {/* Task Grid */}
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {tasks.map((task) => (
            <MotionBox
              key={task._id}
              p={4}
              bg="white"
              rounded="md"
              shadow="md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Flex justify="space-between" align="center" mb={2}>
                <Text fontWeight="semibold" fontSize="lg">
                  {task.title}
                </Text>
                <Badge colorScheme={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </Flex>
              <Text mb={4}>{task.description}</Text>
  
              {editTaskId === task._id ? (
                <Stack spacing={3} mt={3}>
                  <Input
                    value={editTaskData.title}
                    onChange={(e) => setEditTaskData({ ...editTaskData, title: e.target.value })}
                  />
                  <Textarea
                    value={editTaskData.description}
                    onChange={(e) => setEditTaskData({ ...editTaskData, description: e.target.value })}
                  />
                  <Select
                    value={editTaskData.priority}
                    onChange={(e) => setEditTaskData({ ...editTaskData, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                  <Flex gap={2}>
                    <Button size="sm" onClick={() => setEditTaskId(null)}>Cancel</Button>
                    <Button size="sm" colorScheme="blue" onClick={() => handleEdit(task._id)}>
                      Save
                    </Button>
                  </Flex>
                </Stack>
              ) : (
                <Flex justify="flex-end" gap={2}>
                  <Button
                    size="sm"
                    colorScheme="gray"
                    onClick={() => {
                      setEditTaskId(task._id);
                      setEditTaskData({
                        title: task.title,
                        description: task.description,
                        priority: task.priority,
                      });
                    }}
                  >
                    Edit
                  </Button>
                  <Button size="sm" colorScheme="red" onClick={() => handleDelete(task._id)}>
                    Delete
                  </Button>
                </Flex>
              )}
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default Tasks;
  