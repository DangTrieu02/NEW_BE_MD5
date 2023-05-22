import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    edit: (req: Request, res: Response) => void;
    remove: (req: Request, res: Response) => void;
}
declare const _default: ProductController;
export default _default;
