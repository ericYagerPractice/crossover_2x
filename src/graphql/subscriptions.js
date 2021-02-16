/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFaq = /* GraphQL */ `
  subscription OnCreateFaq {
    onCreateFAQ {
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
export const onUpdateFaq = /* GraphQL */ `
  subscription OnUpdateFaq {
    onUpdateFAQ {
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
export const onDeleteFaq = /* GraphQL */ `
  subscription OnDeleteFaq {
    onDeleteFAQ {
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
