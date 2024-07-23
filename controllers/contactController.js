//@desc Get all Contects
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

//@desc Get single Contect
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
};

//@desc create single Contect
//@route POST /api/contacts/:id
//@access Public
const createContact  = (req, res) => {
    res.status(201).json({message: "Create Contact"});
};

//@desc delete single Contect
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.json({message: `Delete Contact for ${req.params.id}`});
}

//@desc update single Contect
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
    res.json({message: `Update Contact for ${req.params.id}`});
}
module.exports = { getContacts,  getContact,  createContact, deleteContact, updateContact };