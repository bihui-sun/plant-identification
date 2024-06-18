import { useFruits } from '../hooks/useFruits.ts'
import LEAF_KEYS from '/assets/LEAF_KEYS.png'
import ImageZoomInOut from '../components/ImageZoomInOut.tsx'
import juvenile_leaves from '/assets/Kaikomako/juvenile_leaves.png'
import adult_leaves from '/assets/Kaikomako/adult_leaves.png'
import fruit from '/assets/Kaikomako/fruit.png'

function PlantDetail() {
  // const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>
          Kaikōmako
          <span>
            <em>(Pennantia corymbosa)</em>
          </span>
        </h1>

        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
        <div style={{ display: 'inline-flex' }}>
          <ImageZoomInOut imageUrl={juvenile_leaves} />
          <ImageZoomInOut imageUrl={adult_leaves} />
          <ImageZoomInOut imageUrl={fruit} />
        </div>

        <div>
          <h3>Family: </h3>
          <p>Pennantiaceae</p>
          <h3>Structure Class: </h3>
          <p>Trees & Shrubs</p>
          <h3>Description:</h3>
          <p>
            A dense tangled shrub with zig-zagging branches bearing small leaves
            with 3-4 large lobes at the tip growing into a small tree bearing
            much larger leaves that still have small lobes at the tip (though
            these are less obvious). Juvenile leaves 7-15mm long, adult leaves
            5cm long by 3cm wide.
          </p>
          <h3>Flower Color: </h3>
          <p>White</p>
          <h3>Fruit:</h3>
          <p>
            The fruit of Kaikōmako is typically small, round, and berry-like,
            often green or purplish in color when ripe.
          </p>
          <h3>Identification Key:</h3>
          <p>
            Key identification features are: juvenile leaves an adult leaves are
            different, pupple berry-like fruit when ripe.
          </p>
          <h3>Phenology:</h3>
          <p>
            Kaikōmako has three stages; juvenile, intermediate and adult.
            Kaikōmako can fruit in its intermediate stage and even in its
            juvenile stage; this is known as precocious fruiting. Many of the
            Kaikōmako trees that are in their adult stage will still feature
            lower-level juvenile leaves whilst having upper-level adult leaves.
            Kaikōmako is said to have this juvenile divaricate phase because it
            may enhance the plant&apos;s chance at capturing light, which would
            be advantageous to the plant as it grows in forests which can be
            covered by the canopy of larger trees.
          </p>
          <h3>Note:</h3>
          <p>
            Kaikōmako is dioecious, meaning it has female and male flowers. The
            female flower&apos;s anthers are shorter than the males, and the
            male flowers have a rudimentary ovary that doesn&apos;t have a
            stigma.
          </p>
        </div>
      </div>
    </>
  )
}

export default PlantDetail
