import Modal from '@/components/Modal';
import Image from 'next/image';

export default function RecipeModal() {
  return (
    <Modal>
      <div className="flex flex-col space-y-4 text-brown-400">
        <Image
          width={400}
          height={200}
          src="/img/brussel_chips--m.jpg"
          alt="recipe"
        />
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-bold text-xl">TITLE</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda
              exercitationem. A sapiente ab, perferendis et non voluptatem nihil reiciendis
              blanditiis maxime sit quibusdam necessitatibus id corporis nesciunt nam nobis.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold">
              Cooking time: <span className="font-normal">20</span>
            </p>
            <p className="font-semibold">
              Prep time: <span className="font-normal">10</span>
            </p>
            <p className="font-semibold">
              Servings: <span className="font-normal">4</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="font-bold text-lg uppercase">Ingredients:</h2>
            <ul className=" list-outside list-disc px-4">
              <li>
                <span>Milk</span>
                <ul className="list-circle ml-4 list-outside">
                  <li>$1 off Milk</li>
                  <li>Use Promo code GETMILK on Peapod and receive $1 off</li>
                </ul>
              </li>
              <li>
                <span>Coconut</span>
              </li>
              <li>
                <span>Patties</span>
              </li>
              <li>
                <span>Tomatoes</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg uppercase">Directions:</h2>
            <ul className=" list-outside list-disc px-4">
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, suscipit?</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, suscipit?</p>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, suscipit?</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}
