function validateChanges(req, res, next) {
    const { company_name, description } = req.body;
    if(!Object.entries(company_name) || !Object.entries(description)) {
        res.status(400).json({ message: 'company name and description are needed' })
    }
    if(!company_name.length || !description) {
        res.status(400).json({ message: 'company name description must not be blank' })
    }
    next();
}

module.exports = validateChanges;