# User Model

## Table Name
users

## Description
Stores all application users. Each user can have **only one role**: customer, owner, or driver.

---

## Columns

| Column Name | Data Type | Constraints | Description |
|------------|----------|-------------|------------|
| id | uuid | Primary Key, auto-generated | Unique user identifier |
| name | text | NOT NULL | Full name of the user |
| email | text | NOT NULL, UNIQUE | User email address |
| password | text | NOT NULL | Raw password (no hashing as per evaluation requirement) |
| role | text | NOT NULL, CHECK | User role (customer, owner, driver) |
| created_at | timestamp | Default `now()` | Account creation timestamp |

---

## Constraints

- Email must be **unique**
- Role must be one of:
  - customer
  - owner
  - driver

---

## Relationships

- **Owner → Vehicles**
  - `users.id` → `vehicles.owner_id`
- **Driver → Vehicle (Optional)**
  - `users.id` → `vehicles.driver_id`
- **Customer → Trips**
  - `users.id` → `trips.customer_id`

---


