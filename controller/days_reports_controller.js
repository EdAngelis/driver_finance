import driverSchema from '../model/driver_model.js';

export default {

    //receive driver _id by paramns and others data from body
    dayClosure( req, res, next){
        
        const dayData = req.body
        dayData.dayProfit = dayData.uberGain + dayData.nineNineGain + dayData.inDriveGain + dayData.othersGain - [( dayData.km / dayData.kmPl * dayData.gasCost) + dayData.feedCost + dayData.carCost]

        driverSchema.findByIdAndUpdate( req.params.driverId, 
            {$push: 
                { 'day':
                    
                    dayData
                
                } 
            }
            )
        .then( result => { 
            console.log(result);
            
            res.status(201).send({msg: "Day Report save"})
        }).catch(err => { 
            console.log(err);
            res.status(401).send({msg: "Failure saving report day"})
        })
    }
}