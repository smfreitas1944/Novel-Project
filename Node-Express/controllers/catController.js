const data = {
    cats: require('../model/cats.json'),
    setCats: function (data) { this.cats = data }
}

const getAllCats = (req, res) => {
    res.json(data.cats);
}

const createNewCat = (req, res) => {
    const newCat = {
        id: data.cats?.length ? data.cats[data.cats.length - 1].id + 1 : 1,
        name: req.body.name,
        breed: req.body.breed
        //age: req.body.age,
        //gender: req.body.gender
    }

    if (!newCat.name || !newCat.breed) {
        return res.status(400).json({ 'message': 'Name and breed are required.' });
    }

    data.setCats([...data.cats, newCat]);
    res.status(201).json(data.cats);
}

const updateCat = (req, res) => {
    const kittycat = data.cats.find(cat => cat.id === parseInt(req.body.id));
    if (!kittycat) {
        return res.status(400).json({ "message": `Cat ID ${req.body.id} not found` });
    }
    if (req.body.name) kittycat.name = req.body.name;
    if (req.body.breed) kittycat.breed = req.body.breed;
    if (req.body.age) kittycat.age = req.body.age;
    if (req.body.gender) kittycat.breed = req.body.gender;
    const filteredArray = data.cats.filter(cat => cat.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, kittycat];
    data.setCats(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.cats);
}

const deleteCat = (req, res) => {
    const kittycat = data.cats.find(cat => cat.id === parseInt(req.body.id));
    if (!kittycat) {
        return res.status(400).json({ "message": `Cat ID ${req.body.id} not found` });
    }
    const filteredArray = data.cats.filter(cat => cat.id !== parseInt(req.body.id));
    data.setCats([...filteredArray]);
    res.json(data.cats);
}

const getCat = (req, res) => {
    const kittycat = data.cats.find(cat => cat.id === parseInt(req.params.id));
    if (!kittycat) {
        return res.status(400).json({ "message": `Cat ID ${req.params.id} not found` });
    }
    res.json(kittycat);
}

module.exports = {
    getAllCats,
    createNewCat,
    updateCat,
    deleteCat,
    getCat
}