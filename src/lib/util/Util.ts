import { Colors } from './Constants';

export class Util extends null {
  static resolveColor(color: string | number[] | number) {
    if (typeof color === 'string') {
      if (color === 'RANDOM') return Math.floor(Math.random() * (0xffffff + 1));
      if (color === 'DEFAULT') return 0;
      color = Colors[color] ?? parseInt(color.replace('#', ''),16);
    } else if (Array.isArray(color)) {
      color = (color[0] << 16) + (color[1] << 8) + color[2];
    }

    if (color < 0 || color > 0xffffff) throw new Error('CLR_BOUNDS');
    else if (Number.isNaN(color)) throw new TypeError('CLR_CONVERSION');

    return color;
  }

  static cloneObject(object:Record<string, unknown>): Record<string, unknown> {
    return Object.assign(Object.create(object), object);
  }

  static checkString(
    data: unknown,
    error = Error,
    message = `Expected string, got ${data} instead.`,
    nullable = true
  ): string
  {
    if (typeof data !== 'string') throw new error(message);
    if (!nullable && data.length === 0) throw new error(); 
    return data;
  }
}