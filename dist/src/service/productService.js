"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../enitity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await this.productRepository.find({
                relations: {
                    category: true,
                }
            });
            return products;
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.remove = async (id) => {
            await this.productRepository.delete(id);
        };
        this.edit = async (id, product) => {
            await this.productRepository.update({ id: id }, product);
        };
        this.getOne = async (id) => {
            return await this.productRepository.findOneBy({ id });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map