/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncConversations = /* GraphQL */ `
  query SyncConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ownerID
        owner {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      ownerID
      owner {
        id
        cognitoId
        conversations {
          items {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          initiator {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          recipientID
          conversationID
          conversation {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          messageText
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerID
        owner {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        initiator {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        initiatorID
        recipient {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipientID
        conversationID
        conversation {
          id
          ownerID
          owner {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          messages {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        messageText
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      initiator {
        id
        cognitoId
        conversations {
          items {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      initiatorID
      recipient {
        id
        cognitoId
        conversations {
          items {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      recipientID
      conversationID
      conversation {
        id
        ownerID
        owner {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      messageText
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        initiator {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        initiatorID
        recipient {
          id
          cognitoId
          conversations {
            nextToken
            startedAt
          }
          messages {
            nextToken
            startedAt
          }
          username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        recipientID
        conversationID
        conversation {
          id
          ownerID
          owner {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          messages {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        messageText
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cognitoId
        conversations {
          items {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoId
      conversations {
        items {
          id
          ownerID
          owner {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          messages {
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          initiator {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          recipientID
          conversationID
          conversation {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          messageText
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        conversations {
          items {
            id
            ownerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        messages {
          items {
            id
            initiatorID
            recipientID
            conversationID
            messageText
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFaqs = /* GraphQL */ `
  query SyncFaqs(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFAQS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        question
        answer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFaq = /* GraphQL */ `
  query GetFaq($id: ID!) {
    getFAQ(id: $id) {
      id
      question
      answer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFaQs = /* GraphQL */ `
  query ListFaQs(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
