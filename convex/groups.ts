import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// This is a query that returns all the groups in the database
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('groups').collect();
  },
});