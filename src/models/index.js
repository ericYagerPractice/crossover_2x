// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Conversation, User, Message, FAQ } = initSchema(schema);

export {
  Conversation,
  User,
  Message,
  FAQ
};