import driverSchema from '../model/driver_model.js';
export default {
    
    // receive on body driver model with name, email, phone, pass
    registerUser ( req, res, next )  {
        console.log( req.body);
        const newDriver = new driverSchema( req.body );
        newDriver.save().then( result => {
            res.status(200).send({msg: "Driver Saved"})
        }).catch(err =>{
            console.log(err);
            res.status(400).send( {msg: " Failure to Register"})
        })
    }
}



