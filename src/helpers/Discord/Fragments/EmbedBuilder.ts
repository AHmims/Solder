import {
  Embed,
  EmbedAuthor,
  EmbedField,
  EmbedFooter,
  EmbedImage,
  EmbedThumbnail,
} from '#lib/types/discord';

class EmbedBuilder {
  private _embedObject: Embed;

  constructor() {
    this._embedObject = {
      title: '',
      color: 0,
      description: '',
      timestamp: new Date(),
      url: '',
      author: {},
      image: {},
      thumbnail: {},
      footer: {},
      fields: [],
    };
  }

  setTitle(title: string | null = null) {
    this._embedObject.title = title ?? '';

    return this;
  }

  setColor(color: number | null = null) {
    this._embedObject.color = color ?? 0;

    return this;
  }

  setDescription(description: string | null = null) {
    this._embedObject.description = description ?? '';

    return this;
  }

  setTimestamp(timestamp: Date | null = null) {
    this._embedObject.timestamp = timestamp ?? new Date();

    return this;
  }

  setUrl(url: string | null = null) {
    this._embedObject.url = url ?? '';

    return this;
  }

  setAuthor(author: EmbedAuthor | null = null) {
    this._embedObject.author = author ?? {};

    return this;
  }

  setImage(image: EmbedImage | null = null) {
    this._embedObject.image = image ?? {};

    return this;
  }

  setThumbnail(thumbnail: EmbedThumbnail | null = null) {
    this._embedObject.thumbnail = thumbnail ?? {};

    return this;
  }

  setFooter(footer: EmbedFooter | null = null) {
    this._embedObject.footer = footer ?? {};

    return this;
  }

  appendField(field: EmbedField) {
    this._embedObject.fields.push(field);

    return this;
  }

  build(): Embed {
    return this._embedObject;
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

const prepareEmbed = (): EmbedBuilder => {
  return new EmbedBuilder();
};

export {
  prepareEmbed,
};
