# Blog Analytics and Search Application with Express and Lodash

This Node.js application is a blog analytics and search tool developed using Express.js and Lodash. It fetches blog data from a third-party API, performs analytics on the data, and provides a blog search functionality. This README provides an overview of the application, instructions for getting started, endpoints, and dependencies.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <R-i-t-i-k-a/DataAnalytics>
   ```
2. Install the required dependencies[express, axios, lodash] using npm:

   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
   </code></div></div></pre>
3. Start the Express server:

   <pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
   </code></div></div></pre>

The server will start on port 3000 by default. You can access the application by opening a web browser and navigating to `http://localhost:3000`.

## Endpoints

### 1. `/api/blog-stats`

* This endpoint retrieves blog data from a third-party API, performs analytics, and responds with JSON data containing the following statistics:
  * Total number of blogs.
  * Title of the longest blog.
  * Number of blogs with "privacy" in the title.
  * An array of unique blog titles.

### 2. `/api/blog-search`

* This endpoint accepts a query parameter (`query`) for searching blogs. It is case-insensitive and filters blogs based on the provided query string. If blog data is not available, it fetches the data first and then performs the search.

### 3. `/`

* The root endpoint provides a simple welcome message.

## Usage

1. Access the application by opening a web browser and navigating to `http://localhost:3000`.
2. Use the following endpoints:
   * `/api/blog-stats` for blog statistics.
   * `/api/blog-search?query=<your_query>` for searching blogs.

## Dependencies

* **Express.js** : A web application framework for Node.js.
* **Lodash** : A utility library for JavaScript that simplifies many common programming tasks.
* **Axios** : A promise-based HTTP client for making requests to the third-party blog API.

## Author

* Ritika
