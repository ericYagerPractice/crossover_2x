  export const listUserStoriesWithTasks = /* GraphQL */ `
    query listUserStoriesWithTasks(
        $filter: ModelUserStoryFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
            goal
            user
            task {
            items {
                createdBy
                type
                description
            }
            }
        }
        }
    }
    `;
  