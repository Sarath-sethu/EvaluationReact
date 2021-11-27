const {Sequelize}=require('sequelize');
const db=new Sequelize('visitdetails','staffid','a12345',{
    host:'localhost',
    dialect:'sqlite',
    storage:'visitDb.sqlite',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

module.exports=db;