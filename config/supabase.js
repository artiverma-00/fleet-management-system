import { createClient } from "@supabase/supabase-js";

class SupabaseClient {
  constructor() {
    this.client = null;
  }

  get instance() {
    if (!this.client) {
      const url = process.env.SUPABASE_URL;
      const key = process.env.SUPABASE_KEY;
      
      if (!url || !key) {
        throw new Error("SUPABASE_URL and SUPABASE_KEY must be set in environment variables");
      }
      
      this.client = createClient(url, key);
    }
    return this.client;
  }

  from(table) {
    return this.instance.from(table);
  }
}

export default new SupabaseClient();