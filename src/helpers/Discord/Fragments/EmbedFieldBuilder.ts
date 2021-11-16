import { EmbedField } from '#lib/types/discord';

class EmbedFooterBuilder {
  private _embedFieldObject: EmbedField;

  constructor() {
    this._embedFieldObject = {
      name: '',
      value: '',
      inline: false,
    };
  }

  setName(name: string | null = null) {
    this._embedFieldObject.name = name ?? '';

    return this;
  }

  setValue(value: string | null = null) {
    this._embedFieldObject.value = value ?? '';

    return this;
  }

  isInline(inline = false) {
    this._embedFieldObject.inline = inline;

    return this;
  }

  build(): EmbedField {
    return this._embedFieldObject;
  }

  /**
   * Getter & setter
   */
  get embedFieldObject(): EmbedField {
    return this._embedFieldObject;
  }

  set embedFieldObject(value: EmbedField) {
    this._embedFieldObject = value;
  }
}

const prepareEmbedField = (): EmbedFooterBuilder => {
  return new EmbedFooterBuilder();
};

export default prepareEmbedField;
