export class Product {
   constructor( public ID: number,
    public Name: string,
    public Price: number,
    public Cost:number,
    public Quantity: number
    , public CategoryID?: number
    , public Image?: string
    ,public IsDeleted?:boolean
    ,public Description?:string){}
}
