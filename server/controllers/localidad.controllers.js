import { Locality } from "../models/associations/associations.js";

export const getLocality = async (req, res) => {
    try {
        const localities = await Locality.findAll();
        if(!localities){
            return res.status(404).json({message:'No localities found'});
        }
        res.json(localities);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error interno del servidor!'});
    }
};

