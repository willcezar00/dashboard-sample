export class Atendimento{
    /**
     * class to fill chart and table
     */
    constructor(
        public data: Date,
        public dataView: string,
        public demanda: number,
        public capacidade:number,
        public atendimentoPlanejado: number,
        public atendimentoRealizado: number,
        public desvio: number
    ) {        
    }
}
