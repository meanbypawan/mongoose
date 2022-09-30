import { User } from '../model/user.schema.js';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
export const signin = async (request, response, next) => {
    let user = await User.findOne({ email: request.body.email });
    if (user) {
        let status = await bcrypt.compare(request.body.password, user.password);
        user.password = await undefined;
        return status ? response.status(200).json(user) :
            response.status(401).json({ error: 'Bad request' });
    }
    else
        return response.status(401).json({ error: 'Bad request' });
}
export const save = async (request, response, next) => {

    const errors = validationResult(request);
    if (!errors.isEmpty()) 
      return response.status(401).json(errors.array());
    else {
        let password = request.body.password;
        let encryptedPassword = await bcrypt.hash(password, 10);
        request.body.password = await encryptedPassword;
        User.create(request.body)
            .then(result => {
                return response.status(201).json(result);
            })
            .catch(err => {
                return response.status(500).json({ error: 'Server Error' });
            });
    }
}