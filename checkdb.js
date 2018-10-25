const Sequelize =  require('sequelize');
const DT = Sequelize.DataTypes;
const db =  new Sequelize({
    storage : __dirname + '/test.db',
    dialect : 'sqlite'
});


const Task = db.define('task',{
    name :{
        type: DT.STRING,
        allowNull:false
    },
    priority:{
        type:DT.INTEGER,
        defaultValue:0
    }
})

async function task(){
    await db.sync()
    await db.authenticate()
}


async function writeTasks(){
    const task = await Task.create({
        name :'this is a first task',
        priority : 3
    })
    
}

async function doAll()
{
    await task();
    await writeTasks();
}

doAll()