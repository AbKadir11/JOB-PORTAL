export const testPostController = (req, res) => {
    const {name} = req.body
    req.status(200).send(`Your name is ${name}`)
};