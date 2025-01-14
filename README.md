# Consuming external APIs from our server - Choose your own adventure!

This exercise is about exploring the world of APIs available to us.

In addition to hitting our own APIs with JavaScript, we can also make use of APIs exposed from all around the Internet! As to how the API works (and what routes are exposed to us) depends on how it was coded by the developer or team of developers who created it, part of learning how to use external APIs is also about learning how to read their documentation.

## Setup

### 0. Cloning and installation

- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

  ```sh
  cd consuming-server-apis
  npm i
  npm run dev
  ```

  </details>

## Requirements

### 1. Choosing an API

- [ ] Choose an API to work with
  <details style="padding-left: 2em">
    <summary>Tips</summary>
    
    * If you choose an API that enforces CORS, you'll need to consume that API from your server-side, and consume your own API from the client-side (i.e. using your server as a proxy).
    * If you choose an API that requires a key or other authentication token, you will need to create a `.env` (to keep your key hidden from git). In order to use the `.env` file, you must import and setup dotenv as follows:

      ```ts
      import 'dotenv/config'

      // to access the key variable
      const apiKey = process.env.YOUR_API_KEY_NAME
      ```

      By including `.env` in the `.gitignore` file your personal api keys will not be pushed up to GitHub. It is good practice to provide a sample file for others that will use the repository _(such as facilitators or team members)_ to know where to obtain and how to include their key.

      Create a `.env.sample` file:

      ```bash
      # Sign up for an api key at https://example.com/api-sign-up
      YOUR_API_KEY_NAME=<api key>
      ```

</details>

Some possibilities are listed below if you want a place to start, otherwise find one of your own!

### 2. Building API calls

- [ ] Create the functions that make your API calls in `client/apiClient.ts`, and call those functions within your React components
<details style="padding-left: 2em">
  <summary>Tip</summary>
  
  There is a basic API route set up for you - you may wish to use this as a template.
</details>

## API Suggestions

If you're not sure where to start, you can use one of the APIs listed below.

<details>
  <summary>APIs with CORS restrictions (server-side proxy required)</summary>

- https://www.affirmations.dev: positive affirmations/quotes
- https://openlibrary.org/developers/api: books
</details>
<br />

<details>
  <summary>API key required (.env file)</summary>

- https://www.omdbapi.com: movies
- https://thecatapi.com: cat pictures
- https://developer.marvel.com: Marvel comics
- https://the-one-api.dev: Lord of the Rings
- https://www.tepapa.govt.nz/learn/research/datasets/collections-api Te Papa Collections
- https://data.rijksmuseum.nl/object-metadata/api: Rijksmuseum (art)
- https://opendata.metlink.org.nz: Metlink (Wellington public transport)
- https://dev-portal.at.govt.nz: Auckland Transport
- https://docs.opencollective.com/help/contributing/development/api: GraphQL
</details>
<br />

<details>
  <summary>API Collections</summary>

- https://api.nasa.gov: a library of APIs from NASA (picture of the day, natural event tracker, etc.)
- https://github.com/public-apis/public-apis: a LOT of APIs (inaccurate in places, use this to help start your search but you'll have to investigate the APIs themselves, and please note that a few of them may have triggering or NSFW content, so please proceed with care)
</details>
<br />
If any of the examples in this list are out of date, please let your facilitators know and create a Pull Request on this repo!

## Submitting this Challenge for Marking

This challenge can be used for the following trello assessment(s): 
- **WD02 - Build a Javascript application that consumes a restful JSON API**

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=consuming-server-apis)
