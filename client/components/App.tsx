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
    <ul>
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
