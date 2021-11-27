const Sequelize = require('sequelize');
const db=require('../config/database');

const Gig=db.define('gig',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cust_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    contact_person:{
        type:Sequelize.STRING,
        allowNull:false
    },
    contact_no:{
        type:Sequelize.NUMBER,
        allowNull:false
    },
    interest_product:{
        type:Sequelize.STRING,
        allowNull:false
    },
    visit_subject:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    visit_datetime:{
        type:Sequelize.DATE,
        allowNull:false
    },
    is_disabled:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    is_deleted:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    emp_id:{
        type:Sequelize.NUMBER,
        allowNull:false
    }
});

module.exports=Gig;