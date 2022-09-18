

async function getAllUsers(req,res){
    console.log("The Route for All Users")
    return res.status(200).json({'Message':'Getting All Users'});
}


module.exports={
    getAllUsers,
}