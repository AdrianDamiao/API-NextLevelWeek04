import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController{

    /**
     * https://localhost:3333/answers/2?u=7254e46a-9fea-4945-814d-04bd35ec81fb
     * Route Params => Parametros que compoe a rota
     * routes.get("/answers/:value")
     * 
     * Query Params => Busca, Paginacao, não obrigatorios
     * sempre vem depois do ?
     * chave=valor ( 1?u)
     */

    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists!") //Para lançar o erro para as classes de cima(app.ts)
            /**
            return response.status(400).json({
            error: "Survey User does not exists!"
            */
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser);
    }
}

export { AnswerController };
