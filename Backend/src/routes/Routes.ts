import { Router } from "express";
import { db } from "../config/Firebase";
import { json } from "node:stream/consumers";

const router = Router();

// Add tasks data
router.post("/addTasksData", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection("tasksData").add(data);
    console.log("Document added with ID:", docRef.id);
    res.status(201).send({ message: "Data added successfully", id: docRef.id });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error adding TasksData:", error.message);
      res.status(500).send({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});

// Add user data
router.post("/addUserData", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection("usersData").add(data);
    console.log("Document added with ID:", docRef.id);
    res.status(201).send({ message: "Data added successfully", id: docRef.id });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error adding UserData:", error.message);
      res.status(500).send({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});

// Get user data
router.get("/getUsersData", async (req, res) => {
  try {
    const snapshot = await db.collection("usersData").get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(users);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching UsersData:", error.message);
      res.status(500).send({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});



router.get("/getTasksData",async(req,res)=>{
    try {
        const snapshot=await db.collection("tasksData").get();
        const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).send(tasks);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching TasksData:", error.message);
        res.status(500).send({ error: error.message });
      } else {
        console.error("Unknown error:", error);
        res.status(500).send({ error: "An unknown error occurred" });
      }
    }
})

router.put("/editTask", async (req, res) => {
  const {id}=req.body;
  const {title,description,flag} = req.body; 

  try {
    const taskRef = db.collection("tasksData").doc(id); 
    const taskSnapshot = await taskRef.get();

    if (!taskSnapshot.exists) {
      
       res.status(404).send({ error: "Task not found" });
    }

    await taskRef.update({title,description,flag});

    res.status(200).send({ message: "Task updated successfully", id });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating TaskData:", error.message);
      res.status(500).send({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});


export default router;


/*
router.put("/editTasks/:id", async (req, res) => {
  const { id } = req.params; // Extract task ID from the URL
  const updatedData = req.body; // Extract updated task data from the request body

  try {
    const taskRef = db.collection("tasksData").doc(id); // Reference to the specific document
    const taskSnapshot = await taskRef.get();

    if (!taskSnapshot.exists) {
      return res.status(404).send({ error: "Task not found" });
    }

    // Update the document with the provided data
    await taskRef.update(updatedData);

    res.status(200).send({ message: "Task updated successfully", id, updatedData });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error updating TaskData:", error.message);
      res.status(500).send({ error: error.message });
    } else {
      console.error("Unknown error:", error);
      res.status(500).send({ error: "An unknown error occurred" });
    }
  }
});

*/
