import { Atendimento } from "../model/atendimento.model";
import { DateUtils } from "../utils/date.utils";
import { NumberUtils } from "../utils/number.utils";
import * as moment from 'moment';

/**
 * Classe responsável por construir uma lista de Atendimento
 */
export class AtendimentoFactory {

    static createAtedimento(): Atendimento[] {
        let atendimento: Atendimento[] = [];

        for (let i = 0; i < 10; i++) {
            atendimento.push({
                atendimentoPlanejado: NumberUtils.getRandomInRange(0, 100),
                atendimentoRealizado: NumberUtils.getRandomInRange(0, 100),
                capacidade: NumberUtils.getRandomInRange(0, 100),
                demanda: NumberUtils.getRandomInRange(0, 100),
                desvio: NumberUtils.getRandomInRange(0, 100),
                data: moment().add(-i, 'days').toDate(),
                dataView: moment().add(-i, 'days').format("DD/MM/YYYY")
            });
        }
        atendimento.sort((atendimento1, atendimento2) => {
            return atendimento1.data.getTime() - atendimento2.data.getTime()
        });

        return atendimento;
    }
}