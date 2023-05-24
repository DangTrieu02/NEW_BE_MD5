declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    remove: (id: any) => Promise<void>;
    edit: (id: any, product: any) => Promise<void>;
    getOne: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
