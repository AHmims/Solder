import { Component, DiscordMessage, Embed } from '#lib/types/discord';

class MessageBuilder {
  private _messageObject: DiscordMessage;

  constructor() {
    this._messageObject = {
      username: '',
      avatarUrl: '',
      content: '',
      tts: false,
      embeds: [],
      components: [],
    };
  }

  setUsername(username: string | null = null) {
    this._messageObject.username = username ?? '';

    return this;
  }

  setAvatarUrl(avatarUrl: string | null = null) {
    this._messageObject.avatarUrl = avatarUrl ?? '';

    return this;
  }

  setContent(content: string | null = null) {
    this._messageObject.content = content ?? '';

    return this;
  }

  isTTS(isTTs = false) {
    this._messageObject.tts = isTTs;

    return this;
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
    return this._messageObject;
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

const prepareMessage = (): MessageBuilder => {
  return new MessageBuilder();
};

export default prepareMessage;
