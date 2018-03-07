let id = 11;
module.exports = {
    login: (req, res, next) =>{
        let {username} = req.body;
        const db = req.app.get('db');
        let users = db.getUsers().then(users=>{

            console.log(users);
            const user = users.find(user=> user.username === username);
            
            console.log(user.username);

            if (user) {
                console.log(req.session.user);
                req.session.user.username = user.username;
                res.status(200).send(req.session.user);
            }
            else {
                res.status(403).send('Please Register');
            }

        }).catch(e=>console.log(e))
    },

    register: (req, res, next) => {
        id++;
        let {username, password} = req.body;
      
        const db = req.app.get('db');
        db.newUser([id, username]).then(users => {
            res.status(200).send(users);
        }
        )

    },

    getUsers: (req,res)=>{
        req.app.get('db').getUsers().then(users=>{
// sim1: 74HIJ
            if (users===null){
                res.json(users)
            }
            res.send(users)
        })
    },
// sim1: 66G
    addUser: (req,res)=>{
        let {username} = req.body;
        req.app.get('db').addUser([username]).then(results=>{
 // sim1: 74HIJ
            res.send("All Good.")
        })
    },

    deleteUser: (req,res)=>{
        let username = req.params.username;
// sim1: 70K
        req.app.get('db').deleteUser([username]).then(results=>{
            res.send("deleted")
        })
    },

    changeUser: (req,res)=>{
        let {username, id} = req.body;
        if (!id){
// sim1: 74HIJ
            res.status(404).end()
        }
        req.app.get('db').changeUser([username, id]).then(results=>{
            res.send("All Good.")
        })
    },

    getUser: (req,res)=>{
// sim1: 76E
        let {id} = req.query;
        req.app.get('db').getUser([id]).then(user=>{
            res.send(user)
        })
    }
}