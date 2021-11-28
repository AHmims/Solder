import { Embed, EmbedField, MinifiedEmbed } from '#lib/types/discord';
import { Util } from '#lib/util/Util';

export default class EmbedBuilder {
  private _embedObject: Embed;

  constructor(embedObject: MinifiedEmbed) {
    this._embedObject = {
      title: Util.checkString(embedObject.title),
      color: Util.resolveColor(embedObject.color),
      description: Util.checkString(embedObject.description),
      timestamp: embedObject.timestamp,
      url: embedObject.url,
      author: embedObject.author,
      image: embedObject.image,
      thumbnail: embedObject.thumbnail,
      footer: embedObject.footer,
      fields: [],
    };
  }

  appendField(field: EmbedField) {
    this._embedObject.fields.push(field);

    return this;
  }

  build(): Embed {
    return this.embedObject;
  }

  json(): string {
    return JSON.stringify(this.embedObject);
  }

  /**
   * Getter & setter
   */
  get embedObject(): Embed {
    return this._embedObject;
  }

  set embedObject(value: Embed) {
    this._embedObject = value;
  }
}
