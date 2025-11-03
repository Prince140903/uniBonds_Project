# Bonds Data for MongoDB

This directory contains the extracted bond data in MongoDB-compatible JSON format.

## Files

- `bonds.json` - Contains 55 bonds in MongoDB import format

## Bond Data Structure

Each bond document includes:

```json
{
  "bondId": 1,
  "issuer": "HDFC Bank Ltd",
  "isin": "INE040A08056",
  "type": "PSU",
  "coupon": 8.5,
  "yield": 8.75,
  "rating": "AAA",
  "ratingAgency": "CRISIL",
  "maturity": "2028-03-15T00:00:00.000Z",
  "minInvestment": 100000,
  "faceValue": 1000,
  "tradable": true,
  "frequency": "Annual",
  "description": "HDFC Bank is one of India's leading private sector banks...",
  "createdAt": "2025-11-03T15:09:16.748Z",
  "updatedAt": "2025-11-03T15:09:16.748Z",
  "isActive": true
}
```

## Importing to MongoDB

### Method 1: Using Node.js Seed Script (Recommended)

```bash
cd backend
npm run seed:bonds
```

This script will:
- Connect to MongoDB using `MONGODB_URI` from `.env`
- Clear existing bonds (optional)
- Insert all bonds from `bonds.json`
- Display a summary of inserted bonds

### Method 2: Using mongoimport CLI

```bash
mongoimport --db unibonds --collection bonds --file backend/data/bonds.json --jsonArray
```

**Note:** Dates need to be converted to MongoDB Date format if using mongoimport directly. The Node.js seed script handles this automatically.

## MongoDB Model

The bonds are stored using the `Bond` model defined in `backend/models/Bond.js` with the following indexes:

- `bondId` (unique)
- `isin` (unique)
- `type`
- `rating`
- `tradable`
- `isActive`
- `maturity`
- Compound indexes for common queries

## API Endpoints

Once imported, bonds can be accessed via:

- `GET /api/bonds` - Get all bonds (with filters)
- `GET /api/bonds/:id` - Get bond by ID
- `GET /api/bonds/type/:type` - Get bonds by type (G-Sec, PSU, NBFC, etc.)
- `GET /api/bonds/rating/:rating` - Get bonds by rating (AAA, AA+, etc.)

### Query Parameters for `/api/bonds`:

- `type` - Filter by bond type
- `rating` - Filter by rating
- `minYield` / `maxYield` - Filter by yield range
- `tradable` - Filter by tradable status (true/false)
- `isActive` - Filter by active status (true/false)
- `search` - Search in issuer, ISIN, or description
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)
- `sortBy` - Sort field (yield, coupon, maturity, bondId, rating)
- `sortOrder` - Sort direction (asc/desc, default: desc)

### Example API Calls:

```bash
# Get all active bonds, sorted by yield
GET /api/bonds?isActive=true&sortBy=yield&sortOrder=desc

# Get PSU bonds with minimum 8% yield
GET /api/bonds?type=PSU&minYield=8

# Search for HDFC bonds
GET /api/bonds?search=HDFC

# Get AAA rated bonds, page 2
GET /api/bonds?rating=AAA&page=2&limit=10
```

## Data Statistics

- **Total Bonds:** 55
- **Types:** G-Sec, PSU, NBFC, Corporate
- **Ratings:** SOV, AAA, AA+, AA, etc.
- **Yield Range:** ~7% to ~9.5%

