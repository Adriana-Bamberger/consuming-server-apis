// Importing the things we'll use
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { CatImage } from '../../models/cats'

//The function that will display our app (Homepage)
function App() {
  //lets us use the state like things of if it's broken of not
  const { data, isPending, isError, error } = useQuery({
    // A query thing that we need, not sure why we need it.
    queryKey: ['cats'],
    // making a function that could take awhile
    queryFn: async () => {
      // if the api link if requested it'll return our api data (res I think stands for results?)
      const res = await request.get('/api/v1/cats')
      return res.body as CatImage[]
    },
  })
  // if it's pending, return loading text
  if (isPending) {
    return <p>Loading...</p>
  }
  // if theirs an error in finding the data, return the error.
  if (isError) {
    return <p> Opps! {String(error)}</p>
  }
  // Else if you can and have found the data show it like so.
  return (
    // we put this in an unordered list as it's an easy way ofdisplaying them down a page.
    <ul>
      {/* data is the variable we have asiged for the api as a whole */}
      {/* we use the .map to go over it and return just one part of it in a new array */}
      {/* search resualt is a variable we have made just now in these brackets so that we can label our part of the api that we're working with. */}
      {/* this is effectaly asigned a new name to our api data, but the array version of it. */}
      {/* and then thourgh out the function we use dot notation to get parts out of our array to display or use them. */}

      {data.map((searchResult) => (
        <li key={searchResult.id}>
          <img
            src={searchResult.url}
            height={searchResult.height}
            width={searchResult.width}
            alt={'cat'}
          />{' '}
        </li>
      ))}
    </ul>
  )
}
// export app so that index.html can show it
export default App
