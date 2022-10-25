import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interior</h2>
        <select id="interior">
            <option value="0">☆ Choose an option ☆</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}