/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      cognitoID
      lastLogin
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
        email
        cognitoID
        lastLogin
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        participants {
          id
          email
          cognitoID
          lastLogin
        }
        messages {
          nextToken
        }
        originationDate
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      author
      recipient
      messageText
      time
      conversationID
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
        author
        recipient
        messageText
        time
        conversationID
      }
      nextToken
    }
  }
`;
export const getLearningPathway = /* GraphQL */ `
  query GetLearningPathway($id: ID!) {
    getLearningPathway(id: $id) {
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
export const listLearningPathways = /* GraphQL */ `
  query ListLearningPathways(
    $filter: ModellearningPathwayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLearningPathways(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPod = /* GraphQL */ `
  query GetPod($id: ID!) {
    getPod(id: $id) {
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
export const listPods = /* GraphQL */ `
  query ListPods(
    $filter: ModelPodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPathwayPod = /* GraphQL */ `
  query GetPathwayPod($id: ID!) {
    getPathwayPod(id: $id) {
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
export const listPathwayPods = /* GraphQL */ `
  query ListPathwayPods(
    $filter: ModelPathwayPodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPathwayPods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        pathway {
          id
          title
        }
        pod {
          id
          title
          description
          resourceUrls
          createDate
        }
      }
      nextToken
    }
  }
`;
export const getPodComments = /* GraphQL */ `
  query GetPodComments($id: ID!) {
    getPodComments(id: $id) {
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
export const listPodCommentss = /* GraphQL */ `
  query ListPodCommentss(
    $filter: ModelPodCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPodCommentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        podID {
          id
          title
          description
          resourceUrls
          createDate
        }
        author
        commentText
      }
      nextToken
    }
  }
`;
