# My Portfolio

## Overview

This is a personal portfolio website built using **React** and **Tailwind CSS**. The project showcases my skills, projects, and provides an easy way for potential employers or collaborators to get in touch. The design is responsive, supports light and dark modes, and incorporates modern design elements like glassmorphism.

## Features

- **Light/Dark Mode**: Seamless transition between light and dark themes.
- **Responsive Design**: Optimized for various screen sizes.
- **Glassmorphism**: Modern and visually appealing glass-like component effects.
- **Custom Typography and Color Palette**: Tailored design for headings, buttons, and body text.
- **Project Showcase**: Highlight personal projects with brief descriptions and links.
- **Contact Section**: A call-to-action section for easy communication.

## Technologies Used

- **React**: Component-based structure for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: For interactivity and dynamic functionality.

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/krantikumar09/portfolio-krantikumar.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio-krantikumar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Tailwind CSS Configuration

The project includes a custom Tailwind CSS configuration for colors, typography, and utility classes. The `tailwind.config.js` file is already set up with the following:

- **Colors**: Primary, secondary, background, text, and accent colors for both light and dark modes.
- **Typography**: Font sizes and font families tailored for headings and body text.
- **Custom Utilities**: Glassmorphism effects using `backdrop-filter`.

## File Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Main sections (About, Projects, Contact)
│   ├── App.jsx           # Root component
│   └── index.css        # Global styles
└── tailwind.config.js      # Tailwind CSS configuration
```

## Key Components

### Header

Contains the navigation links with a responsive menu and theme toggle.

### About Section

Introduces who I am and my professional background.

### Projects Section

Displays my featured projects with descriptions and links to live demos or repositories.

### Contact Section

Provides a call-to-action button for reaching out.

### Footer

Includes copyright information and social links.

## Deployment

The site can be deployed using platform like **Netlify**:

live link https://krantikumar09.github.io/portfolio-krantikumar/

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting platform.

## Usage

- Navigate through the sections using the header menu.
- View project details by clicking on the provided links.
- Use the contact button in the "Contact" section to reach out.

## Contributing

Feel free to contribute by submitting a pull request. Suggestions and improvements are welcome!

## License

This project is licensed under the MIT License. You are free to use and modify it as needed.

## Contact

If you have any questions or want to collaborate, please reach out via the contact section on the website.
