import supabase from "../config/supabase.js";

export const getAnalytics = async (req, res) => {
  const users = await supabase.from("users").select("role", { count: "exact" });
  const vehicles = await supabase.from("vehicles").select("*", { count: "exact" });
  const trips = await supabase.from("trips").select("*", { count: "exact" });

  res.json({
    customers: users.data.filter(u => u.role === "customer").length,
    owners: users.data.filter(u => u.role === "owner").length,
    drivers: users.data.filter(u => u.role === "driver").length,
    vehicles: vehicles.count,
    trips: trips.count
  });
};
