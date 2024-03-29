# Tech Stack
## Frontend
- Next.js
- SWR
- Mantine
## Backend
- NodeJS
- PayloadCMS
- Meilisearch
- PostgreSQL
## Infrastructure
- AWS
- S3
- RDS
- EC2

# Description
## User
- Search books by name and facets
- Go to any book
- Add a request to rent the book
- Add a request to return the book
- Scan a book and request to rent it
## Admin
- See requests about books
- Approve and decline requests about books
- See who is overdue
- Add and remove books
## System
- Cron job about who is overdue and send email about overdue
- OAuth with Azure Ad
- Admin panel with information with books, users, requests and book rentals
- UI for users to rent and check-out books
- App for scanning the books' codes


# Todos
## Redesign frontend
## Convert all fetch calls in nextjs clientside to SWR mutations
## Refactor endpoints
## Access control for book requests (cancelled requests shouldnt be approvable)
## Fix dashboard requests layout
## Add profile page
## Add statistics page
## Refine request page
## Refine product page
## Add home page
