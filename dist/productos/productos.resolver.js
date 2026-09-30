var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Resolver, Query, Args, Int, Float } from '@nestjs/graphql';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Producto } from './producto.model.js';
const API_URL = 'https://practica-2-fij2.onrender.com/api/v1/productos';
let ProductosResolver = class ProductosResolver {
    http;
    constructor(http) {
        this.http = http;
    }
    async productos() {
        const { data } = await firstValueFrom(this.http.get(API_URL));
        return data;
    }
    async productoPorId(id) {
        const { data } = await firstValueFrom(this.http.get(`${API_URL}/${id}`));
        return data;
    }
    async productosBaratos(precioMaximo) {
        const { data } = await firstValueFrom(this.http.get(API_URL));
        return data.filter((p) => p.precio <= precioMaximo);
    }
};
__decorate([
    Query(() => [Producto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductosResolver.prototype, "productos", null);
__decorate([
    Query(() => Producto, { nullable: true }),
    __param(0, Args('id', { type: () => Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosResolver.prototype, "productoPorId", null);
__decorate([
    Query(() => [Producto]),
    __param(0, Args('precioMaximo', { type: () => Float })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductosResolver.prototype, "productosBaratos", null);
ProductosResolver = __decorate([
    Resolver(() => Producto),
    __metadata("design:paramtypes", [HttpService])
], ProductosResolver);
export { ProductosResolver };
//# sourceMappingURL=productos.resolver.js.map