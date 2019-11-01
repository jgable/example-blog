import { Link } from 'react-router-dom'

const Tag = ({ name }) => {
  return (
    <Link
      to={`/tags/${name}`}
      className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 mb-1 rounded"
    >
      {name}
    </Link>
  )
}

export default Tag
