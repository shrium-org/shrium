import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { SuccessResponse } from "../../core/models/resume.model";
import { Profile } from "./hero.interfaces";
import { single, tap } from "rxjs";



@Injectable({
    providedIn: "root"
})
export class HeroService{

   
   private profile  = signal<Profile | null>(null);
   
   profileData = this.profile.asReadonly;

   constructor( private http: HttpClient ){

   }


   getProfile(){
     return  this.http.get<SuccessResponse<Profile>>("https://resume-backend-latest-hc32.onrender.com/api/v1/profile").pipe(
        tap(
            {

                 next: (res)=>{
                    this.profile.set(res.data);
                 }
                    ,
                error: (err)=>{
                      console.log(err.message);
                }
            }
        )
       )
   }

}