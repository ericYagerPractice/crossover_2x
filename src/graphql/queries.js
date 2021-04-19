/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nextToken
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
          }
          messages {
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
            nextToken
          }
          messages {
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
        messageText
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
    }
  }
`;
export const getFaq = /* GraphQL */ `
  query GetFaq($id: ID!) {
    getFAQ(id: $id) {
      id
      question
      answer
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOffering = /* GraphQL */ `
  query GetOffering($id: ID!) {
    getOffering(id: $id) {
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
export const listOfferings = /* GraphQL */ `
  query ListOfferings(
    $filter: ModelOfferingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfferings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUrlPatterns = /* GraphQL */ `
  query GetUrlPatterns($id: ID!) {
    getUrlPatterns(id: $id) {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const listUrlPatternss = /* GraphQL */ `
  query ListUrlPatternss(
    $filter: ModelurlPatternsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUrlPatternss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        urlPattern
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserStory = /* GraphQL */ `
  query GetUserStory($id: ID!) {
    getUserStory(id: $id) {
      id
      user
      goal
      task {
        items {
          id
          createdBy
          type
          description
          userStoryId
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
export const listUserStorys = /* GraphQL */ `
  query ListUserStorys(
    $filter: ModelUserStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        goal
        task {
          items {
            id
            createdBy
            type
            description
            userStoryId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTechTask = /* GraphQL */ `
  query GetTechTask($id: ID!) {
    getTechTask(id: $id) {
      id
      createdBy
      type
      description
      userStoryId
      createdAt
      updatedAt
    }
  }
`;
export const listTechTasks = /* GraphQL */ `
  query ListTechTasks(
    $filter: ModelTechTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy
        type
        description
        userStoryId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
