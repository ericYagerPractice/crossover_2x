/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFaq = /* GraphQL */ `
  mutation CreateFaq(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const updateFaq = /* GraphQL */ `
  mutation UpdateFaq(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaq = /* GraphQL */ `
  mutation DeleteFaq(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const createOffering = /* GraphQL */ `
  mutation CreateOffering(
    $input: CreateOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    createOffering(input: $input, condition: $condition) {
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
export const updateOffering = /* GraphQL */ `
  mutation UpdateOffering(
    $input: UpdateOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    updateOffering(input: $input, condition: $condition) {
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
export const deleteOffering = /* GraphQL */ `
  mutation DeleteOffering(
    $input: DeleteOfferingInput!
    $condition: ModelOfferingConditionInput
  ) {
    deleteOffering(input: $input, condition: $condition) {
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
export const createUrlPatterns = /* GraphQL */ `
  mutation CreateUrlPatterns(
    $input: CreateUrlPatternsInput!
    $condition: ModelurlPatternsConditionInput
  ) {
    createUrlPatterns(input: $input, condition: $condition) {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const updateUrlPatterns = /* GraphQL */ `
  mutation UpdateUrlPatterns(
    $input: UpdateUrlPatternsInput!
    $condition: ModelurlPatternsConditionInput
  ) {
    updateUrlPatterns(input: $input, condition: $condition) {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const deleteUrlPatterns = /* GraphQL */ `
  mutation DeleteUrlPatterns(
    $input: DeleteUrlPatternsInput!
    $condition: ModelurlPatternsConditionInput
  ) {
    deleteUrlPatterns(input: $input, condition: $condition) {
      id
      urlPattern
      createdAt
      updatedAt
    }
  }
`;
export const createUserStory = /* GraphQL */ `
  mutation CreateUserStory(
    $input: CreateUserStoryInput!
    $condition: ModelUserStoryConditionInput
  ) {
    createUserStory(input: $input, condition: $condition) {
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
export const updateUserStory = /* GraphQL */ `
  mutation UpdateUserStory(
    $input: UpdateUserStoryInput!
    $condition: ModelUserStoryConditionInput
  ) {
    updateUserStory(input: $input, condition: $condition) {
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
export const deleteUserStory = /* GraphQL */ `
  mutation DeleteUserStory(
    $input: DeleteUserStoryInput!
    $condition: ModelUserStoryConditionInput
  ) {
    deleteUserStory(input: $input, condition: $condition) {
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
export const createTechTask = /* GraphQL */ `
  mutation CreateTechTask(
    $input: CreateTechTaskInput!
    $condition: ModelTechTaskConditionInput
  ) {
    createTechTask(input: $input, condition: $condition) {
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
export const updateTechTask = /* GraphQL */ `
  mutation UpdateTechTask(
    $input: UpdateTechTaskInput!
    $condition: ModelTechTaskConditionInput
  ) {
    updateTechTask(input: $input, condition: $condition) {
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
export const deleteTechTask = /* GraphQL */ `
  mutation DeleteTechTask(
    $input: DeleteTechTaskInput!
    $condition: ModelTechTaskConditionInput
  ) {
    deleteTechTask(input: $input, condition: $condition) {
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
