import { Ingredient } from '../shared/ingredien.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridiens: Ingredient[];

    
    constructor( name: string, desc: string, imagePath: string, ingridens: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingridiens = ingridens;
    }
}