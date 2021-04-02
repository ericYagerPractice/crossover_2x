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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      messageSeen
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
          }
          messages {
            nextToken
          }
          username
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      messageText
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      messageSeen
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
          }
          messages {
            nextToken
          }
          username
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      messageText
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
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
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        username
        createdAt
        updatedAt
      }
      messageSeen
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
          }
          messages {
            nextToken
          }
          username
          createdAt
          updatedAt
        }
        messages {
          items {
            id
            initiatorID
            messageSeen
            recipientID
            conversationID
            messageText
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      messageText
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
            createdAt
            updatedAt
          }
          messages {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          initiator {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
      username
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
            createdAt
            updatedAt
          }
          messages {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          initiator {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
      username
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
            createdAt
            updatedAt
          }
          messages {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          initiator {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          initiatorID
          recipient {
            id
            cognitoId
            username
            createdAt
            updatedAt
          }
          messageSeen
          recipientID
          conversationID
          conversation {
            id
            ownerID
            createdAt
            updatedAt
          }
          messageText
          createdAt
          updatedAt
        }
        nextToken
      }
      username
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOffering = /* GraphQL */ `
  subscription OnCreateOffering {
    onCreateOffering {
      id
      title
      subTitle
      bulletPoints
      url
      image
      buttonText
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOffering = /* GraphQL */ `
  subscription OnUpdateOffering {
    onUpdateOffering {
      id
      title
      subTitle
      bulletPoints
      url
      image
      buttonText
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOffering = /* GraphQL */ `
  subscription OnDeleteOffering {
    onDeleteOffering {
      id
      title
      subTitle
      bulletPoints
      url
      image
      buttonText
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUrlPatterns = /* GraphQL */ `
  subscription OnCreateUrlPatterns {
    onCreateUrlPatterns {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUrlPatterns = /* GraphQL */ `
  subscription OnUpdateUrlPatterns {
    onUpdateUrlPatterns {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUrlPatterns = /* GraphQL */ `
  subscription OnDeleteUrlPatterns {
    onDeleteUrlPatterns {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
