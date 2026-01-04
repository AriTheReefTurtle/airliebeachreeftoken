import { kv } from "@vercel/kv";

export const db = {
  user: {
    async findByPiUid(piUid: string) {
      return await kv.get(`user:${piUid}`);
    },

    async create(data: any) {
      const key = `user:${data.piUid}`;
      await kv.set(key, data);
      return data;
    },

    async updateById(piUid: string, updates: any) {
      const key = `user:${piUid}`;
      const existing = await kv.get(key);
      const updated = { ...existing, ...updates };
      await kv.set(key, updated);
      return updated;
    },
  },
};
