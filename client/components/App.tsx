import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['cats'],
    queryFn: async () => {
      const res = await request.get('/api/v1/cats')
      return res.body as CatImage[]
    },
  })
  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p> Opps! {String(error)}</p>
  }
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
//   return <pre>{JSON.stringify(data, null, 2)}</pre>
// }

export default App
