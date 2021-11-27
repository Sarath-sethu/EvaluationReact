//const { findAll, create } = require('../models/Gig');
const Gig=require('../models/Gig');
var gigDao={
    findAll:findAll,
    create:create,
    findById: findById,
    deleteById: deleteById,
    updateGig:updateGig
}

function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(id);
}

function deleteById(id){
    return Gig.destroy({where:{id:id}});
}

function create(gig){
    var newGig=new Gig(gig);
    return newGig.save();
}

function updateGig(gig,id){
    var updateGig={
        cust_name:gig.cust_name,
        contact_person:gig.contact_person,
        contact_no:gig.contact_no,
        interest_product:gig.interest_product,
        visit_subject:gig.visit_subject,
        description:gig.description,
        visit_datetime:gig.visit_datetime,
        is_disabled:gig.is_disabled,
        is_deleted:gig.is_deleted,
        emp_id:gig.emp_id
    };
    return Gig.update(updateGig,{where:{id:id}});
}

module.exports=gigDao