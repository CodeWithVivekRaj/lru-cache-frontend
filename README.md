# LRU Cache Frontend

This is the frontend for a Least Recently Used (LRU) Cache system, implemented using React. It provides a user interface to interact with the cache, allowing users to set, get, and delete key-value pairs.
 It also includes a WebSocket endpoint to enable real-time updates of cache data.

## Features

- **Set Key:** Set a key-value pair in the LRU cache with an optional expiration time.
- **Get Key:** Retrieve the value associated with a given key from the cache.
- **Delete Key:** Delete a key-value pair from the cache.

## Sections

The frontend consists of the following sections:

1. **Set Key:**
   - This section provides users with the ability to set a key-value pair in the LRU cache.
   - Users can input a key and its corresponding value.
   - Additionally, users have the option to specify an expiration time for the key-value pair, after which it will be automatically removed from the cache.
   - Setting a key allows users to store data in the cache for future retrieval.

2. **Get Key:**
   - In this section, users can retrieve the value associated with a given key from the cache.
   - Users input the key they wish to retrieve the value for, and if the key exists in the cache, its corresponding value is displayed.
   - This functionality enables users to access previously stored data quickly and efficiently.

3. **Delete Key:**
   - The delete key section allows users to remove a key-value pair from the cache.
   - Users simply input the key they want to delete, and if it exists in the cache, it is removed.
   - This feature provides users with the ability to manage the contents of the cache by removing unnecessary or outdated data.
 
3. **Real-Time Cache Data:**
   - This section provides users with a real-time view of the data stored in the cache.
   - Utilizing WebSocket technology, the frontend receives instant updates whenever there is a change in the cache content.
   - Users can observe the latest key-value pairs in the cache without the need for manual refresh, ensuring they always have access to the most current data.
   - This feature enhances user experience by providing a dynamic and up-to-date display of cache contents, facilitating efficient monitoring and management of data.
   - These sections collectively offer comprehensive functionality for interacting with the LRU cache, including storing, retrieving, and removing data based on user input.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository to your local machine:**

    ```bash
    git clone https://github.com/CodeWithVivekRaj/lru-cache-frontend.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd lru-cache-frontend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Application

1. **Start the development server:**

    ```bash
    npm start
    ```

2. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000).**

3. **You should now see the LRU Cache Frontend running locally.**

### Configuration

- The frontend assumes that the backend API for interacting with the cache is running on `http://localhost:8080`. If your backend API is running on a different URL or port, you can update the URL in the code.

## Backend API

Make sure to set up the corresponding backend API for the LRU Cache. You can find an example implementation in [this repository](https://github.com/CodeWithVivekRaj/lru-cache-server.git).

## Dependencies

- **React:** A JavaScript library for building user interfaces.
- **axios:** Promise-based HTTP client for making requests to the backend API.
- **react-toastify:** Library for displaying notifications (toasts) in React applications.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.
