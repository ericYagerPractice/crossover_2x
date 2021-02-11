/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      cognitoID
      lastLogin
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
      email
      cognitoID
      lastLogin
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
      email
      cognitoID
      lastLogin
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      participants {
        id
        email
        cognitoID
        lastLogin
      }
      messages {
        items {
          id
          author
          recipient
          messageText
          time
          conversationID
        }
        nextToken
      }
      originationDate
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
      participants {
        id
        email
        cognitoID
        lastLogin
      }
      messages {
        items {
          id
          author
          recipient
          messageText
          time
          conversationID
        }
        nextToken
      }
      originationDate
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
      participants {
        id
        email
        cognitoID
        lastLogin
      }
      messages {
        items {
          id
          author
          recipient
          messageText
          time
          conversationID
        }
        nextToken
      }
      originationDate
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
      author
      recipient
      messageText
      time
      conversationID
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
      author
      recipient
      messageText
      time
      conversationID
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
      author
      recipient
      messageText
      time
      conversationID
    }
  }
`;
export const createLearningPathway = /* GraphQL */ `
  mutation CreateLearningPathway(
    $input: CreateLearningPathwayInput!
    $condition: ModellearningPathwayConditionInput
  ) {
    createLearningPathway(input: $input, condition: $condition) {
      id
      title
      pods {
        items {
          id
          createdAt
        }
        nextToken
      }
      facilitator {
        id
        email
        cognitoID
        lastLogin
      }
    }
  }
`;
export const updateLearningPathway = /* GraphQL */ `
  mutation UpdateLearningPathway(
    $input: UpdateLearningPathwayInput!
    $condition: ModellearningPathwayConditionInput
  ) {
    updateLearningPathway(input: $input, condition: $condition) {
      id
      title
      pods {
        items {
          id
          createdAt
        }
        nextToken
      }
      facilitator {
        id
        email
        cognitoID
        lastLogin
      }
    }
  }
`;
export const deleteLearningPathway = /* GraphQL */ `
  mutation DeleteLearningPathway(
    $input: DeleteLearningPathwayInput!
    $condition: ModellearningPathwayConditionInput
  ) {
    deleteLearningPathway(input: $input, condition: $condition) {
      id
      title
      pods {
        items {
          id
          createdAt
        }
        nextToken
      }
      facilitator {
        id
        email
        cognitoID
        lastLogin
      }
    }
  }
`;
export const createPod = /* GraphQL */ `
  mutation CreatePod(
    $input: CreatePodInput!
    $condition: ModelPodConditionInput
  ) {
    createPod(input: $input, condition: $condition) {
      id
      creator {
        id
        email
        cognitoID
        lastLogin
      }
      title
      description
      resourceUrls
      createDate
      learningPathway {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const updatePod = /* GraphQL */ `
  mutation UpdatePod(
    $input: UpdatePodInput!
    $condition: ModelPodConditionInput
  ) {
    updatePod(input: $input, condition: $condition) {
      id
      creator {
        id
        email
        cognitoID
        lastLogin
      }
      title
      description
      resourceUrls
      createDate
      learningPathway {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const deletePod = /* GraphQL */ `
  mutation DeletePod(
    $input: DeletePodInput!
    $condition: ModelPodConditionInput
  ) {
    deletePod(input: $input, condition: $condition) {
      id
      creator {
        id
        email
        cognitoID
        lastLogin
      }
      title
      description
      resourceUrls
      createDate
      learningPathway {
        items {
          id
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const createPathwayPod = /* GraphQL */ `
  mutation CreatePathwayPod(
    $input: CreatePathwayPodInput!
    $condition: ModelPathwayPodConditionInput
  ) {
    createPathwayPod(input: $input, condition: $condition) {
      id
      createdAt
      pathway {
        id
        title
        pods {
          nextToken
        }
        facilitator {
          id
          email
          cognitoID
          lastLogin
        }
      }
      pod {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
    }
  }
`;
export const updatePathwayPod = /* GraphQL */ `
  mutation UpdatePathwayPod(
    $input: UpdatePathwayPodInput!
    $condition: ModelPathwayPodConditionInput
  ) {
    updatePathwayPod(input: $input, condition: $condition) {
      id
      createdAt
      pathway {
        id
        title
        pods {
          nextToken
        }
        facilitator {
          id
          email
          cognitoID
          lastLogin
        }
      }
      pod {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
    }
  }
`;
export const deletePathwayPod = /* GraphQL */ `
  mutation DeletePathwayPod(
    $input: DeletePathwayPodInput!
    $condition: ModelPathwayPodConditionInput
  ) {
    deletePathwayPod(input: $input, condition: $condition) {
      id
      createdAt
      pathway {
        id
        title
        pods {
          nextToken
        }
        facilitator {
          id
          email
          cognitoID
          lastLogin
        }
      }
      pod {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
    }
  }
`;
export const createPodComments = /* GraphQL */ `
  mutation CreatePodComments(
    $input: CreatePodCommentsInput!
    $condition: ModelPodCommentsConditionInput
  ) {
    createPodComments(input: $input, condition: $condition) {
      id
      podID {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
      author
      commentText
    }
  }
`;
export const updatePodComments = /* GraphQL */ `
  mutation UpdatePodComments(
    $input: UpdatePodCommentsInput!
    $condition: ModelPodCommentsConditionInput
  ) {
    updatePodComments(input: $input, condition: $condition) {
      id
      podID {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
      author
      commentText
    }
  }
`;
export const deletePodComments = /* GraphQL */ `
  mutation DeletePodComments(
    $input: DeletePodCommentsInput!
    $condition: ModelPodCommentsConditionInput
  ) {
    deletePodComments(input: $input, condition: $condition) {
      id
      podID {
        id
        creator {
          id
          email
          cognitoID
          lastLogin
        }
        title
        description
        resourceUrls
        createDate
        learningPathway {
          nextToken
        }
      }
      author
      commentText
    }
  }
`;
