import { Component, MinifiedComponent, SubComponent } from '#lib/types/discord';

export default class ComponentBuilder {
  private _componentObject: Component;

  constructor(componentObject: MinifiedComponent) {
    this._componentObject = {
      type: componentObject.type,
      components: [],
    };
  }

  appendSubComponent(subComponent: SubComponent) {
    this._componentObject.components.push(subComponent);

    return this;
  }

  build(): Component {
    return this.componentObject;
  }

  json(): string {
    return JSON.stringify(this.componentObject);
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
