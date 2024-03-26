import { Request, Response } from "express";
import { Category } from "../models";
import { categoryService } from "../services/categoryService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const categoriesController = {
    index: async (req: Request, res: Response) => {
        const [page, perPage] = getPaginationParams(req.query)
        try {
           const paginatedCategories  = await categoryService.findAllPaginated(page, perPage)
//quando se trabalha com paginação deve se informar em que lugar a pessoa está
            return res.json(paginatedCategories)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }

    }
}


//o controler serve para controlar o comportamento da rota