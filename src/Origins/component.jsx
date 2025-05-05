import { useEffect } from "react"
import { origin_countries } from "./array"

export default function OriginCountries({ setter }) {
    useEffect(() => {
        setter(origin_countries[0].tariff)
    }, [])

    return (
        <select name="origin-country" id="origin-country" onChange={(e) => setter(e.target.value)}>
            {origin_countries.map((obj) => (
                <option value={obj.tariff} key={obj.id}>{obj.name} ({obj.tariff} %)</option>
            ))}
        </select>
    )
}