import { SubComponent } from '#lib/types/discord';

class SubComponentBuilder {
  private _subComponentObject: SubComponent;

  constructor() {
    this._subComponentObject = {
      type: 0,
      style: 0,
      label: '',
      url: '',
      customId: '',
    };
  }

  setType(type: number | null = null) {
    this._subComponentObject.type = type ?? 0;

    return this;
  }

  setStyle(style: number | null = null) {
    this._subComponentObject.style = style ?? 0;

    return this;
  }

  setLabel(label: string | null = null) {
    this._subComponentObject.label = label ?? '';

    return this;
  }

  setUrl(url: string | null = null) {
    this._subComponentObject.url = url ?? '';

    return this;
  }

  setCustomId(customId: string | null = null) {
    this._subComponentObject.customId = customId ?? '';

    return this;
  }

  build(): SubComponent {
    return this._subComponentObject;
  }

  /**
   * Getter & setter
   */
  get subComponentObject(): SubComponent {
    return this._subComponentObject;
  }

  set subComponentObject(value: SubComponent) {
    this._subComponentObject = value;
  }
}

const prepareSubComponent = (): SubComponentBuilder => {
  return new SubComponentBuilder();
};

export {
  prepareSubComponent,
};
