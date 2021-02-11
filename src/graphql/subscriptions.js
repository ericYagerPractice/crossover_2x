/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      cognitoID
      lastLogin
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      author
      recipient
      messageText
      time
      conversationID
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      author
      recipient
      messageText
      time
      conversationID
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      author
      recipient
      messageText
      time
      conversationID
    }
  }
`;
export const onCreateLearningPathway = /* GraphQL */ `
  subscription OnCreateLearningPathway {
    onCreateLearningPathway {
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
export const onUpdateLearningPathway = /* GraphQL */ `
  subscription OnUpdateLearningPathway {
    onUpdateLearningPathway {
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
export const onDeleteLearningPathway = /* GraphQL */ `
  subscription OnDeleteLearningPathway {
    onDeleteLearningPathway {
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
export const onCreatePod = /* GraphQL */ `
  subscription OnCreatePod {
    onCreatePod {
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
export const onUpdatePod = /* GraphQL */ `
  subscription OnUpdatePod {
    onUpdatePod {
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
export const onDeletePod = /* GraphQL */ `
  subscription OnDeletePod {
    onDeletePod {
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
export const onCreatePathwayPod = /* GraphQL */ `
  subscription OnCreatePathwayPod {
    onCreatePathwayPod {
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
export const onUpdatePathwayPod = /* GraphQL */ `
  subscription OnUpdatePathwayPod {
    onUpdatePathwayPod {
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
export const onDeletePathwayPod = /* GraphQL */ `
  subscription OnDeletePathwayPod {
    onDeletePathwayPod {
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
export const onCreatePodComments = /* GraphQL */ `
  subscription OnCreatePodComments {
    onCreatePodComments {
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
export const onUpdatePodComments = /* GraphQL */ `
  subscription OnUpdatePodComments {
    onUpdatePodComments {
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
export const onDeletePodComments = /* GraphQL */ `
  subscription OnDeletePodComments {
    onDeletePodComments {
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
