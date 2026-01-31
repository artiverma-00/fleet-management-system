# Vehicle Model

## Table Name
vehicles

## Description
Stores vehicle information created by owners. Vehicles can be assigned to drivers and used for trips.

---

## Columns

| Column Name | Data Type | Constraints | Description |
|------------|----------|-------------|------------|
| id | uuid | Primary Key, auto-generated | Unique vehicle identifier |
| name | text | NOT NULL | Vehicle name |
| registration_number | text | NOT NULL, UNIQUE | Vehicle registration number |
| allowed_passengers | integer | NOT NULL, > 0 | Maximum passengers allowed |
| isAvailable | boolean | Default true | Availability status |
| driver_id | uuid | Nullable, FK | Assigned driver |
| rate_per_km | numeric | NOT NULL, > 0 | Cost per kilometer |
| owner_id | uuid | NOT NULL, FK | Vehicle owner |
| created_at | timestamp | Default `now()` | Vehicle creation timestamp |

---

## Constraints

- `registration_number` must be **unique**
- `allowed_passengers` must be greater than 0
- `rate_per_km` must be greater than 0

---

## Relationships

- **Owner → Vehicles**
  - `vehicles.owner_id` → `users.id`
- **Driver → Vehicle**
  - `vehicles.driver_id` → `users.id`

---


