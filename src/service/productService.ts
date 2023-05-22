 import {Product} from "../enitity/product";
import {AppDataSource} from "../data-source";
import {ILike, Like} from "typeorm";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            }
        });
        return products;
    }

    add = async (product) => {
        console.log(product)
        await this.productRepository.save(product);
    }
}

export default new ProductService();