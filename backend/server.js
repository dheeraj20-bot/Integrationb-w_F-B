import express from "express";

const app = express()


app.get("/",(req,res)=>{
      res.send("Server is ready")
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "B Joke",
            content: "Why don't scientists trust atoms? Because they make up everything."
        },
        {
            id: 3,
            title: "C Joke",
            content: "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            id: 4,
            title: "D Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: "E Joke",
            content: "I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
            id: 6,
            title: "F Joke",
            content: "What do you call fake spaghetti? An impasta!"
        },
        {
            id: 7,
            title: "G Joke",
            content: "Why did the math book look sad? Because it had too many problems."
        },
        {
            id: 8,
            title: "H Joke",
            content: "Did you hear about the claustrophobic astronaut? He needed space."
        },
        {
            id: 9,
            title: "I Joke",
            content: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id: 10,
            title: "J Joke",
            content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        }
    ]
    res.send(jokes)
    
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server Running on ${port}`);
})