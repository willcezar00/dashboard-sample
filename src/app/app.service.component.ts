import { Injectable } from "@angular/core";
import { Atendimento } from "./model/atendimento.model";
import { AtendimentoFactory } from "./factory/atendimento.factory.component";
import { Observable } from "rxjs";

@Injectable()
export class AppService {

    constructor() { }

    getAtendimentos(): Atendimento[]{
        return AtendimentoFactory.createAtedimento();
    }
    
   
}
