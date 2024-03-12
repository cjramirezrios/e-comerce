import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Product } from "@shared/models/product.interface";
import { loadStripe } from "@stripe/stripe-js";
import { environment } from "environments/environment.development";
import { async, map } from "rxjs";

@Injectable({providedIn:'root'})
export class CheckoutService{
    private readonly http=inject(HttpClient);
    private readonly url=environment.serverURL;
    onProceedToPay(products:Product[]):any{
        return this.http.post(`${this.url}/checkout`,{items:products})
        .pipe(
            map(async(res:any)=>{
                const stripe=await loadStripe(environment.stripeApiKey);
                stripe?.redirectToCheckout({sessionId:res.id})
            })
        ).subscribe({
            error:(err)=>console.error('Error',err)
        })
    }
}