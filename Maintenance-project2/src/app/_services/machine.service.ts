import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Machine } from '@/_models';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class MachineService {
    constructor(private http: HttpClient) { }

    create(machine : Machine){
        return this.http.post(`http://localhost/MaintenceProject/api/machine/create.php`, machine);
    }

    
    getAll() {
        return this.http.get<Machine[]>(`http://localhost/MaintenceProject/api/machine/read.php`);
    }


}