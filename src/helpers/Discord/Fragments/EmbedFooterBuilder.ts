import { EmbedFooter } from '#lib/types/discord';

class EmbedFooterBuilder {
  private _embedFooterObject: EmbedFooter;

  constructor() {
    this._embedFooterObject = {
      text: '',
      iconUrl: '',
    };
  }

  setText(text: string | null = null) {
    this._embedFooterObject.text = text ?? '';

    return this;
  }

  setIconUrl(iconUrl: string | null = null) {
    this._embedFooterObject.iconUrl = iconUrl ?? '';

    return this;
  }

  build(): EmbedFooter {
    return this._embedFooterObject;
  }

  /**
   * Getter & setter
   */
  get embedFooterObject(): EmbedFooter {
    return this._embedFooterObject;
  }

  set embedFooterObject(value: EmbedFooter) {
    this._embedFooterObject = value;
  }
}

const prepareEmbedFooter = (): EmbedFooterBuilder => {
  return new EmbedFooterBuilder();
};

export default prepareEmbedFooter;
