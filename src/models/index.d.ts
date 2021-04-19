import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Conversation {
  readonly id: string;
  readonly owner: User;
  readonly messages: (Message | null)[];
  constructor(init: ModelInit<Conversation>);
  static copyOf(source: Conversation, mutator: (draft: MutableModel<Conversation>) => MutableModel<Conversation> | void): Conversation;
}

export declare class User {
  readonly id: string;
  readonly cognitoId: string;
  readonly conversations?: (Conversation | null)[];
  readonly messages?: (Message | null)[];
  readonly username: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Message {
  readonly id: string;
  readonly initiator: User;
  readonly recipient: User;
  readonly conversation: Conversation;
  readonly messageText: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class FAQ {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  constructor(init: ModelInit<FAQ>);
  static copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ>) => MutableModel<FAQ> | void): FAQ;
}