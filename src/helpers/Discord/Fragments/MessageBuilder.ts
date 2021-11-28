import { Component, DiscordMessage, Embed, MinifiedDiscordMessage } from '#lib/types/discord';
import { Util } from '#lib/util/Util';

export default class MessageBuilder {
  private _messageObject: DiscordMessage;

  constructor(messageObject: MinifiedDiscordMessage) {
    this._messageObject = {
      username: Util.checkString(messageObject.username),
      avatarUrl: Util.checkString(messageObject.avatarUrl),
      content: Util.checkString(messageObject.content),
      tts: messageObject.tts ?? false,
      embeds: [],
      components: [],
    };
  }

  appendEmbed(embed: Embed) {
    this._messageObject.embeds.push(embed);

    return this;
  }

  appendComponent(component: Component) {
    this._messageObject.components.push(component);

    return this;
  }

  build(): DiscordMessage {
    return this.messageObject;
  }

  json(): string {
    return JSON.stringify(this.messageObject);
  }

  /**
   * Getter & setter
   */
  get messageObject(): DiscordMessage {
    return this._messageObject;
  }

  set messageObject(value: DiscordMessage) {
    this._messageObject = value;
  }
}
