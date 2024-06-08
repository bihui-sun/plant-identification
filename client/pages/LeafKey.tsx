import leafkeyData from '../../data/leafmap'
import Tree from '../components/Tree'

function LeafKey() {
  console.log(leafkeyData)
  return (
    <>
      <Tree data={leafkeyData} />
    </>
  )
}

export default LeafKey
