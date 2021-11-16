import { Component, SubComponent } from '#lib/types/discord';

class ComponentBuilder {
  private _componentObject: Component;

  constructor() {
    this._componentObject = {
      type: 1,
      components: [],
    };
  }

  setType(type: number | null = null) {
    this._componentObject.type = type ?? 0;

    return this;
  }

  appendSubComponent(subComponent: SubComponent) {
    this._componentObject.components.push(subComponent);

    return this;
  }

  build(): Component {
    return this._componentObject;
  }

  /**
   * Getter & setter
   */
  get componentObject(): Component {
    return this._componentObject;
  }

  set componentObject(value: Component) {
    this._componentObject = value;
  }
}

const prepareComponent = (): ComponentBuilder => {
  return new ComponentBuilder();
};

export default prepareComponent;
