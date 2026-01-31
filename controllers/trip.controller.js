import supabase from "../config/supabase.js";

export const createTrip = async (req, res) => {
  const { vehicle_id, passengers } = req.body;

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.isAvailable)
    return res.status(400).json({ message: "Vehicle not available" });

  if (passengers > vehicle.allowed_passengers)
    return res.status(400).json({ message: "Passenger limit exceeded" });

  await supabase.from("vehicles").update({ isAvailable: false }).eq("id", vehicle_id);

  const { data } = await supabase.from("trips").insert([req.body]);
  res.status(201).json(data);
};

export const updateTrip = async (req, res) => {
  const { error, data } = await supabase
    .from("trips")
    .update(req.body)
    .eq("id", req.params.tripId);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Trip updated", data });
};

export const getTrip = async (req, res) => {
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", req.params.tripId)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

export const deleteTrip = async (req, res) => {
  const { error } = await supabase
    .from("trips")
    .delete()
    .eq("id", req.params.tripId);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: "Trip deleted" });
};

export const endTrip = async (req, res) => {
  const { data: trip } = await supabase
    .from("trips")
    .select("distance_km, vehicle_id")
    .eq("id", req.params.tripId)
    .single();

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("rate_per_km")
    .eq("id", trip.vehicle_id)
    .single();

  const cost = trip.distance_km * vehicle.rate_per_km;

  await supabase.from("trips").update({
    isCompleted: true,
    tripCost: cost
  }).eq("id", req.params.tripId);

  await supabase.from("vehicles").update({ isAvailable: true }).eq("id", trip.vehicle_id);

  res.json({ message: "Trip ended", cost });
};
