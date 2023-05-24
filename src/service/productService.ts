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
        await this.productRepository.save(product);
    }

    remove = async (id) => {
        await this.productRepository.delete(id);
    }

    edit = async (id,product) => {
        await this.productRepository.update({id:id},product)
    }
    findOne = async (id) => {
        return this.productRepository.find({id})
    }
}

export default new ProductService();