# Project Dependencies

This project requires the following dependencies to be installed:

- **React**: A JavaScript library for building user interfaces.
- **ReactDOM**: Provides DOM-specific methods that can be used at the top level of your app.
- **Next.js**: A React framework for building server-rendered applications.

## Installation

To get started, ensure you have Node.js installed, then run:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

```

Starting the Development Server
-------------------------------

To start the development server for your Next.js project, run the following command in your terminal:

`npm run dev`

This command triggers the `dev` script defined in your `package.json` file, which starts the Next.js development server.

### Accessing the Application

Once the server is running, open your browser and navigate to <http://localhost:3000> to view your application.


# Pricing Component

## Overview

This `PricingComponent` is a React functional component that provides a user-friendly interface for selecting a pricing tier based on traffic (pageviews). Users can choose between monthly and yearly billing options, and adjust their desired pageviews using a slider.

## Features

- **Traffic-Based Pricing:** Users can select from various pricing tiers based on their pageview needs.
- **Billing Options:** Users can switch between monthly and yearly billing with a discount for yearly plans.
- **Interactive Slider:** A slider allows users to select the number of pageviews they require, dynamically updating the price displayed.

## Pricing Tiers

The component supports the following pricing tiers:

| Pageviews (K) | Price (Monthly) |
|----------------|------------------|
| 10             | $8               |
| 50             | $12              |
| 100            | $16              |
| 500            | $24              |
| 1000           | $36              |

## Billing Options

### Monthly Billing
- Users pay the standard monthly price as per their selected tier.

### Yearly Billing
- Users who opt for yearly billing receive a **25% discount** on the monthly price.
- The discounted price is calculated as follows:

  Yearly Price=Monthly Price×0.75

## Slider Functionality

- The slider allows users to select a tier based on the number of pageviews. 
- The slider range is from **1 to 5**, corresponding to the available tiers (10K, 50K, 100K, 500K, 1M).
- The slider's value is linked to the `pageviews` state, which determines the current tier.
- When the user moves the slider, the `onChange` event updates the `pageviews` state based on the selected index:

  ```javascript
  setPageviews(pricingTiers[newValueIndex - 1].views);


# ThemeToggle Component

The `ThemeToggle` component is a simple React functional component that allows users to switch between light and dark modes in your application. It features a checkbox toggle that updates the theme based on user interaction.

## Features

- **Toggle Switch**: Users can easily switch between dark mode and light mode using a checkbox.
- **Dynamic Label**: The label updates to indicate the current mode (Dark Mode or Light Mode).
- **Controlled Component**: The component uses React state to control the mode, ensuring a consistent UI.

## Installation

To use the `ThemeToggle` component in your React application, follow these steps:

1. Ensure you have React installed in your project.
2. Copy the `ThemeToggle.tsx` file into your components directory.
3. Import the component in your application:

   ```javascript
   import ThemeToggle from './ThemeToggle';


# RootLayout Component

The `RootLayout` component is a React functional component that serves as the main layout for your application. It manages the theme (light/dark mode) and includes the `PricingComponent`, providing a cohesive structure for rendering child components.

## Features

- **Theme Toggle**: Users can switch between light mode and dark mode using a toggle switch in the header.
- **Integration with PricingComponent**: The layout includes the `PricingComponent`, allowing users to view pricing options while maintaining the selected theme.
- **Responsive Design**: The layout is designed to be flexible, adapting to different child components while keeping the header consistent.

## Installation

To use the `RootLayout` component in your React application, follow these steps:

1. Ensure you have React and ReactDOM installed in your project.
2. Copy the `RootLayout.tsx` file into your components directory.
3. Ensure the `PricingComponent` is also in the correct path as imported in the `RootLayout`.
4. Import the component in your main application file:

   ```javascript
   import RootLayout from './RootLayout';


