import { HttpClient } from "@angular/common/http";
import { EnvironmentInjector, Injectable, inject, runInInjectionContext, signal } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { map, tap } from "rxjs";
import { Product } from "../shared/models/product.interface";
import {toSignal} from '@angular/core/rxjs-interop';
@Injectable({providedIn:'root'})

export class ProductsService{
    private readonly http=inject(HttpClient);
    public products=signal<Product[]>([]);
    private readonly endPoint=environment.apiUrl;
    private readonly injector=inject(EnvironmentInjector);

    constructor(){
        this.getProducts();
    }

    //getProducts
    public getProducts():void{
        this.http.get<Product[]>(`${this.endPoint}/products/?sort=desc`)
        .pipe(
            map((products:Product[])=>products.map((product:Product)=>({...product,qty:1}))),
            tap((products:Product[])=>this.products.set(products))
        ).subscribe();
    }    
    //getProductById
    public getProductById(id:number){
        // const product=this.http.get<Product>(`${this.endPoint}/products/${id}`);
        // return toSignal(product)
        return runInInjectionContext(this.injector,()=>{
            return toSignal<Product>(this.http.get<Product>(`${this.endPoint}/products/${id}`))
        });
    }
}