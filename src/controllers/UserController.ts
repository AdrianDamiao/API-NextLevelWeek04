import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController{
    async create(request: Request, response: Response){
        const {name, email} = request.body
        
        const usersRepository = getCustomRepository(UsersRepository);

        //SELECT * FROM USERS WHERE EMAIL = "EMAIL" - Verifica se o usuario ja existe
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        //Passa o erro 400 se o usuario ja existir
        if(userAlreadyExists){
            return response.status(400).json({
                error: "User already exists!",
            });
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };

//Não é responsabilidade do controller manipular o banco de dados