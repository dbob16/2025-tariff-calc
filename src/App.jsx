import { useState } from 'react'
import OriginCountries from './Origins/component'
import './App.css'

export default function App() {
  const [tariff, setTariff] = useState(0)
  const [price, setPrice] = useState(0)
  const [distperc, setDistPerc] = useState(40)

  const [calcoriginprice, setOriginPrice] = useState(0)
  const [calctariffcost, setCalcTariffCost] = useState(0)
  const [calctotalprice, setCalcTotalPrice] = useState(0)

  function Calculate() {
    const origin_price = price - (price*(distperc/100))
    const tariff_cost = origin_price * (tariff/100)
    const total_cost = price + tariff_cost

    setOriginPrice(origin_price)
    setCalcTariffCost(tariff_cost)
    setCalcTotalPrice(total_cost)
  }

  return (
    <div className="app">
      <div><strong>Inputs</strong></div>
      <div className='padded'>
        Select country of origin: <OriginCountries setter={setTariff} />
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
      <div className='padded'>
        <button onClick={Calculate}>Calculate</button>
      </div>
      <br />
      <div><strong>Results</strong></div>
      <div>
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
    </div>
  )
}