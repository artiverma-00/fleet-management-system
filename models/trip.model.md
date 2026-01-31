# Trip Model

## Table Name
trips

## Description
Stores trip details created by customers using available vehicles.

---

## Columns

| Column Name | Data Type | Constraints | Description |
|------------|----------|-------------|------------|
| id | uuid | Primary Key, auto-generated | Unique trip identifier |
| customer_id | uuid | NOT NULL, FK | Customer who created the trip |
| vehicle_id | uuid | NOT NULL, FK | Vehicle used for the trip |
| start_date | date | NOT NULL | Trip start date |
| end_date | date | Nullable | Trip end date |
| location | text | Optional | Trip location |
| distance_km | numeric | >= 0 | Distance traveled |
| passengers | integer | > 0 | Number of passengers |
| tripCost | numeric | Calculated | Total trip cost |
| isCompleted | boolean | Default false | Trip completion status |
| created_at | timestamp | Default `now()` | Trip creation timestamp |

---

## Constraints

- Passenger count must be positive
- Distance must be non-negative

---

## Relationships

- **Customer → Trips**
  - `trips.customer_id` → `users.id`
- **Vehicle → Trips**
  - `trips.vehicle_id` → `vehicles.id`

---

## Business Rules

- Trips can only be created using **available vehicles**
- Passenger count must not exceed vehicle capacity
- When a trip starts:
  - `vehicle.isAvailable` → false
- When a trip ends:
  - `isCompleted` → true
  - `tripCost = distance_km * rate_per_km`
  - `vehicle.isAvailable` → true

