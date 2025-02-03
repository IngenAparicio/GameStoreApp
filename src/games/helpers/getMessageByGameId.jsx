import {messages} from '../data/gameMessages';

export const getMessageByGameId = (gameId) => {
    return messages.filter(x => x.gameId == gameId);
}
