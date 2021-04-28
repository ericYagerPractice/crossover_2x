  export const listUserStoriesWithTasks = /* GraphQL */ `
    query listUserStoriesWithTasks(
        $filter: ModelUserStoryFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUserStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                goal
                user
                task {
                items {
                    id
                    createdBy
                    type
                    description
                }
            }
        }
        }
    }
    `;