import { useState, useEffect } from 'react'
import OriginSchedule from './Origins/component'
import './App.css'

export default function App() {
  const [tariff, setTariff] = useState(0)
  const [price, setPrice] = useState(0)
  const [distperc, setDistPerc] = useState(40)

  const calcSet = [tariff, price, distperc]

  const [calcoriginprice, setOriginPrice] = useState(0)
  const [calctariffcost, setCalcTariffCost] = useState(0)
  const [calctotalprice, setCalcTotalPrice] = useState(0)

  function Calculate() {
    const in_price = isNaN(price) ? 0 : price
    const in_dist = isNaN(distperc) ? 0 : distperc
    const in_tariff = isNaN(tariff) ? 0 : tariff
    const origin_price = in_price - (in_price*(in_dist/100))
    const tariff_cost = origin_price * (in_tariff/100)
    const total_cost = in_price + tariff_cost

    setOriginPrice(origin_price)
    setCalcTariffCost(tariff_cost)
    setCalcTotalPrice(total_cost)
  }

  useEffect(Calculate, calcSet)

  return (
    <div className="app">
      <div><strong>Inputs</strong></div>
      <div className='padded'>
        Select tariff profile: <OriginSchedule setter={setTariff} />
      </div>
      <div>
        Or manually enter tariff: <input type="number" name="custom-tariff-v" id="custom-tariff-v" value={tariff} onChange={(e) => setTariff(e.target.value)} /> %
      </div>
      <div className='padded'>
        Retail Price: $ <input type="number" name="retail-price" id="retail-price" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} />
      </div>
      <div className='padded'>
        Distribution Factor: <input type="number" name="distribution-factor" id="distribution-factor" value={distperc} onChange={(e) => setDistPerc(e.target.valueAsNumber)} /> %
      </div>
      <br />
      <div className="results">
        <div><strong>Results</strong></div>
        <div>The price of origin is ${calcoriginprice.toFixed(2)}</div>
        <div>The calculated tariff cost is ${calctariffcost.toFixed(2)}</div>
        <div>The calculated total price is ${calctotalprice.toFixed(2)} (if this isn't included in retail price already)</div>
      </div>
      <div>
        <p><strong>Input Explainers</strong></p>
        <p>Country of Origin: Use this to select the country the item was assembled in or most of its parts are sourced from.</p>
        <p>Retail Price: The retail price the item is advertised at, before sales tax or municipal duties.</p>
        <p>Distribution Factor: The amount of the retail price that encompasses USA-side distribution costs, final assembly, and profit margin. The reason why this is an input is because this can vary from item to item or industry to industry. If in doubt, enter 40%</p>
      </div>
      <div>
        Tariff Calculator by Dilan Gilluly
      </div>
    </div>
  )
}