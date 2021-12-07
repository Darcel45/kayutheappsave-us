export class Movie {
      id:number;
      movie_name:string ;
      price:number;
      movie_date : string;
      movie_poster:string; 
      

      
      constructor(id:number,movie_name:string,price:number,movie_date:string,movie_poster?:string){
        this.id=id;
        this.movie_name=movie_name;
        this.price=price;
        this.movie_date=movie_date;
        this.movie_poster=movie_poster || "https://www.jainsusa.com/images/store/landscape/not-available.jpg";

      }

      getILSprice(){
        return this.price*4;
      }
}