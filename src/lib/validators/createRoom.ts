import * as z from 'zod'

export const createRoomSchema = z.object({
  username: z
    .string()
    .min(6, 'Username must contain at least 2 characters')
    .max(50, 'Username must not contain more than 50 characters'),
});