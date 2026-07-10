// app/utils/aiUtils.ts
export const siteConfig = {
  name: 'Sri Manikanta Tour & Travels',
  url: 'https://manikantatours.com',
  description: 'Sri Manikanta Tour & Travels is a trusted travel agency based in Bangalore, India, providing transportation and tour services across Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, and other South Indian states.',
  location: 'Bangalore, Karnataka, India',
  founded: '2006',
  phone: '+91 95917 62419',
  email: 'support@manikantatravels.com',
  services: [
    'Bus Rentals',
    'Car Rentals',
    'Tempo Traveller',
    'Luxury Buses',
    'Wedding Transportation',
    'Corporate Travel',
    'Airport Transfers',
    'Pilgrimage Tours',
    'Sightseeing Packages',
    'South India Tours',
  ],
  destinations: [
    'Bangalore',
    'Mysore',
    'Coorg',
    'Ooty',
    'Kodaikanal',
    'Munnar',
    'Wayanad',
    'Hampi',
    'Gokarna',
    'Pondicherry',
    'Kerala',
    'Tamil Nadu',
    'Karnataka',
    'Andhra Pradesh',
  ],
  stats: {
    years: '18+',
    vehicles: '50+',
    customers: '50,000+',
    destinations: '25+',
  },
}

export function generateAITxt(): string {
  return `
# ${siteConfig.name}

## About
${siteConfig.description}
Founded: ${siteConfig.founded}
Location: ${siteConfig.location}

## Services
${siteConfig.services.join(', ')}

## Destinations
${siteConfig.destinations.join(', ')}

## Stats
- Years of Excellence: ${siteConfig.stats.years}
- Vehicle Fleet: ${siteConfig.stats.vehicles}
- Happy Customers: ${siteConfig.stats.customers}
- Destinations: ${siteConfig.stats.destinations}

## Contact
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- Website: ${siteConfig.url}
- Location: ${siteConfig.location}
`
}

export function generateLLMsTxt(): string {
  return `
# ${siteConfig.name}

${siteConfig.description}

## Services

### Bus Rentals
- AC/Non-AC buses (20-40 seater)
- Luxury coaches
- Mini buses
- Sightseeing buses
- Wedding buses

### Car Rentals
- Sedan (4-6 seater)
- SUV (6-7 seater)
- Innova (7-8 seater)
- Luxury cars
- Tempo Traveller (12-18 seater)

### Special Services
- Wedding transportation
- Corporate travel solutions
- Airport transfers
- Pilgrimage tours
- South India sightseeing packages
- Day trips and weekend getaways

## Destinations

### Karnataka
Bangalore, Mysore, Coorg, Hampi, Gokarna, Chikmagalur

### Tamil Nadu
Ooty, Kodaikanal, Chennai, Kanyakumari, Rameswaram

### Kerala
Munnar, Wayanad, Alleppey, Thekkady, Trivandrum

### Andhra Pradesh
Tirupati, Visakhapatnam, Vijayawada

## Why Choose Us

- ${siteConfig.stats.years} years of excellence
- Fleet of ${siteConfig.stats.vehicles} well-maintained vehicles
- ${siteConfig.stats.customers} satisfied customers
- Service across ${siteConfig.stats.destinations} destinations
- Experienced, licensed drivers
- 24/7 customer support
- Transparent pricing
- Safety first approach

## Contact

Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
Website: ${siteConfig.url}
Location: ${siteConfig.location}
`
}