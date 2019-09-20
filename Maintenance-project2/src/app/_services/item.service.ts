import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '@/_models';

@Injectable({ providedIn: 'root' })
export class ItemService {
    constructor(private http: HttpClient) { }

    create(item : Item){
        return this.http.post(`http://localhost/MaintenceProject/api/item/create.php`, item);
    }
   

}