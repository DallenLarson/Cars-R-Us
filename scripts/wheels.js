import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Rims</h2>
        <select id="wheel">
            <option value="0">☆ Choose an option ☆</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}