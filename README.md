# TraTour

## Project Overview
**TraTour** is a travel and tours website built using React.js. The website allows users to browse and book travel packages. This project helps in understanding how to create interactive web applications, integrate APIs, and manage state using basic React principles.

## Objective
To introduce front-end web development using React.js and build a functional travel and tours website with search functionalities, detailed views for travel packages, and a client-side booking system.

## Features
- **Landing Page:** A search bar for destinations and a carousel/grid layout to showcase featured travel packages.
- **Package Listings:** Display a list of travel packages with details fetched from a JSON file.
- **Package Details:** Detailed view for each travel package with images, descriptions, and pricing.
- **Booking System:** Form for user details and booking functionality using LocalStorage to simulate user authentication.
- **State Management:** Using React state and props to handle travel package data and booking state.
- **Responsive Design:** Ensuring the website is responsive and works well on different devices and screen sizes.

## Technologies Used
- **React.js:** For building the application.
- **CSS Frameworks:** Bootstrap, Tailwind CSS, Bulma (optional) for UI design.
- **LocalStorage:** To simulate user authentication and save user data.

## Project Timeline
- **Start Date:** Friday, July 26, 2024
- **Finish Date:** Wednesday, August 7, 2024

## Project Setup
### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tratour.git
    cd tratour
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Project Structure
```bash
tratour/
├── public/
│   └── images/
│   └── (your images here)
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Favorites
│   │   ├── AllPackages
│   │   └── ...
│   ├── containers/
│   │   ├── Footer
│   │   ├── NavBar
│   │   └── ...
│   ├── TourContext/
│   │   ├── TourContext.jsx
│   ├── data.json
│   ├── featuredData.json
│   ├── App.js
│   ├── main.jsx
│   └── ...
├── package.json
└── README.md
```

## File Descriptions
- **`public/images/`**: Directory for storing image files.
- **`src/components/`**: Contains React components for the application.
- **`src/containers/`**: Contains React containers for the application.
- **`src/App.js`**: Main React component.
- **`src/main.jsx`**: Entry point for the React application.
- **`package.json`**: Contains project metadata and dependencies.
- **`README.md`**: Project documentation.

## packages.json Sample
```json
[
  {
    "id": 1,
    "image": "images/package1.jpg",
    "location": "Paris, France",
    "duration": "5 days",
    "persons": "2 Persons",
    "title": "Explore the city of lights",
    "rating": 4.8,
    "numberOfRatings": 300,
    "amount": 1200,
    "pecks": "Free breakfast",
    "otherDetails": "Guided tours included"
  },
  {
    "id": 2,
    "image": "images/package2.jpg",
    "location": "New York, USA",
    "duration": "7 days",
    "persons": "4 Persons",
    "title": "Discover the Big Apple",
    "rating": 4.7,
    "numberOfRatings": 450,
    "amount": 1500,
    "pecks": "Free airport transfer",
    "otherDetails": "Access to premium attractions"
  },
  ...
]
```

## How to Use
1. **Landing Page:** Users can search for destinations and view featured travel packages.
2. **Package Listings:** Users can view a list of available travel packages.
3. **Package Details:** Click on a package to view more details and proceed to booking.
4. **Favorites**: Users can choose favorites and view them later in the favorites tab/section of the page.
5. **Booking System:** Fill out the booking form and save details using LocalStorage.

## Contribution
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact
For any questions or support, please contact bankolejeremiahadeoye@gmail.com.

