import express from 'express';
const app = express();

app.use(express.json());

import { getNote, getNotes, createNote } from './database.js';

app.get("/notes",async(req,res)=>{
    const notes = await getNotes();
    res.send(notes);
})
app.get("/notes/:id",async(req,res)=>{
    const id  =  req.params.id;
    const notes = await getNote(id);
    res.send(notes);
})

app.post("/notes", async(req,res)=>{
    const {title, contents} = req.body;
    const note = await createNote(title, contents);
    res.status(201).send(note);
})

app.use((req,res,next)=>{
    console.log(error);
    res.status(500).send('Something went wrong!')
})

app.listen(8080, ()=>{
    console.log("server is running on port 8080")
})