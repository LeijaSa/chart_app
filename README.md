# Chart Application

This is a web application built with **React**, **Redux**, and **Material-UI** that allows users to manage and view charts. The app supports adding, editing, and deleting charts, with features like data series management, chart creation, and displaying charts using **Highcharts**.

**Status**: This project is a **work in progress**. While core functionality is in place, there are areas that need improvement and additional features that are planned for future releases.

## Features

- **Responsive Design**: The app is fully responsive, offering a smooth experience on both desktop and mobile devices.
- **Chart Display**: Highcharts integration for displaying line charts, bar charts, and pie charts.
- **CRUD Operations**: Add new charts, edit existing ones, and delete charts (edit/delete buttons not yet functional).
- **Data Series Management**: Add, remove, and update data points for each chart.
- **Search Functionality**: Search through the list of charts by name.
- **Redux State Management**: The app uses Redux for state management to store and update the chart data and selected chart.
- **Accessibility**: The app needs further attention on accessibility features (e.g., focus management and `aria` attributes).

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing the global state.
- **Material-UI**: For UI components and styling.
- **Highcharts**: For rendering dynamic charts.
- **React Router**: For navigation between pages.
- **Responsiveness**: Ensured mobile-first responsive design.

## Current Status & To-Dos

### 1. **Work in Progress**

- The application is functional but still a work in progress.
- The `edit` and `delete` buttons for charts are **not yet working**.
- Some **accessibility issues** still need to be addressed (focus management and ARIA attributes).

### 2. **Unit Tests**

- Unit tests for components are planned but have not yet been implemented.
- Focus will be on testing core functionalities (e.g., adding charts, handling data changes).

### 3. **Highcharts**

- Currently only line charts are supported.
- **Future plans** include adding support for different chart types like **Bar** and **Pie**.

### 4. **Backend**

- Currently, the chart data is loaded from a local file (`dataseries.json`).
- **Proper backend setup** needs to be done for handling CRUD operations, such as saving and loading data from a database.

## Installation

### 1. Clone the repository

```bash
git clone
cd chart-app
npm install
npm run dev
```
