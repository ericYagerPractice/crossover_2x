/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      cognitoID
      lastLogin
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      cognitoID
      lastLogin
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      cognitoID
      lastLogin
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
      id
      participants {
        id
        email
        cognitoID
        lastLogin
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          author
          messageText
          time
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      originationDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
      id
      participants {
        id
        email
        cognitoID
        lastLogin
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          author
          messageText
          time
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      originationDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
      id
      participants {
        id
        email
        cognitoID
        lastLogin
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          author
          messageText
          time
          conversationID
          createdAt
          updatedAt
        }
        nextToken
      }
      originationDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      author
      messageText
      time
      conversationID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      author
      messageText
      time
      conversationID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      author
      messageText
      time
      conversationID
      createdAt
      updatedAt
    }
  }
`;
