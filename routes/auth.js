const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('log time - '  + new Date());
    next();
});

router.post('/', (req, res, next) => {

    console.log(req.body);
    const username = req.body.usuario;
    const password = req.body.senha;

    if (username == '1' && password == '1')  {

        return res.status(200).json({ token: 'fake.token.asdf' });
    }

    return res.status(401).json({ error: 'usuário/senha errados!' });
});

router.get('/', (req, res, next) => {
    console.log('fake get');
    res.json({ asdf: 'asdf'});
});

module.exports = router;
