import { useEffect } from "react"
import { origin_schedule } from "./array"

export default function OriginSchedule({ setter }) {
    useEffect(() => {
        setter(origin_schedule[0].tariff)
    }, [])

    return (
        <select name="origin-schedule" id="origin-schedule" onChange={(e) => setter(e.target.value)}>
            {origin_schedule.map((obj) => (
                <option value={obj.tariff} key={obj.id}>{obj.name} ({obj.tariff} %)</option>
            ))}
        </select>
    )
}