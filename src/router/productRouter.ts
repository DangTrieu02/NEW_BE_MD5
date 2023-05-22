import {Router} from "express";
import productController from "../controller/productController";
import {auth} from "../middleware/auth";


const productRouter = Router();

// productRouter.use(auth);
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.edit);
productRouter.delete('/:id', productController.remove);
export default productRouter;