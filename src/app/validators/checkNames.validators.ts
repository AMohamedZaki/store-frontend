import { HttpClient } from '@angular/common/http';


// tslint:disable-next-line:class-name
export class ValidationNameNotToken {

    private static http: HttpClient;
    constructor() {
    }

    // static nameShouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, rejected) => {
    //         const productService = new ProductService(this.http);
    //         if (control.value as string) {
    //             productService.chackProductName(control.value).subscribe((Unique: boolean) => {
    //              return  Unique ? resolve({'nameShouldBeUnique': true }) : resolve(null);
    //             });
    //         }
    //     });
    // }

    // static nameShouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return new Promise((resolve, rejected) => {
    //         return (productService: ProductService) => {
    //             // console.log(productService);
    //             console.log('s');
    //             if (control.value as string) {
    //                 productService.chackProductName(control.value).subscribe((Unique: boolean) => {
    //                     return Unique ? resolve({ 'nameShouldBeUnique': true }) : resolve(null);
    //                 });
    //             }
    //         };
    //     });
    // }

}


