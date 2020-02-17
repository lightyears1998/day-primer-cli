/**
 * 目标
 */
export class Goal {
    name: string;
    description: string;

    /**
     * 累计时长
     */
    comulativeDuring: number;

    constructor(name: string, description: string, comulativeDuring: number) {
        this.name = name;
        this.description = description;
        this.comulativeDuring = comulativeDuring;
    }
}
