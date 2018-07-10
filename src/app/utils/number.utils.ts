export class NumberUtils{
    static getRandomInRange(min, max): number {
        return Math.floor(Math.random() * (max - min) + min);
      }
}