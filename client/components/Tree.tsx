import Branch from './Branch'

function Tree({ data }) {
  console.log(data)
  return (
    <>
      {data.map((item) => {
        return <Branch key={item.id} item={item} />
      })}
    </>
  )
}

export default Tree
