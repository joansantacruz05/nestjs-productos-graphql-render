import { HttpService } from '@nestjs/axios';
import { Producto } from './producto.model.js';
export declare class ProductosResolver {
    private readonly http;
    constructor(http: HttpService);
    productos(): Promise<Producto[]>;
    productoPorId(id: number): Promise<Producto | undefined>;
    productosBaratos(precioMaximo: number): Promise<Producto[]>;
}
