import EmbedBuilder from '#helpers/Discord/Fragments/EmbedBuilder';
import MessageBuilder from '#helpers/Discord/Fragments/MessageBuilder';
import { LogLevelName } from '#lib/types/log';
import { LogsColors } from '#lib/util/Constants';

const newLogMessage = (logLevelName: LogLevelName, content: string): Record<string, unknown> => {
  const embed = new EmbedBuilder({
    title: logLevelName,
    description: '```' + content + '```',
    timestamp: new Date(),
    color: LogsColors[logLevelName],
    author: {
      name: 'Log message',
    },
  }).build();

  const messageObject = new MessageBuilder({
    content: '',
    username: 'Solder',
    avatarUrl: '',
  }).appendEmbed(embed).json();

  return JSON.parse(messageObject);
};

export {
  newLogMessage,
};
