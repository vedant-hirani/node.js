const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// POST Route - Add a new Person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal Error',
        });
    }
});

// GET Route - Fetch all Persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET Route - Fetch Persons by Work Type
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (['chef', 'manager', 'waiter'].includes(workType)) {
            const response = await Person.find({ work: workType });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT Route - Update Person by ID
router.put('/:id', async (req, res) => {
    const id = req.params.id; // Extract ID from URL
    const updatedData = req.body; // Extract new data from the request body

    try {
        // Find and update the document
        const response = await Person.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true } // Options: return updated doc, validate inputs
        );

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated');
        res.status(200).json(response);
    }

    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update the person' });
    }
});


router.delete('/:id', async (req, res) => {
         const id=req.params.id;
         const deletedata=req.body;
         try{
            const response=await(Person.findByIdAndDelete(id,deletedata,{new:true,runValidators:true}))
            if(!response){
                return res.status(404).json({error:"can not deleted"});
            }
            console.log("data deleted");
            res.status(200).json(response);
         }
         catch(err){
            console.log(err);
            res.status(500).json({ error: 'Failed to delete the person' });
         }
}
)

module.exports = router;
//comments addedss