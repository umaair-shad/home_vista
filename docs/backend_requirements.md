# HomeVista — Backend Integration & API Requirements Specification

This document details the complete backend contracts, API endpoints, payload schemas, security prerequisites, and webhook definitions required to connect the HomeVista Next.js frontend to a live production database and server infrastructure.

---

## 1. Authentication & Identity Management

### 1.1 `POST /api/v1/auth/register`
* **Affected Screens**: `/register`
* **Description**: Creates a new user record with role (`buyer`, `owner`, `agent`).
* **Request Payload**:
  ```json
  {
    "fullName": "Sarah Jenkins",
    "email": "sarah.j@example.com",
    "password": "SecurePassword123!",
    "phone": "+1 (310) 555-0199",
    "role": "buyer"
  }
  ```
* **Response `201 Created`**:
  ```json
  {
    "user": {
      "id": "usr_991823",
      "fullName": "Sarah Jenkins",
      "email": "sarah.j@example.com",
      "role": "buyer",
      "createdAt": "2026-10-15T12:00:00Z"
    },
    "tokens": {
      "accessToken": "jwt_access_token_here",
      "refreshToken": "jwt_refresh_token_here",
      "expiresIn": 3600
    }
  }
  ```

### 1.2 `POST /api/v1/auth/login`
* **Affected Screens**: `/login`
* **Description**: Authenticates user via email/password and sets `httpOnly` secure session cookie.
* **Request Payload**:
  ```json
  {
    "email": "sarah.j@example.com",
    "password": "SecurePassword123!"
  }
  ```
* **Response `200 OK`**:
  ```json
  {
    "user": {
      "id": "usr_991823",
      "fullName": "Sarah Jenkins",
      "email": "sarah.j@example.com",
      "role": "buyer"
    },
    "accessToken": "jwt_access_token_here"
  }
  ```

### 1.3 `POST /api/v1/auth/forgot-password` & `POST /api/v1/auth/reset-password`
* **Affected Screens**: `/forgot-password`, `/reset-password`
* **Payload**:
  - Forgot: `{ "email": "sarah.j@example.com" }`
  - Reset: `{ "code": "849201", "newPassword": "NewPassword2026!" }`

---

## 2. Properties & Listings Engine

### 2.1 `GET /api/v1/properties`
* **Affected Screens**: `/`, `/properties`, `/buy`, `/rent`, `/locations/[slug]`, `/property-types`
* **Query Parameters**:
  - `category`: `sale` | `rent` | `all`
  - `type`: `Villas` | `Apartments` | `Houses` | `Condos` | `Townhouses` | `Land`
  - `location`: string (e.g. `Beverly Hills, CA` or `Miami, FL`)
  - `minPrice`: integer
  - `maxPrice`: integer
  - `beds`: integer or `4+`
  - `baths`: integer or `4+`
  - `featured`: boolean
  - `sort`: `price_asc` | `price_desc` | `newest` | `beds_desc`
  - `page`: integer (default `1`)
  - `limit`: integer (default `12`)
* **Response `200 OK`**:
  ```json
  {
    "data": [
      {
        "id": "prop-1",
        "slug": "beverly-hills-modern-luxury-villa",
        "title": "Beverly Hills Modern Luxury Villa",
        "category": "sale",
        "type": "Villas",
        "price": 2850000,
        "location": "Beverly Hills, CA",
        "address": "1284 Crescent Dr, Beverly Hills, CA 90210",
        "beds": 4,
        "baths": 3,
        "sqft": 3450,
        "yearBuilt": 2023,
        "status": "Available",
        "isFeatured": true,
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
        ],
        "features": ["Swimming Pool", "Private Garden", "2-Car Garage", "Smart Home Automation"],
        "agent": {
          "id": "agent-1",
          "name": "Robert Sterling",
          "phone": "+1 (555) 234-5678",
          "email": "robert.sterling@homevista.com",
          "photo": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalRecords": 60,
      "hasMore": true
    }
  }
  ```

### 2.2 `GET /api/v1/properties/:slug`
* **Affected Screens**: `/properties/[slug]`
* **Description**: Returns complete single listing payload including full description, tax disclosures, neighborhood walkscore, and agent details.

### 2.3 `POST /api/v1/properties` (Owner/Agent Authenticated)
* **Affected Screens**: `/dashboard/properties/new`, Quick List Modal
* **Request Payload**:
  ```json
  {
    "title": "Contemporary Oceanfront Sanctuary",
    "category": "sale",
    "type": "Villas",
    "price": 3450000,
    "location": "Malibu, CA",
    "address": "21840 Pacific Coast Hwy, Malibu, CA 90265",
    "beds": 5,
    "baths": 5.5,
    "sqft": 4800,
    "image": "https://images.unsplash.com/...",
    "description": "Architectural masterpiece with 100 feet of direct ocean frontage.",
    "features": ["Ocean View", "Private Beach Access", "Wine Cellar", "Infinity Pool"]
  }
  ```

### 2.4 `PUT /api/v1/properties/:id` & `DELETE /api/v1/properties/:id`
* **Affected Screens**: `/dashboard/properties/[id]/edit`, `/dashboard/properties`
* **Role Verification**: Property must belong to authenticated `ownerId` or user must have `admin` role.

---

## 3. Lead Generation, Tours & Inquiries

### 3.1 `POST /api/v1/inquiries`
* **Affected Screens**: `/properties/[slug]`, `/contact`, Tour Booking Modals
* **Request Payload**:
  ```json
  {
    "propertyId": "prop-1",
    "name": "Sarah Jenkins",
    "email": "sarah.j@example.com",
    "phone": "+1 (310) 555-0199",
    "type": "Tour Request",
    "preferredDate": "2026-10-18T14:00:00Z",
    "message": "Interested in viewing the master suite and pool grounds."
  }
  ```
* **Expected Side Effects**:
  - Sends immediate transactional email confirmation to prospect.
  - Sends SMS / push notification to listing agent.
  - Adds entry to `/dashboard/inquiries` for the property owner.

### 3.2 `GET /api/v1/inquiries/mine`
* **Affected Screens**: `/account/inquiries` (Buyer view) and `/dashboard/inquiries` (Owner view).

---

## 4. Newsletter & Marketing Subscriptions

### 4.1 `POST /api/v1/newsletter/subscribe`
* **Affected Screens**: Homepage newsletter banner, footer subscription input
* **Payload**:
  ```json
  {
    "email": "subscriber@domain.com"
  }
  ```
* **Integration**: Syncs contact to SendGrid, Mailchimp, or Customer.io with `real-estate-digest` tag.

---

## 5. User Account Preferences & Saved Items

### 5.1 `POST /api/v1/users/wishlist` & `DELETE /api/v1/users/wishlist/:propertyId`
* **Affected Screens**: All Property Cards, `/properties/[slug]`, `/account/favorites`
* **Sync Strategy**: Store locally in `localStorage` for anonymous visitors, then automatically sync to user profile upon sign-in.

### 5.2 `POST /api/v1/users/saved-searches`
* **Affected Screens**: `/account/saved-searches`
* **Payload**: Includes search filter criteria and notification frequency (`instant`, `daily`, `weekly`).

---

## 6. Real-Time & Webhook Infrastructure

1. **MLS / RETS Feed Ingestion Worker**:
   - Background cron worker to sync external MLS listings hourly into Postgres/MongoDB.
2. **Cloudinary / AWS S3 Pre-signed Uploads**:
   - `POST /api/v1/uploads/sign-url` for direct browser upload of high-resolution architectural photography.
3. **Webhooks**:
   - Inbound webhook for SMS replies from Twilio.
   - Outbound webhook to CRM systems (HubSpot, Salesforce, FollowUpBoss).
