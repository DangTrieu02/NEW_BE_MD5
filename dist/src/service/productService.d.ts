declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
